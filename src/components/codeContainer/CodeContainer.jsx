import { CodeBlockWrapper, CodeExampleWrapper } from "../export";

const CodeContainer = ({ exampleTitle, example, blockTitle, code }) => {
  return (
    <div className="Code-container">
      <CodeExampleWrapper title={exampleTitle} example={example} />
      <CodeBlockWrapper title={blockTitle} code={code} />
    </div>
  );
};

export default CodeContainer;
