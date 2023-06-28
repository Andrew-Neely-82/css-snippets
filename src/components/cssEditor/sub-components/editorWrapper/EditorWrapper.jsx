import { ExampleChoice, Output } from "../export.js";
import "./styling/style.scss";

const EditorWrapper = () => {
  return (
    <div id="EditorWrapper__" className="EditorWrapper__">
      <section id="EditorWrapper__list" className="EditorWrapper__list">
        <ExampleChoice />
        <ExampleChoice />
        <ExampleChoice />
        <ExampleChoice />
        <ExampleChoice />
      </section>
      <Output />
    </div>
  );
};
export default EditorWrapper;
