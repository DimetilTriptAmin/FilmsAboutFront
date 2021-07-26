import { useEffect, useState } from "react";
import { Film } from "../Views/Film";

export function FilmContainer() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("https://localhost:44364/api/Film")
      .then((result) => result.json())
      .then((result) => {
        setFilms(result);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const handleClick = () => {
    const titleData = document.getElementById("title").value;
    const ratingData = document.getElementById("rating").value;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: titleData, rating: ratingData }),
    };
    fetch("https://localhost:44364/api/Film/add", requestOptions);
  };

  return (
    <div>
      <input id='title' type='text' />
      <input id='rating' type='text' />
      <button onClick={handleClick}>Add Film</button>
      <div>
        {films.map((film) => (
          <Film key={film.id} film={film} />
        ))}
      </div>
    </div>
  );
}
