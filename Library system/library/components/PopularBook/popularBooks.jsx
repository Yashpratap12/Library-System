import { useEffect, useState } from "react";
import { bookInformation } from "../../src/books";
import PopularBookCard from "./popularBookCard";
import "./popularBook.css";
function PopularBook() {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    const popularbooks = bookInformation.filter((book) => book.id % 2 == 0);
    setPopular(popularbooks);
  }, []);
  return (
    <>
      <br />
      <br />
      <div className="book-details">
        {popular.map((data) => (
          <PopularBookCard
            key={data.id}
            id={data.id}
            name={data.name}
            author={data.author}
            image={data.url}
            date={data.date}
            category={data.genere}
            description={data.description}
          ></PopularBookCard>
        ))}
      </div>
    </>
  );
}
export default PopularBook;
