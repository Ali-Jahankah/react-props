import React, { memo } from "react";
import styles from "../css/app.css";

const Header = ({ people }) => {
  console.log("----Header.js--- Rendered");
  return (
    <>
      <h1 className={styles.appheader}>تعداد افراد: {people.length} نفر</h1>
      <hr></hr>
    </>
  );
};
export default memo(Header);
