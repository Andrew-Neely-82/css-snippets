import "./styling/style.scss";

const CodeExample = ({ example }) => {
  return (
    <div className="CodeExample__">
      <div>{example}</div>
    </div>
  );
};

export default CodeExample;
