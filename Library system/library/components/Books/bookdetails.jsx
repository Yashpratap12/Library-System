import { useState } from "react";
import { bookInformation } from "../../src/books";
import BookCard from "./bookCard";
import { useSelector } from "react-redux";

function BookDetails() {
  const booksItems = useSelector((store) => store.book.items);
  const [searchText, setSearchText] = useState("");
  const [filtered, setFiltered] = useState(booksItems);

  function handleSearch() {
    const filteredBooks = booksItems.filter(
      (book) =>
        book.name.toLowerCase().includes(searchText.toLowerCase()) ||
        book.author.toLowerCase().includes(searchText.toLowerCase())
    );
    setFiltered(filteredBooks);
  }
  return (
    <>
      <div className="search-books">
        <input
          type="text"
          placeholder="Enter Book name , author name..."
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="book-details">
        {filtered.map((data) => (
          <BookCard
            key={data.id}
            id={data.id}
            name={data.name}
            author={data.author}
            image={data.url}
            date={data.date}
            category={data.genere}
            description={data.description}
          ></BookCard>
        ))}
      </div>
    </>
  );
}
export default BookDetails;
