import React from "react";
import "./App.scss";
import MyPictures from "./assets/components/MyPictures";

export default function App() {
  return (
    <div>
      <h1>My Pictures</h1>
      <MyPictures text = "lalala"/>
      <MyPictures text = "who dat"/>
      <MyPictures text = "its me"/>
    </div>
  );
}
