import {useState} from 'react';
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  TextInput,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [enteredGoalText, setGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState<{text: string; id: string}[]>(
    [],
  );

  function StartAddGoalHandler() {
    setModalIsVisible(true);
  }
  function cancelGoalHandler() {
    setModalIsVisible(false);
  }

  function goalInputHandler(text) {
    setGoalText(text);
  }

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
    cancelGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals =>
      currentCourseGoals.filter(goal => goal.id !== id),
    );
  }

  return (
    <SafeAreaView style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color={'#F14A00'}
        onPress={StartAddGoalHandler}
      />
      <View style={styles.goalList}>
        {modalIsVisible && (
          <GoalInput
            modalVisible={modalIsVisible}
            goalInpHandler={goalInputHandler}
            addGoalHandler={addGoalHandler}
            CancelGoalHandler={cancelGoalHandler}
          />
        )}
      </View>
      <ScrollView>
        {/* mapping of list content */}
        {/* {courseGoals.map((goal, index) => (
          <View>
            <Text key={index} style={styles.goalsItem}>
              {goal}
            </Text>
          </View>
        ))} */}

        {/* flatlist---> used for rendering the list. it has two props i.e render item and data. it has a unique key */}

        <FlatList
          data={courseGoals}
          renderItem={itemsData => {
            return (
              <GoalItem
                text={itemsData.item.text}
                deleteGoal={deleteGoalHandler}
                id={itemsData.item.id}
              />
            );
          }}
          alwaysBounceVertical={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    // backgroundColor: '#4c0a80',
    backgroundColor: '#2A004E',
    height: '100%',
  },
  goalList: {
    marginTop: 20,
    borderColor: 'grey',
    borderWidth: 1,
  },
});

export default App;
