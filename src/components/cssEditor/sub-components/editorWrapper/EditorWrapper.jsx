import { ExampleChoice, Output } from "../export.js";

const EditorWrapper = () => {
  return (
    <div id="editor-wrapper" className="editor-wrapper border-rounded-bottom">
      <section id="example-choice-list" className="example-choice-list large live">
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
