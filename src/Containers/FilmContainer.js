import { useState, useEffect } from "react";
import Film from "../Views/Film";

import API from "../Axios/index";

const FilmContainer = () => {
  const [value, setValue] = useState(0);

  const [filmData, setFilmData] = useState();

  useEffect(() => {
    const apiUrl = "https://localhost:44364/api/Film/3";
    API.get(apiUrl).then((resp) => {
      setFilmData(resp.data);
    });
  }, [setFilmData]);

  const onChange = (value) => {
    setValue(value);
  };

  return <Film value={value} onChange={onChange} filmData={filmData} />;
};

export default FilmContainer;
