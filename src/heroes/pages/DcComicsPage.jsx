import { HeroList } from "../components";
import { PUBLISHERS } from "../constants";

export const DcComicsPage = () => {
  const publisher = PUBLISHERS.dcComics;

  return (
    <>
      <h1>{publisher}</h1>
      <hr />

      <HeroList publisher={publisher} />
    </>
  );
};
