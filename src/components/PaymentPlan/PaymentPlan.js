import React, { useEffect, useState } from "react";
import FormInput from "../Form-input/form-input.component";
import styles from "./PayPlan.module.css";
import UpdateButton from "../CustomButton/CustomButton";

const payPlan_Data = [
  {
    name: "agressive",
    duration: "1",
    color: "tomato",
    select: "active",
  },
  {
    name: "stretching",
    duration: "2",
    color: "purple",
  },
  {
    name: "focused",
    duration: "3",
    color: "blue",
  },
  {
    name: "council",
    duration: "4",
    color: "paleturquoise",
  },
  {
    name: "mild",
    duration: "5",
    color: "palegoldenrod",
  },
  {
    name: "gentle",
    duration: "6",
    color: "palegreen",
  },
];

const PaymentPlan = ({ TotalCartValue }) => {
  const [downPayment, setDownPayment] = useState("");
  const [payTenure, setPayTenure] = useState(1);
  const [customiseDownPay, setcustomiseDownPay] = useState(0);
  const [shoppingCredit, setShoppingCredit] = useState("");
  const [monthlyRepay, setmonthlyRepay] = useState("");

  const customisedPlanCalculator = async (event) => {
    event.preventDefault();
    let shoppingCredits = Number(TotalCartValue) - Number(customiseDownPay);
    let interestRate = 0.04 * shoppingCredits * payTenure;
    let repayPlanMonthly = (shoppingCredits + interestRate) / payTenure;

    // window.localStorage.setItem("downPayment", downpay);
    window.localStorage.setItem("shoppingCredits", shoppingCredits);
    window.localStorage.setItem("downPayment", customiseDownPay);
    window.localStorage.setItem("interestRate", interestRate);
    window.localStorage.setItem("repayPlanMonthly", repayPlanMonthly);

    setShoppingCredit(localStorage.getItem("shoppingCredits"));
    setmonthlyRepay(localStorage.getItem("repayPlanMonthly"));
    setcustomiseDownPay();
  };

  useEffect(() => {
    setShoppingCredit(localStorage.getItem("shoppingCredits"));
    setmonthlyRepay(localStorage.getItem("repayPlanMonthly"));
    setDownPayment(localStorage.getItem("downPayment"));
  }, [TotalCartValue, payTenure, shoppingCredit]);

  const onChangeHandler = (e) => {
    if (Number(e.target.value) > downPayment) {
      setcustomiseDownPay(e.target.value);
      // setDownPayment(customiseDownPay);
    }
  };
  const setPlanTenure = () => {
    setPayTenure();
  };

  return (
    <>
      <div className="mt-3 ">
        <h5 className="text-center">Choose Your Plan</h5>
        <div className="row">
          {payPlan_Data.map((plan) => (
            <div
              key={plan.duration}
              className={`col slide_top ${styles.planCard} ${
                plan.select ? `${styles.active}` : null
              }`}
              style={{ borderTop: `6px ${plan.color} solid` }}
            >
              <p className={styles.planType}>{plan.name}</p>
              <p className={styles.planDuration}>{plan.duration}</p>
              <small>{plan.duration === "1" ? "month" : "months"}</small>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 py-4">
        <h5 className="text-center">Payment Breakdown</h5>
        <div className={`${styles.payment_summary} row`}>
          <table className={`${styles.table} table col-sm-6`}>
            <tbody>
              <tr>
                <td>Shopping credit</td>
                <td>
                  <strong>&#8358; {shoppingCredit}</strong>
                </td>
              </tr>
              <tr>
                <td>Down Payment</td>
                <td>
                  <strong>&#8358; {downPayment}</strong>
                </td>
              </tr>
              <tr>
                <td>Monthly Installment</td>
                <td>
                  <strong>&#8358;{Number(monthlyRepay).toFixed(2)}</strong>
                </td>
              </tr>
              <tr>
                <td>Tenure</td>
                <td>
                  {payTenure} {payTenure === 1 ? "Month" : "Months"}
                </td>
              </tr>
            </tbody>
          </table>
          <div className={`${styles.customise_card} col-sm-6`}>
            <span onChange={setPlanTenure} className="d-block text-center">
              Customise <br />
              Down Payment
            </span>
            <form onSubmit={customisedPlanCalculator}>
              <div className={styles.updateInput}>
                <i className="far fa-envelope icon">&#8358; </i>
                <FormInput
                  type="text"
                  name="customisedPlan"
                  placeholder="21000"
                  required
                  onChange={onChangeHandler}
                />
              </div>
              <div className={styles.update_btn}>
                <UpdateButton
                  // type="button"
                  style={{
                    background: "inherit",
                    color: "white",
                    padding: "0px 10px",
                    height: "30px",
                    border: "1px white solid",
                  }}
                >
                  Update breakdown
                </UpdateButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPlan;
