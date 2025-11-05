//Komponen adalah fungsi yang return JSX
//JSX only have one parent element
//Fragment (<> </>) adalah container seperti <div> yang tidak bisa distyling
//dimana fungsi utamanya adalah sebagai container
//Javascript expression inside JSX menggunakan ({ })
import { useState } from "react";
import HelloWorld from "./HelloWorld";

const App = () => {
  // let hello = "Hello World"; //ini adalah variabel biasa
  let [hello, setState] = useState("Hello World"); //ini adalah variabel state

  const handleClick = () => {
    console.log("Button di klik");
    // hello = "Selamat Datang"; //ini cara merubah variabel biasa
    setState("Selamat Datang"); //ini cara merubah variabel state
    // console.log(hello);
  };

  return (
    <>
      <div className="text-[25px] bg-blue-500 m-10 p-10 font-serif">
        {hello}
      </div>
      <HelloWorld
        text="Ini adalah komponen Hello World 1"
        handleClick={handleClick}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 py-2 px-5 text-white rounded-xl"
        onClick={handleClick}
      >
        Click Me
      </button>
    </>
  );
};

export default App;
