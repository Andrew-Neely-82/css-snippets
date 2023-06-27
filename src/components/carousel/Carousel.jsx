import { CodeContainer } from "../export";
import "./styling/style.scss";

const Carousel = () => {
  const title = "Heading test";
  const test = "This is a test of passing data";

  return (
    <div className="Carousel__">
      <div className="Carousel__wrapper">
        <CodeContainer exampleTitle={title} example={test} blockTitle={title} code={test} />
        <CodeContainer exampleTitle={title} example={test} blockTitle={title} code={test} />
        <CodeContainer exampleTitle={title} example={test} blockTitle={title} code={test} />
      </div>
    </div>
  );
};
export default Carousel;
