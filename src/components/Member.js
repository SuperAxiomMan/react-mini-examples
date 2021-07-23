import React, { Fragment } from "react";

const Member = ({ name, children, age }) => {
  return (
    <Fragment>
      <h2
        style={{
          backgroundColor: age < 50 ? "red" : "purple",
          color: "white",
        }}
      >
        Family member is : {name.toUpperCase()}
      </h2>
      <p>age is : {age}</p>
      {children ? <div>{children}</div> : <p>No Children here</p>}
    </Fragment>
  );
};

export default Member;
