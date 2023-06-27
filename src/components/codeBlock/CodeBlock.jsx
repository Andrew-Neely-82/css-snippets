import { Copy, Check } from "./index";
import { useState } from "react";
import "./styling/style.scss";

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <pre className="CodeBlock__pre">
      <code className="CodeBlock__code">
        {code}
        <button className="CodeBlock__btn" onClick={copyCode}>
          {copied ? <Check /> : <Copy />}
        </button>
      </code>
    </pre>
  );
};
export default CodeBlock;
