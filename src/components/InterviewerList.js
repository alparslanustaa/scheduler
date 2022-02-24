import React from "react";
import InterviewerListItem from "components/InterviewerListItem"
import "components/InterviewerList.scss"
import PropTypes from "prop-types";

InterviewerList.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired
};

export default function InterviewerList(props) {

  // const interviewersListItem = Object.values(props.interviewers).map(interviewer => {
  //     //props inteviewers showing undefiend using objects
  //   return (
  //     <InterviewerListItem
  //       key={interviewer.id}
  //       name={interviewer.name}
  //       avatar={interviewer.avatar}
  //       selected={interviewer.id === props.value}
  //       setInterviewer={() => props.onChange(interviewer.id)}
  //     />
  //   );
  // });

  // const interviewers = props.interviewers.map((interviewer) => {
  //   return (
  //     <InterviewerListItem
  //       key={interviewer.id}
  //       name={interviewer.name}
  //       avatar={interviewer.avatar}
  //       selected={interviewer.id === props.value}
  //       setInterviewer={() => props.setInterviewer(interviewer.id)}
  //     />
  //   );
  // });

  const interviewers = props.interviewers.map((interviewer) => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.value}
        setInterviewer={() => props.onChange(interviewer.id)}
      />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewers}</ul>
    </section>
  );
}