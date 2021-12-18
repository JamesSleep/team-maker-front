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
  { text: "10:00 AM", hour: 10 }, { text: "11:00 AM", hour: 11 }, { text: "12:00 AM", hour: 12 }, 
  { text: "1:00 PM", hour: 13 }, { text: "2:00 PM", hour: 14 }, { text: "3:00 PM", hour: 15 }, 
  { text: "4:00 PM", hour: 16 }, { text: "5:00 PM", hour: 17 }, { text: "6:00 PM", hour: 18 }, 
  { text: "7:00 PM", hour: 19 }, { text: "8:00 PM", hour: 20 }, { text: "9:00 PM", hour: 21 },
  { text: "10:00 PM", hour: 22 }, { text: "11:00 PM", hour: 23 }, { text: "12:00 PM", hour: 24 },
];

const MonthArray = [
  "1월", "2월", "3월", "4월", "5월", "6월",
  "7월", "8월", "9월", "10월", "11월", "12월"
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
            <Month>{MonthArray[item.month]}</Month>
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
          <TimeBox selected={data.time.text === item.text}>
            <TimeText selected={data.time.text === item.text}>{item.text}</TimeText>
          </TimeBox>
        </TouchableOpacity>
      ))}
    </TimeList>
  </Container>
)