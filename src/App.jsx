//Komponen adalah fungsi yang return JSX
//JSX only have one parent element
//Fragment (<> </>) adalah container seperti <div> yang tidak bisa distyling
//dimana fungsi utamanya adalah sebagai container
//Javascript expression inside JSX menggunakan ({ })
import HelloWorld from "./HelloWorld";

const App = () => {
  let hello = "Hello World";
  return (
    <>
      <div className="text-[25px] bg-blue-500 m-10 p-10 font-serif">
        {hello}
      </div>
      <HelloWorld text="Ini adalah komponen Hello World 1" />
      <HelloWorld text="Ini adalah komponen Hello World 2" />
    </>
  );
};

export default App;
