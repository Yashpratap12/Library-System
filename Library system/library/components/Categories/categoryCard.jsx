import { Link } from "react-router-dom";
import "./category.css";
function CategoryCard(props) {
  return (
    <div className="book-card">
      <img src={props.image} alt="" width="100px" />
      <div className="name">{props.name}</div>
      <div className="author">{props.author}</div>
      <Link to={`/books/${props.id}`}>View More</Link>
      <p className="date"> Published On : {props.date}</p>
    </div>
  );
}
export default CategoryCard;
