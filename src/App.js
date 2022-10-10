import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./Components/FirstComponent";
import SecondComponent from "./Components/SecondComponent";
import FuncComp from "./Components/FuncComp";
import ClassComp from "./Components/ClassComp";
import StateFuncComp from "./Components/StateFuncComp";
import Todos from "./Components/Todos";

const student = { Standard: "12", subSection: "A" };
function App() {
  return (
    <div className="App">
      {/* <FuncComp
        name={"Aman"}
        age={20}
        student={{ Standard: "12", subSection: "A" }}
      />
      <FuncComp
        name={"Ayush"}
        age={24}
        student={{ Standard: "10", subSection: "B" }}
      /> */}
      {/* <Todos/> */}
      <FuncComp/>
    </div>
  );
}

export default App;
