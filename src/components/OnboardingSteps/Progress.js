import React from "react";
import "./Progress.css";

const Progress = ({ next, widthLevel }) => {
  // const next = async () => {
  //   let classArray = document.querySelectorAll(".circle");
  //   let successful = document.querySelectorAll(".active");
  //   let progress;

  //   if (step >= 1) {
  //     setStep(step + 1);
  //     console.log(step);

  //     classArray.forEach((item, index) => {
  //       if (index < step) {
  //         item.classList.add("active");
  //         progress =
  //           ((successful.length - 1) / (classArray.length - 1)) * 100 + "%";
  //         setSuccessful(progress);
  //       } else {
  //         item.classList.remove("active");
  //       }
  //     });
  //   }
  //   //  else {
  //   //   console.log("o paari");
  //   // }
  // };

  return (
    <div className="progress-container">
      <div
        className="progresss"
        //   className={index !== stepArray.length - 1 && "progresss"}
        id="progress"
        style={{ width: widthLevel }}
      ></div>

      <div className="circle active " onClick={next}>
        {" "}
        1
      </div>
      <div className="circle "> 2</div>
      <div className="circle "> 3</div>
      <div className="circle "> 4</div>
      {/* </div> */}
      {/* ))} */}
    </div>
  );
};

export default Progress;
