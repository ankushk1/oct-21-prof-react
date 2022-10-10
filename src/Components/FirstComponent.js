import react from "react";
import SecondComponent from "./SecondComponent";

class FirstComponent extends react.Component {
  render() {
    return (
      <div>
        FirstComponent
        <SecondComponent />
      </div>
    );
  }
}

export default FirstComponent;
