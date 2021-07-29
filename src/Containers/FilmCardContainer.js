import { FilmCard } from "../views/FilmCard";
import { withRouter } from "react-router";

const FilmCardContainer = (props) => {
  const { id, title, description, trailerLink, rating } = props.film;

  const { history } = props;

  const handleClick = () => {
    const newLocation = "/film" + id;
    history.push(newLocation);
  };

  return (
    <FilmCard
      key={id}
      title={title}
      description={description}
      rating={rating}
      trailerLink={trailerLink}
      handleClick={handleClick}
    />
  );
};

const FilmCardContainerWithRouter = withRouter(FilmCardContainer);
export default FilmCardContainerWithRouter;
