import React from "react";
import "./App.scss";
import MyPictures from "./assets/components/MyPictures";

export default function App() {
  return (
    <div>
      <h1>My Pictures</h1>
      <MyPictures text="Picture 1" />
      <MyPictures text="Picture 2" />
      <MyPictures text="Picture 3" />
    </div>
  );
}
