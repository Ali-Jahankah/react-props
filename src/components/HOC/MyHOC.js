import React from "react";
const MyHOC = (MyApp) => {
  return (props) => {
    return <MyApp {...props}></MyApp>; //Getting all the props
  };
};

export default MyHOC;
