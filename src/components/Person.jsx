import React from "react";
import styles from "../css/person.css";
import PropTypes from "prop-types";
const Person = ({ fullname, deleting, editFullname }) => {
  console.log("----Person.js---- rendered as a child componenet");
  // const myPerson = useRef(null);
  // useEffect(() => {
  //   myPerson.current.click();
  // }); Using ref in Functional componenet
  return (
    <>
      <div className={styles.personBox}>
        <h3>{`${fullname}`}</h3>
        <button type="button" onClick={deleting}>
          Delete
        </button>
        {/* ref={myPerson} using for above button*/}
        <input
          type="text"
          onChange={editFullname}
          placeholder={fullname}
        ></input>
      </div>
    </>
  );
};
Person.propTypes = {
  fullname: PropTypes.string,
  deleting: PropTypes.func,
  editFullname: PropTypes.func,
};
export default Person;
