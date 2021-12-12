import React from "react";
import styled from "styled-components/native";
import ColumnTitle from "./ColumnTitle";
import { ScrollView, TouchableOpacity } from "react-native";
import { TextColor, ButtonColor, SubColor, MainColor, _WIDTH } from "../../Common/theme";
import Icon from "react-native-vector-icons/MaterialIcons";

const Container = styled.View`
  margin-bottom: 20px;
`;

const List = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-color: ${ButtonColor};
  border-bottom-width: 0.2px;
  padding-bottom: 15px;
`;

const Privious = styled.View``;

const Next = styled.View``;

const DateBox = styled.View`
  height: 90px;
  justify-content: space-around;
  align-items: center;
`;

const Month = styled.Text`
  color: ${TextColor};
  font-size: 14px;
`;

const DateView = styled.View`
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;
  border-color: ${prop => prop.selected ? ButtonColor : "rgba(245,246,250, 0.5)"};
  background-color: ${prop => prop.selected ? ButtonColor : MainColor};
  border-width: 0.5px;
  border-radius: 50px;
  padding: 5px;
`;

const Date = styled.Text`
  color: ${prop => prop.selected ? "rgb(255, 255, 255)" : "rgba(245,246,250, 0.5)"};
  font-size: 15px;
`;

const Day = styled.Text`
  color: ${TextColor};
  font-size: 12px;
`;

const TimeList = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
`;

const TimeBox = styled.View`
  width: ${_WIDTH * 0.28}px;
  height: 35px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: ${prop => prop.selected ? ButtonColor : "rgba(245,246,250, 0.5)"};
  background-color: ${prop => prop.selected ? ButtonColor : MainColor};
  border-radius: 20px;
  margin: 7px 0px;
`;

const TimeText = styled.Text`
  color: ${prop => prop.selected ? "rgb(255, 255, 255)" : TextColor};
  font-size: 12px;
`;

const TimeArray = [
  "10:00 AM", "11:00 AM", "12:00 AM", "1:00 PM",
  "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
  "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM",
  "10:00 PM", "11:00 PM", "12:00 PM"
];

export default ({ dateObj, page, setPage, data, setData }) => (
  <Container>
    <ColumnTitle title="시간설정" />
    <List>
      <TouchableOpacity
        onPress={() => {
          if (page > 0) {
            setPage(page - 1);
            setData({...data, date: null})
          }
        }}
      >
        <Privious>
          <Icon name="chevron-left" size={30} color={TextColor} />
        </Privious>
      </TouchableOpacity>
      { dateObj.map((item, index) => (
        <TouchableOpacity 
          key={index}
          onPress={() => setData({...data, date: item})}
        >
          <DateBox>
            <Month>{item.month}</Month>
            <DateView selected={data.date===item}>
              <Date selected={data.date===item}>{item.date}</Date>
            </DateView>
            <Day>{item.day}</Day>
          </DateBox>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        onPress={() => {
          setPage(page + 1);
          setData({...data, date: null});
        }}
      >
        <Next>
          <Icon name="chevron-right" size={30} color={TextColor} />
        </Next>
      </TouchableOpacity>
    </List>
    <TimeList>
      { TimeArray.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setData({...data, time: item})}
        >
          <TimeBox selected={data.time === item}>
            <TimeText selected={data.time === item}>{item}</TimeText>
          </TimeBox>
        </TouchableOpacity>
      ))}
    </TimeList>
  </Container>
)