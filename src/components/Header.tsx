import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // Mobile; 2 columns, left and right, center is unrendered
  // When user hits search button, unrender left and right, center will now render

  // Desktop; all three columns are rendered, but search button(open) itself is underendered
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="px-4 py-2 h-14 border border-pink-300 grid items-center grid-cols-2">
      <div id="header-left" className={`${showSearch && "hidden"}`}>
        <Link to="/">
          <p className="text-xl">Home</p>
        </Link>
      </div>
      <div id="header-center" className={`col-span-2 ${showSearch ? "block" : "hidden"}`}>
        SearchBar
        <button onClick={() => setShowSearch(false)}>Close</button>
      </div>
      <div id="header-right" className={`ml-auto ${showSearch && "hidden"}`}>
        <button onClick={() => setShowSearch(true)}>Search</button>
      </div>
    </header>
  );
};

export default Header;
