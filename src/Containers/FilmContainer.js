import { useState } from "react";
import { Film } from "../Views/Film";

export function FilmContainer() {
  const [value, setValue] = useState(0);

  const onChange = (value) => {
    setValue(value);
  };

  return <Film value={value} onChange={onChange} />;
}
