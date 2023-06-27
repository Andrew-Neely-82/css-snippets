import { CodeBlockWrapper } from "../export";
import "./styling/style.scss";

const Carousel = () => {
  const title = "Heading test";
  const test = "This is a test of passing data";

  return (
    <div className="Carousel__">
      <div className="Carousel__wrapper">
        <div className="Code-container">
          <CodeBlockWrapper title={title} code={test} />
          <CodeBlockWrapper title={title} code={test} />
        </div>
        <div className="Code-container">
          <CodeBlockWrapper title={title} code={test} />
          <CodeBlockWrapper title={title} code={test} />
        </div>
        <div className="Code-container">
          <CodeBlockWrapper title={title} code={test} />
          <CodeBlockWrapper title={title} code={test} />
        </div>
      </div>
    </div>
  );
};
export default Carousel;
