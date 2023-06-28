import { Header, EditorWrapper } from "./sub-components/export.js";
import "./styling/style.scss";

const CSSEditor = () => {
  return (
    <section class="CSSEditor__">
      <Header />
      <EditorWrapper />
    </section>
  );
};
export default CSSEditor;
