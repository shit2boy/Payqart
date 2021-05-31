import React from "react";
import FormInput from "../Form-input/form-input.component";
import styles from "./PreApprovedStep.module.css";

const PreApprovedSteps = () => {
  const onChangeHandler = () => {};

  return (
    <div className="container d-flex justify-content-center mt-2">
      <div className="" style={{ maxHeight: "100px" }}>
        <h5 className="text-center p-4">What Do You Do?</h5>
        <div className={styles.stepsIcon}>
          <div style={{ width: "120px" }}>
            <img src="./images/privatejobIcon.png" alt="icons" width="100px" />
            <p className="py-3">Paid Employment</p>
          </div>
          <div style={{ width: "100px" }}>
            <img src="./images/selfEmployed.png" alt="icons" width="100px" />
            <p className="py-3">Self Employed/ Freelance</p>
          </div>
          <div style={{ width: "100px" }}>
            <img src="./images/corprate.png" alt="icons" width="100px" />
            <p className="py-3 text-center">Corporate Organisation</p>
          </div>
        </div>
        <form>
          <div>
            <p>How much do you get paid monthly?</p>
            <div className="inputContainer">
              <i class="far fa-envelope icon">&#8358; </i>
              <FormInput
                type="text"
                placeholder=""
                onChange={onChangeHandler}
              />
            </div>
            <div>
              <p>When is your next salary date?</p>
              <div className="inputContainer">
                {/* <i class="far fa-envelope icon">&#8358; </i> */}
                <FormInput
                  type="text"
                  placeholder=""
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <p>Do you have any existing loan(s)?</p>
            <div className="inputContainer">
              {/* <i class="far fa-envelope icon">&#8358; </i> */}
              <FormInput
                type="date"
                placeholder="Select pay date"
                onChange={onChangeHandler}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PreApprovedSteps;
