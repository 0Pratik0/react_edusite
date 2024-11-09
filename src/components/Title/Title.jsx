import React from "react";
import "./Title.css";
//alternate way of using props
//const Title = (props) => {
//    return (
//       <div className="title">
//          <p>{props.subTitle}</p>
//          <h2>{props.title}</h2>
//      </div>
//    )
//  }
//--------------------------------------------------------------------------------------
const Title = ({ subTitle, title }) => {
  return (
    <div className="title">
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  );
};

export default Title;
