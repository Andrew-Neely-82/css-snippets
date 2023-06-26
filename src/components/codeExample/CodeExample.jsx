import { CodeBlock } from "../export";
import "./styling/style.scss";

const CodeExample = ({ heading, example }) => {
  return (
    <div className="CodeExample__">
      <h3 className="CodeExample__heading">{heading}</h3>
      <CodeBlock code={example} />
    </div>
  );
};
export default CodeExample;
