import React from "react";
import styles from "./productCard.module.css";

const ProductCard = () => {
  return (
    <>
      <div className={`${styles.card_container}`}>
        <div className="d-flex justify-content-space-evenly mb-2">
          <div className="round" style={{ width: "100px" }}>
            <img src="./images/phone.jpg" alt="smartphone" width="100px" />
          </div>
          <div className={styles.cardContent}>
            <h6>Meeysoo P45 PRO</h6>
            <p>&#8358; 45,000</p>
            <p>Qty: 1</p>
          </div>
        </div>
        <div className="d-flex justify-content-space-evenly mb-2">
          <div className="round" style={{ width: "100px" }}>
            <img src="./images/phone.jpg" alt="smartphone" width="100px" />
          </div>
          <div className={styles.cardContent}>
            <h6>Meeysoo P45 PRO</h6>
            <p>
              <strong>&#8358; 45,000</strong>
            </p>
            <p>Qty: 1</p>
          </div>
        </div>
      </div>
      <div className={styles.cardCart}>
        <p>Total Cart Value: </p>
        <h5>&#8358; 789</h5>
      </div>
    </>
  );
};

export default ProductCard;
