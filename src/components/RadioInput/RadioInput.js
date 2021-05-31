import React from "react";

import styles from "./RadioInput.module.css";

function RadioInput({ label, name_id, onchange, ...otherProps }) {
  return (
    <>
      <label className={styles.radioContainer}>
        {label}
        <input
          type="radio"
          //   checked="checked"
          onChange={onchange}
          name={name_id}
          {...otherProps}
        />
        <span className={styles.checkmark}></span>
      </label>
    </>
  );
}

export default RadioInput;

// import React from "react";

// import styles from "./RadioInput.module.css";

// function RadioInput({ label, onchange }) {
//   return (
//     <>
//       {label.map((index) => (
//         <label className={styles.radioContainer}>
//           {index}
//           <input
//             type="radio"
//             //   checked="checked"
//             // onChange={onchange}
//             name={index}
//           />
//           <input
//             type="radio"
//             //   checked="checked"
//             // onChange={onchange}
//             name="we"
//           />

//           <span className={styles.checkmark}></span>
//         </label>
//       ))}
//     </>
//   );
// }

// export default RadioInput;
