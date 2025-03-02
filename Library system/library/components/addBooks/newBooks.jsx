import "./newBook.css";
import { bookInformation } from "../../src/books";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addBook } from "../../src/addBook";
import { Link } from "react-router-dom";
import BookDetails from "../Books/bookdetails";

function NewBooks() {
  const bookItems = useSelector((store) => store.book.items);

  const dispatch = useDispatch();
  const [bookname, setBookname] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  function handleSubmit() {
    if (
      bookname !== "" ||
      author !== "" ||
      date !== "" ||
      category !== "" ||
      url !== "" ||
      description !== ""
    ) {
      const result = {
        id: bookItems.length + 1,
        name: bookname,
        author: author,
        genere: category,
        description: description,
        date: date,
        url: url,
      };
      bookItems.push(dispatch(addBook(result)));
    } else {
      alert("Kindly fill all the details....");
      return;
    }
  }
  return (
    <div className="newbook-container">
      <h1>Book Details</h1>
      <div className="newbook-form">
        <div className="book-name">
          <h3>Name :</h3>
          <input
            type="text"
            placeholder="Enter name of the book..."
            onChange={(e) => setBookname(e.target.value)}
          />
        </div>
        <div className="author-name">
          <h3>Author :</h3>
          <input
            type="text"
            placeholder="Enter author of the book..."
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="published-date">
          <h3>Date :</h3>
          <input
            type="text"
            placeholder="Enter date of publishing"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="book-category">
          <h3>Genere :</h3>
          <input
            type="text"
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter category , e.g : Fiction,Non-Fiction,Sci-Fi"
          />
        </div>
        <div className="book-image">
          <h3>Image/Url :</h3>
          <input
            type="text"
            placeholder="Paste the url of the book cover"
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="book-description">
          <h3>Description :</h3>
          <textarea
            placeholder="Note : Atleast 50 words"
            name=""
            id=""
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="submit-button">
          <Link to="/books">
            <button onClick={handleSubmit}>Submit</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default NewBooks;
