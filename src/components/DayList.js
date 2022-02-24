import React from "react";
import DayListItem from "components/DayListItem"

export default function DayList(props) {
  const days = props.days;
  const DayList = days.map((day) => (
    <DayListItem 
    key={day.id}
    name={day.name} 
    spots={day.spots} 
    selected={day.name === props.day}
    setDay={props.setDay}
    />
    // <DayListItem
    //   key={props.id}
    //   name={props.name}
    //   spots={props.spots}
    //   selected={props.name === props.value}
    //   setDay={props.onChange}
    // />
  ))
  return (
    <ul>{DayList}</ul>
  );
}