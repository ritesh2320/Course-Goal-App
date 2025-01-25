import React from 'react';
import {StyleSheet, View, TextInput, Button, Modal, Image} from 'react-native';

function GoalInput(props) {
  return (
    <>
      <Modal visible={props.modalVisible} animationType="slide">
        <View style={styles.appContainer}>
          <View style={styles.mainContainer}>
            <Image
              source={require('../assets/goal.jpg')}
              style={styles.image}
            />
            <TextInput
              placeholder="Your Course Goal..."
              style={styles.textContainer}
              onChangeText={props.goalInpHandler}
            />
            <View style={styles.buttonContainer}>
              <Button
                title="Cancel"
                onPress={props.CancelGoalHandler}
                color={'#f31282'}
              />
              <Button
                title="Add Goal"
                onPress={props.addGoalHandler}
                style={styles.button}
                color={'#5e0acc'}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#4c0a80',
  },
  textContainer: {
    width: '95%',
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 20,
    fontSize: 16,
    marginBottom: 24,
    color: '#120438',
    fontWeight: 'bold',
    borderRadius: 6,
    backgroundColor: '#e4d0ff',
  },
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'start',
    paddingBottom: 24,
    marginBottom: 24,
    paddingTop: 20,
    height: '99%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  image: {
    height: 200,
    width: 200,
    marginBottom: 24,
  },
});

export default GoalInput;
