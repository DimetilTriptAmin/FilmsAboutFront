import { FilmCardContainer } from './FilmCardContainer';
import { useEffect, useState } from 'react';

const FilmCardListContainer = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch('https://localhost:44364/api/Film')
            .then((result) => result.json())
            .then((result) => {
                setFilms(result);
            })
            .catch((error) => {
                console.log(error);
            });
    });

    return (
        <div>
            {films.map((film) => (
                <FilmCardContainer key={film.id} film={film} />
            ))}
        </div>
    );
}

export {FilmCardListContainer};
