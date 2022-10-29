import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./Components/FirstComponent";
import SecondComponent from "./Components/SecondComponent";
import FuncComp from "./Components/FuncComp";
import ClassComp from "./Components/ClassComp";
import StateFuncComp from "./Components/StateFuncComp";
import Todos from "./Components/Todos";
import { createContext, useState } from "react";
import ComponentA from "./Components/ComponentA";
import ClassLCComp from "./Components/ClassLCComp";
import FuncLcComp from "./Components/FuncLcComp";
import UseReducerComp from "./Components/UseReducerComp";
import UseMemoComp from "./Components/UseMemoComp";
import UseCallbackComp from "./Components/UseCallbackComp";
import FormComp from "./Components/FormComp";
import ApiComp from "./Components/ApiComp";
import UseForm from "./Components/UseForm";
import UseTheme from "./Components/UseTheme";

const student = { Standard: "12", subSection: "A" };

export const messageContext = createContext(null);
messageContext.displayName = "MyDisplayName";

function App() {
  const [mount, setMount] = useState(true);

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
      {/* <FuncComp/> */}
      {/* <StateFuncComp/> */}
      {/* <messageContext.Provider value={{name:"ABC", age:20}}>
        <ComponentA  />
      </messageContext.Provider> */}
      {/* {mount && <FuncLcComp />} */}
      {/* <ClassLCComp /> */}
      {/* <FuncLcComp/> */}
      {/* <button onClick={() => setMount(!mount)}>Mount/Unmount</button> */}
      {/* <UseReducerComp /> */}
      {/* <UseMemoComp/> */}
      {/* <UseCallbackComp/> */}
      {/* <FormComp/> */}
      <ApiComp/>
      {/* <UseForm/>
      <ComponentA/> */}
      {/* <UseTheme/> */}
    </div>
  );
}

export default App;
