import React from "react";
import "./Loader.css";

export default function Loader() {
  return (
    <>
      <div class="card is-loading basis-[30%]">
        <div class="image"></div>
        <div class="content">
          <h2></h2>
          <p></p>
        </div>
      </div>
    </>
  );
}
