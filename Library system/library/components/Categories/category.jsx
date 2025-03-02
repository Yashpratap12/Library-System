import { useContext } from "react";
import userContext from "../../src/useContext";
import { bookInformation } from "../../src/books";
import CategoryCard from "./categoryCard";
function Category() {
  const { selectedCategory } = useContext(userContext);
  console.log(selectedCategory);
  const filteredBooks = bookInformation.filter(
    (data) => data.genere.toLowerCase() == selectedCategory.toLowerCase()
  );
  console.log(filteredBooks);
  return (
    <div className="category-container">
      {filteredBooks.map((data) => (
        <CategoryCard
          key={data.id}
          id={data.id}
          name={data.name}
          author={data.author}
          image={data.url}
          date={data.date}
          category={data.genere}
          description={data.description}
        />
      ))}
    </div>
  );
}
export default Category;
