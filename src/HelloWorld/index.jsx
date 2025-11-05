import { useState } from "react";
import HelloMoon from "../HelloMoon";

//tipe data props adalah Object
//pros read only
const HelloWorld = ({ text, handleClick }) => {
  const [welcome, setWelcome] = useState("Welcome");
  const handleChildClick = () => {
    setWelcome("Selamat Datang");
  };
  return (
    <>
      <div className="text-[25px] bg-red-500 m-10 p-10 font-serif">
        {text}
        {welcome}
        <HelloMoon />
        <button
          className="bg-green-500 hover:bg-green-700 py-2 px-5 text-white rounded-xl"
          onClick={handleChildClick}
        >
          Click Me
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 py-2 px-5 text-white rounded-xl"
          onClick={handleClick}
        >
          Click Me
        </button>
      </div>
    </>
  );
};

export default HelloWorld;
