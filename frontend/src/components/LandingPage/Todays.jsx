import React from "react";
import { useState, useEffect } from "react";
import { backendHost } from "../ApiConfig";

const Todays = () => {
  useEffect(() => {
    fetch(`${backendHost}/products/details`)
      // .then(res => JSON.parse(res))
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
  }, []);

  return <div>Today's Featured</div>;
};

export default Todays;
