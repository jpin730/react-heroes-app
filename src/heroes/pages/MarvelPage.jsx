import { HeroList } from "../components";
import { PUBLISHERS } from "../constants";

export const MarvelPage = () => {
  const publisher = PUBLISHERS.marvelComics;

  return (
    <>
      <h1>{publisher}</h1>
      <hr />

      <HeroList publisher={publisher} />
    </>
  );
};
