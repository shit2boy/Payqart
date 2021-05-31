import React from "react";
import styles from "./productCard.module.css";

const ProductCard = () => {
  return (
    <>
      <div className={`${styles.card_container}`}>
        <div className="d-flex justify-content-space-evenly mb-2">
          <div className="round" style={{ width: "90px" }}>
            <img src="./images/phone.jpg" alt="smartphone" width="100px" />
          </div>
          <div className={styles.cardContent}>
            <p>Meeysoo P45 PRO</p>
            <span className="d-block">&#8358; 50,000</span>
            <span className="d-block">Qty: 1</span>
          </div>
        </div>
        <div className="d-flex justify-content-space-evenly mb-2">
          <div className="round" style={{ width: "90px" }}>
            <img src="./images/shirt.jpg" alt="smartphone" width="100px" />
          </div>
          <div className={styles.cardContent}>
            <p>Men's Long sleeve shirt </p>
            <span className="d-block">&#8358; 30,500</span>
            <span className="d-block">Qty: 2</span>
          </div>
        </div>
      </div>
      <div className={styles.cardCart}>
        <p>Total Cart Value: </p>
        <h5>&#8358; 80,500</h5>
      </div>
    </>
  );
};

export default ProductCard;
