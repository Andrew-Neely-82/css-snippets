import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";

const NavbarSearch = () => {
  const expand = () => {
    const search = document.querySelector(".Navbar__button");
    const input = document.querySelector(".Navbar__input");
    search.classList.toggle("merge");
    input.classList.toggle("input-expand");
  };

  useEffect(() => {
    const search = document.querySelector(".Navbar__button");
    search.addEventListener("click", expand);
    return () => {
      search.removeEventListener("click", expand);
    };
  }, []);

  return (
    <div className="Navbar__search-container">
      <div className="Navbar__search">
        <input className="Navbar__input" type="text" placeholder="Search for an example" />
        <button className="Navbar__button">
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};
export default NavbarSearch;
