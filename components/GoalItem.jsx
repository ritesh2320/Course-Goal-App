import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';

function GoalItem(props) {
  return (
    <>
      <View style={styles.goalList}>
        <View style={styles.goalsItem}>
          <Pressable
            android_ripple={{color: '#8e44ad'}}
            onPress={props.deleteGoal.bind(this, props.id)}>
            <Text style={styles.goalsText}>{props.text}</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}

// for ios apps to get an riple action. to achieve this in pressable tag add below line-->style={pressed => pressed && styles.pressedItems}

const styles = StyleSheet.create({
  goalList: {
    // marginTop: 20,
  },
  goalsItem: {
    margin: 8,
    // backgroundColor: '#5b2c6f',
    // backgroundColor: '#5e0acc',
    borderRadius: 8,
    color: 'white',
    fontSize: 18,
    backgroundColor: '#500073',
  },
  goalsText: {
    padding: 15,
    color: 'white',
    fontSize: 18,
  },
  pressedItems: {
    opacity: 0.5,
  },
});

export default GoalItem;
