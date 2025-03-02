import { Link } from "react-router-dom";
import "./homepage.css";
import { useContext } from "react";
import userContext from "../../src/useContext";

function Navbar() {
  const { setSelectedCategory } = useContext(userContext);
  return (
    <div className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/books">Browse Books</Link>
      <Link to="/popularBooks">Popular Books</Link>
      <Link to="/addbooks">Add Books</Link>

      <div className="category">
        <Link to="/category">Category : </Link>
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          name="category"
        >
          <option value="null"></option>

          <option value="fiction">Fiction</option>

          <option value="non-fiction">Non-Fiction</option>

          <option value="sci-fi">Science Fiction</option>

          <option value="children">Children</option>

          <option value="poetry">Poetry</option>

          <option value="comics">Comics</option>
        </select>
        <Link to="/category">
          <button>
            <img
              src="https://cdn-icons-png.flaticon.com/128/954/954591.png"
              alt=""
              width="17px"
            />
          </button>
        </Link>
      </div>
      <div className="logo">
        <img
          src="https://cdn-icons-png.flaticon.com/128/3330/3330314.png"
          alt=""
        />
      </div>
    </div>
  );
}
export default Navbar;
