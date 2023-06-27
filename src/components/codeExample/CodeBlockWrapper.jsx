import { CodeBlock } from "../export";
import "./styling/style.scss";

const CodeBlockWrapper = ({ title, code }) => {
  return (
    <div className="CodeExample__">
      <h3 className="CodeExample__heading">{title}</h3>
      <CodeBlock code={code} />
    </div>
  );
};
export default CodeBlockWrapper;
