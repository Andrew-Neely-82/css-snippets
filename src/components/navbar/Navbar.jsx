import NavbarSearch from "./navbarSearch/NavbarSearch";
import "./styling/style.scss";

const Navbar = () => {
  return (
    <div className="Navbar__">
      <div className="Navbar__title">
        <span>CSS Snippets</span>
      </div>
      <NavbarSearch />
    </div>
  );
};

export default Navbar;
