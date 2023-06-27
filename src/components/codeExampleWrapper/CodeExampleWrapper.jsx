import { CodeExample } from "../export";
import "./styling/style.scss";

const CodeExampleWrapper = ({ title, example }) => {
  return (
    <div className="CodeExampleWrapper">
      <h3>{title}</h3>
      <CodeExample example={example} />
    </div>
  );
};
export default CodeExampleWrapper;
