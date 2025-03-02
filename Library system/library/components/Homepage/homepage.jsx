import "./homepage.css";
import Navbar from "./navbar";

function HomePage() {
  return (
    <>
      <Navbar />
      <h1 className="display-message">
        Welcome to <span>Digital Liabrary</span>
        <pre>Your Gateway to Knowledge and Discovery!</pre>
      </h1>
      <p className="display-para">
        At Digital Liabrary, we believe that the pursuit of knowledge is a
        lifelong journey. Our digital library offers an extensive collection of
        books, journals, articles, and more, all accessible with just a click.
        Whether you're an avid reader, a student, or a researcher, our platform
        provides a seamless experience to explore a wide range of topics and
        resources. Browse our diverse selection, check out the latest arrivals,
        and take advantage of tools that make your reading and research easy.
        Join our community of learners, explore new ideas, and discover your
        next favorite book today! Happy Reading! 📚✨
      </p>
      <div className="home-image">
        <img
          src="https://cdn-icons-png.flaticon.com/128/2436/2436636.png"
          alt=""
        />
      </div>
    </>
  );
}
export default HomePage;
