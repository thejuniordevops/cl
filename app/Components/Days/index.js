/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, FlatList, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';
import CardView from 'react-native-rn-cardview';
import {dates} from '../../utils/date';
//generate dates
let listDates = dates();

export const Days = ({
  emptySat,
  emptyFri,
  emptySun,
  emptyMon,
  emptyTue,
  emptyWed,
  emptyThu,
  selected,
  idx,
  selectDeals,
  stateObj,
  executeDeals,
}) => (
  <View style={styles.mainContainer}>
    <FlatList
      horizontal={true}
      data={listDates}
      style={{height: 65, flexGrow: 0}}
      renderItem={({item, index}) => {
        const dayOfTheWeek = item[3];
        const nameOfDay = item[0];
        const dateOfDay = item[1];
        const month = item[2];

        return (
          nameOfDay !== emptySat &&
          nameOfDay !== emptyFri &&
          nameOfDay !== emptySun &&
          nameOfDay !== emptyMon &&
          nameOfDay !== emptyTue &&
          nameOfDay !== emptyWed &&
          nameOfDay !== emptyThu && (
            <TouchableOpacity
              onPress={() => {
                // eslint-disable-next-line radix
                executeDeals(
                  selectDeals,
                  parseInt(dayOfTheWeek),
                  index,
                  stateObj,
                );
              }}
              style={{height: 70, marginLeft: 0}}>
              <CardView
                cardElevation={4}
                maxCardElevation={4}
                radius={7}
                backgroundColor={Colors.semiRed}>
                <View style={styles.dayCard}>
                  <Text
                    style={
                      selected && idx === index
                        ? {fontSize: 7, color: Colors.semiPink}
                        : {fontSize: 7, color: Colors.black}
                    }>
                    {nameOfDay}
                  </Text>
                  <Text
                    style={
                      selected && idx === index
                        ? {
                            color: Colors.semiPink,
                            fontSize: 17,
                            fontWeight: 'bold',
                          }
                        : {
                            color: Colors.black,
                            fontSize: 17,
                            fontWeight: 'bold',
                          }
                    }>
                    {dateOfDay}
                  </Text>
                  <Text
                    style={
                      selected && idx === index
                        ? {fontSize: 9, color: Colors.semiPink}
                        : {fontSize: 9, color: Colors.black}
                    }>
                    {month}
                  </Text>
                </View>
              </CardView>
            </TouchableOpacity>
          )
        );
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  mainContainer: {
    paddingRight: 0,
    paddingLeft: 25,
    paddingTop: 0,
    paddingBottom: 0,
  },
  dayCard: {
    backgroundColor: '#F2F2F2',
    paddingLeft: 10,
    paddingTop: 5,
    width: 52,
    height: 55,
    borderRightWidth: 1,
    borderStyle: 'solid',
    borderRightColor: 'red',
    borderRadius: 2,
  },
});