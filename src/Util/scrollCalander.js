import React from "react";

const MonthArray = [
  "1월", "2월", "3월", "4월", "5월", "6월",
  "7월", "8월", "9월", "10월", "11월", "12월"
];

const DayArray = [
  "일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"
]

export const dateHandler = (page) => {
  let array = [];
  const today = new Date();
  let month = today.getMonth();
  let date = today.getDate() + (page * 5);
  let day = today.getDay() + (page * 5);

  for (let i=0; i<5; i++) {
    if (month === 0 || month === 2 || month === 4 || month === 6 || 
      month === 7 || month === 9 || month === 11) {
      if (date + i > 31) {
        month += 1;
        date = date + i - 31;
      }
    } else if (month === 1) {
      if (date + i > 28) {
        month = 2;
        date = date + i - 28;
      }
    } else {
      if (date + i > 30) {
        month += 1;
        date = date + i - 31;
      }
    }
    if (day + i > 6) day = (day + i) % 7 - i;
    if (month > 11) month = 0;

    array.push({
      month: MonthArray[month],
      date: date + i,
      day: DayArray[day + i]
    });
  }

  return array;
}