import React, { useEffect, useState } from "react";
import { FiEdit3 } from "react-icons/fi";

const CardProject = (props: any) => {
  const [prog, setProg] = useState(40);
  const [remainingTime, setRemainingTime] = useState('');
  const divs = [];
  const blueDivCount = Math.floor(prog / 10);
  const grayDivCount = 10 - blueDivCount;
  for (let i = 0; i < blueDivCount; i++) {
    divs.push([<div key={i} className="progressSuccess"></div>]);
  }
  for (let i = 0; i < grayDivCount; i++) {
    divs.push(<div key={blueDivCount + i} className="progressFailed"></div>);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = props.timestamp - now;

      if (distance <= 0) {
        clearInterval(interval);
        setRemainingTime('Time Has Over');
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setRemainingTime(`${days} days ${hours}:${minutes}:${seconds}`);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [props.timestamp]);
  return (
    <div className="cardProject">
      <div className="tags">
        <span>{remainingTime?remainingTime:"Loading"}</span>
        <div className="editProject">
          <span>Research</span>
          <div className="edit">
            <FiEdit3 />
          </div>
        </div>
      </div>
      <p className="title">This Is Title</p>
      <div className="desc">
        <p>
          We see that the image is being squished to fit the container of
          200x300 pixels (its original aspect ratio is destroyed).
        </p>
      </div>
      <div className="progress">{divs}</div>
      <div className="action">
        <button className="nextButton">
          {props.menu == "todo" ? <span>Process</span> : <></>}
          {props.menu == "process" ? <span>Complete</span> : <></>}
          {props.menu == "complete" ? <span>Process</span> : <></>}
          {props.menu == "overdue" ? <span>Process</span> : <></>}
        </button>
      </div>
    </div>
  );
};

export default CardProject;
