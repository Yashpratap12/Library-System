import { useParams } from "react-router-dom";
import { bookInformation } from "../../src/books";
import "./viewmore.css";
import { Link } from "react-router-dom";
function ViewMore() {
  const bookId = useParams();
  const filteredbook = bookInformation.filter((book) => book.id == bookId.id);
  return (
    <div>
      <h1>Additional Details</h1>
      <div className="details-container">
        {filteredbook.map((book) => {
          return (
            <div className="detail-card">
              <h2>{book.name}</h2>
              <h2>{book.author}</h2>
              <img src={book.url} alt="" />
              <p>Date of Publishing : {book.date}</p>
              <p>
                Rating : <span>{book.rating}</span>
              </p>
              <h1>Description</h1>
              <p>{book.description}</p>
            </div>
          );
        })}
        <Link to="/books">
          <button>Go to Browse Books</button>
        </Link>
      </div>
    </div>
  );
}
export default ViewMore;
