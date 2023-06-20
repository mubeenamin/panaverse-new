"use client";
import Image from "next/image";
import { useState } from "react";



export default function Home() {
  function MyButton() {
    const [counter, setCounter] = useState(0);
    function onClickHandle() {
     setCounter(counter + 1);
    }
    return (<button style={{width:50, height:50}} onClick={onClickHandle}>Click me {counter}</button>);
  }
  return (
    <>
      <MyButton />
    </>
  );
}
