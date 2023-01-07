/*
 *  Este hook verifica el ancho de pantalla contra el string query
 *      ejemplo
 *          query = "(min-width: 1060px)"
 *      si el ancho es mayor que 1060px devuelve true de lo
 *      contrario devuelve false
 */

import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
