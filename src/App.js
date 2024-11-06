import { useEffect } from "react";
import "./styles.css";
import { targetContent } from "./dummyData";
import { constructMappingStringFromJson } from "./utils";

export default function App() {
  useEffect(() => {
    const result = constructMappingStringFromJson({
      targetJson: targetContent.targetJson,
      expressions: {},
    });
    console.log({ result });
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
