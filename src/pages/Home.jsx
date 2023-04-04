import React from "react";
import useGetPopularBooks from "../hooks/useGetPopularBooks";
import "@styles/Home.scss";
import BookItem from "../components/BookItem";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
import CategoryButton from "../components/CategoryButton";
import thriller from "@assets/thriller.png";
import accion from "@assets/shooting.png";
import medieval from "@assets/dragon.png";
import piratas from "@assets/pirates.png";
import deportes from "@assets/sport.png";
import horror from "@assets/horror.png";
import drama from "@assets/drama.png";
import adventure from "@assets/adventure.png";
import mafia from "@assets/mafia.png";
import useGetPopularAuthors from "../hooks/useGetPopularAuthors";
import AuthorItem from "../components/AuthorItem";
import Stephen from "@assets/stephen.jpeg";
import Jkrowling from "@assets/jkrowling.jpeg";
import Georgerr from "@assets/Georgerr.jpg";

const Home = () => {
  const apiKey = "AIzaSyCwQAsu7CeAWsYPvy3fe1pqH_zsvubP1f8";
  const numBooks = 40;
  const books = useGetPopularBooks(numBooks, apiKey);

  const numAuthors = 5;
  const authors = useGetPopularAuthors(numAuthors, apiKey);

  const categories = [
    { name: "Thriller", image: thriller },
    { name: "Accion", image: accion },
    { name: "Medieval", image: medieval },
    { name: "Piratas", image: piratas },
    { name: "Deportes", image: deportes },
    { name: "Horror", image: horror },
    { name: "Drama", image: drama },
    { name: "Mafia", image: mafia },
    { name: "Aventuras", image: adventure },
  ];

  const featuredAuthors = [
    {
      id: 1,
      name: "Stephen King",
      imageUrl: Stephen,
      bio: "Stephen Edwin King is an American author of horror, supernatural fiction, suspense, and fantasy novels.",
    },
    {
      id: 2,
      name: "J.K. Rowling",
      imageUrl: Jkrowling,
      bio: "Joanne Rowling, better known by her pen name J.K. Rowling, is a British author and philanthropist. She is best known for writing the Harry Potter series of fantasy novels.",
    },
    {
      id: 3,
      name: "George R.R. Martin",
      imageUrl: Georgerr,
      bio: "George Raymond Richard Martin, also known as GRRM, is an American novelist and short story writer, screenwriter, and television producer. He is best known for his series of epic fantasy novels, A Song of Ice and Fire, which was adapted into the HBO series Game of Thrones.",
    },
  ];

  return (
    <div className="container margin-top">
      <h2 className="text-center mb-4 ">Libros populares</h2>
      <div id="carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {books.map((book, index) => (
            <div
              key={book.id}
              className={`carousel-item${index === 0 ? " active" : ""}`}
            >
              <div className="row">
                <div className="col-3">
                  <BookItem book={book} />
                </div>
                {books[index + 1] && (
                  <div className="col-3">
                    <BookItem book={books[index + 1]} />
                  </div>
                )}
                {books[index + 2] && (
                  <div className="col-3">
                    <BookItem book={books[index + 2]} />
                  </div>
                )}
                {books[index + 3] && (
                  <div className="col-3">
                    <BookItem book={books[index + 3]} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="prev"
        >
          <AiOutlineArrowLeft className="carousel-control-icon" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next btn-primary"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="next"
        >
          <AiOutlineArrowRight className="carousel-control-icon" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container">
        <h2 className="text-center mb-4">Categorías de libros</h2>
        <div className="d-flex flex-wrap justify-content-center">
          {categories.map((category) => (
            <div className="col-lg col-md-4" key={category.name}>
              <CategoryButton key={category.name} name={category.name} image={category.image} />
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-center my-4">Autores destacados</h2>
      <div className="row">
        {featuredAuthors.map((author) => (
          <div key={author.id} className="col-md-4 mb-4">
            <AuthorItem author={author} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
