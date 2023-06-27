import { CodeContainer } from "../export";
import { examples, code } from "../../data/data";
import "./styling/style.scss";

const Carousel = () => {
  const exampleProps = examples.map((item) => ({
    exampleTitle: item.title,
    example: item.example,
  }));

  const codeProps = code.map((item) => ({
    blockTitle: item.title,
    code: item.code,
  }));

  return (
    <div className="Carousel__">
      <div className="Carousel__wrapper">
        {exampleProps.map((example, index) => (
          <CodeContainer {...example} {...codeProps[index]} key={example.exampleTitle} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
