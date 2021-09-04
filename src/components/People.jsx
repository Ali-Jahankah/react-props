import React from "react";
import { useEffect, memo } from "react";
import Person from "./Person";
import styles from "../css/people.css";
// import MyContext from "./Context";
const People = ({ editFullname, handleDelete, allPeople }) => {
  // const context = useContext(MyContext);
  // const { editFullname, handleDelete, getPeople } = context;

  console.log("People.js rendered as a child componenet");

  useEffect(() => {
    console.log("useEffect() Done!");

    const time = setTimeout(() => {
      alert("Data saved");
    }, 1000);
    return () => {
      clearTimeout(time);
      console.log("----People.js-----WillUnMount is Done!");
    };
  }, [allPeople]);

  // useEffect(() => {
  //   console.log("useEffect() Done!");
  //   setTimeout(() => {
  //     alert("Data saved");
  //   }, 1000);
  // }, []);

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //---------------- WillUnMount is in return()
  //   };
  // }, [input]);
  return (
    <>
      <div id={styles.peopleContainer}>
        {allPeople.map((person) => {
          return (
            <Person
              fullname={person.fullname}
              key={person.id}
              deleting={() => handleDelete(person.id)}
              editFullname={(event) => editFullname(event, person.id)}
            ></Person>
          );
        })}
      </div>
    </>
  );
};

export default memo(People);
