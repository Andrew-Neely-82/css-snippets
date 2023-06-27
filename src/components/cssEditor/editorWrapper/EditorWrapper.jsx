import ExampleChoice from "../exampleChoice/ExampleChoice";
import Output from "../output/Output";

const EditorWrapper = () => {
  return (
    <div id="editor-wrapper" class="editor-wrapper border-rounded-bottom">
      <section id="example-choice-list" class="example-choice-list large live">
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
