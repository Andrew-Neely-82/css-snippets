import "./styling/style.scss";

const Header = () => {
  return (
    <header className="Header__">
      <h4 className="Header__heading">CSS Demo: inset</h4>
      <button id="reset" className="Header__reset" type="button">
        Reset
      </button>
    </header>
  );
};
export default Header;
