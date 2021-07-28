import { FilmCard } from "../Views/FilmCard";

const FilmCardContainer = (props) => {
  const { id, title, description, poster, comments, trailerLink, rating } =
    props.film;

  // const handleClick = () => {
  //     const titleData = document.getElementById("title").value;
  //     const ratingData = document.getElementById("rating").value;
  //     const requestOptions = {
  //         method: 'POST',
  //         headers: {'Content-Type': 'application/json'},
  //         body: JSON.stringify({title: titleData, rating: ratingData})
  //     };
  //     fetch('https://localhost:44364/api/Film/add', requestOptions);
  // }

  return (
    <FilmCard
      key={id}
      title={title}
      description={description}
      rating={rating}
      trailerLink={trailerLink}
    />
  );
};

export { FilmCardContainer };
