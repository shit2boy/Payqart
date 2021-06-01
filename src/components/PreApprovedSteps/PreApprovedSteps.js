import React, { lazy, useState, Suspense, useEffect } from "react";
import FormInput from "../Form-input/form-input.component";
import Progress from "../OnboardingSteps/Progress";
import CustomButton from "../CustomButton/CustomButton";
import RadioInput from "../RadioInput/RadioInput";
import styles from "./PreApprovedStep.module.css";
// import PaymentPlan from "../PaymentPlan/PaymentPlan";

const PaymentPlan = lazy(() => import("../PaymentPlan/PaymentPlan"));

const PreApprovedSteps = ({ TotalCartValue }) => {
  const [nextStep, setnextStep] = useState(2);
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    employmentType: "",
    amount: "",
    nextSalaryDate: "",
    existingLoanStatus: "",
  });
  const [successful, setSuccessful] = useState("0");

  const [downPayment, setDownPayment] = useState("");
  const [payTenure, setPayTenure] = useState(1);
  // const [customiseDownPay, setcustomiseDownPay] = useState(0);
  const [shoppingCredit, setShoppingCredit] = useState("");
  const [monthlyRepay, setmonthlyRepay] = useState("");

  useEffect(() => {
    const calculator = () => {
      let shoppingCredits;
      let interestRate;
      let repayPlanMonthly;
      let downpay = 0.3 * Number(TotalCartValue);
      setDownPayment(downpay);

      shoppingCredits = Number(TotalCartValue) - downpay;
      interestRate = 0.04 * Number(shoppingCredits) * payTenure;
      repayPlanMonthly = (Number(shoppingCredits) + interestRate) / payTenure;

      setShoppingCredit(() => shoppingCredits);
      setmonthlyRepay(() => repayPlanMonthly);
    };
    calculator();
  }, [TotalCartValue, payTenure, shoppingCredit]);

  const onChangeHandler = async (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    await next();
    // console.log(data);
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;
    if (!data.amount) {
      formIsValid = false;
      errors["amount"] = "*Kindly input your salary";
    }

    if (!data.nextSalaryDate) {
      formIsValid = false;
      errors["nextSalaryDate"] = "*cannot be empty";
    }

    if (!data.existingLoanStatus) {
      formIsValid = false;
      errors["existingLoanStatus"] = "*cannot be empty";
    }
    setErrors(errors);
    return formIsValid;
  };
  const nextActionPage = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (nextStep < 2) {
        setnextStep(nextStep + 1);
      }
    }
    // console.log("wews");
  };

  const next = async () => {
    let classArray = document.querySelectorAll(".circle");
    let successful = document.querySelectorAll(".active");
    let progress;

    if (step >= 1) {
      setStep(step + 1);
      // console.log(step);

      classArray.forEach((item, index) => {
        if (index < step) {
          item.classList.add("active");
          progress =
            ((successful.length - 1) / (classArray.length - 1)) * 100 + "%";
          setSuccessful(progress);
        } else {
          item.classList.remove("active");
        }
      });
    }
  };

  return (
    <div className="container d-flex justify-content-center mt-2">
      <div className="">
        <div className={styles.action_box}>
          {nextStep === 2 && (
            <p
              onClick={() => {
                setnextStep(nextStep - 1);
              }}
              style={{ color: "tomato", cursor: "pointer" }}
            >
              &#8592; Back
            </p>
          )}
          <Progress next={next} widthLevel={successful} />
        </div>
        {nextStep === 1 && (
          <div className={styles.containers}>
            <h5 className="text-center p-3">What Do You Do?</h5>
            <div className={styles.stepsIcon}>
              <div
                className="slide_top "
                style={{ width: "100px" }}
                value="Paid Employment"
                name="employmentType"
                onClick={onChangeHandler}
              >
                <img
                  src="./images/privatejobIcon.png"
                  alt="icons"
                  width="100px"
                />
                <p style={{ cursor: "pointer" }}>
                  <strong>Paid Employment</strong>
                </p>
              </div>
              <div
                style={{ width: "100px" }}
                value="padi sddsd"
                name="employmentType"
                onClick={onChangeHandler}
                className="slide_top "
              >
                <img
                  src="./images/selfEmployed.png"
                  alt="icons"
                  width="100px"
                />
                <p style={{ cursor: "pointer" }}>Self Employed/ Freelance</p>
              </div>
              <div
                style={{ width: "100px" }}
                name="employmentType"
                value="corp"
                onClick={onChangeHandler}
                className="slide_top "
              >
                <img src="./images/corprate.png" alt="icons" width="100px" />
                <p style={{ cursor: "pointer" }}>Corporate Organisation</p>
              </div>
            </div>
            <form onSubmit={nextActionPage}>
              <div>
                <>
                  <p>How much do you get paid monthly?</p>
                  <span style={{ color: "#dd2b0e", fontSize: "0.75rem" }}>
                    {errors["amount"]}
                  </span>
                  <div className="inputContainer">
                    <i className="far fa-envelope icon">&#8358; </i>
                    <FormInput
                      type="text"
                      name="amount"
                      placeholder=""
                      onChange={onChangeHandler}
                    />
                  </div>
                </>
                <div>
                  <p>When is your next salary date?</p>
                  <span style={{ color: "#dd2b0e", fontSize: "0.75rem" }}>
                    {errors["nextSalaryDate"]}
                  </span>
                  <div className="inputContainer">
                    {/* <i class="far fa-envelope icon">&#8358; </i> */}
                    <FormInput
                      type="text"
                      name="nextSalaryDate"
                      // min="2021-05-29"
                      minDate={new Date(2021, 1, 1)}
                      maxDate={new Date(2022, 1, 29)}
                      onFocus={(e) => (e.currentTarget.type = "date")}
                      onBlur={(e) => (e.currentTarget.type = "text")}
                      placeholder="Select Pay Date"
                      onChange={onChangeHandler}
                    />
                  </div>
                </div>
                <p>Do you have any existing loan(s)?</p>
                <div className={`inputContainer `}>
                  <span style={{ color: "#dd2b0e", fontSize: "0.75rem" }}>
                    {errors["existingLoanStatus"]}
                  </span>
                  <div className={styles.radio}>
                    <RadioInput
                      name_id="existingLoanStatus"
                      onchange={onChangeHandler}
                      label="Yes"
                    />
                    <RadioInput
                      name_id="existingLoanStatus"
                      onchange={onChangeHandler}
                      label="No"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
        {nextStep === 2 && (
          <Suspense fallback={<p>Loading...</p>}>
            <PaymentPlan
              downPayments={downPayment}
              setPayTenure={setPayTenure}
              shoppingCredits={shoppingCredit}
              //  customisedPlanCalculato={customisedPlanCalculator}
              repayPlanMonthlys={monthlyRepay}
              TotalCartValue="80500"
            />
          </Suspense>
        )}
        <div className={styles.nextAction_btn}>
          <CustomButton onClick={nextActionPage}>Continue</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default PreApprovedSteps;
