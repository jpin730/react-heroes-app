import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useMemo } from "react";

import { getHeroById } from "../helpers";
import { BASE_URL, PUBLISHERS } from "../constants";

export const HeroPage = () => {
  const { id } = useParams();

  const hero = useMemo(() => getHeroById(id), [id]);

  if (!hero) return <Navigate to="/" />;

  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  const imageUrl = `${BASE_URL}heroes/${id}.jpg`;

  const navigate = useNavigate();

  const onNavigateToPublisher = () => {
    const to = publisher === PUBLISHERS.marvelComics ? "/marvel" : "/dc-comics";
    navigate(to);
  };

  return (
    <div className="row g-3 animate__animated animate__fadeIn">
      <div className="col-md-4">
        <img src={imageUrl} alt={superhero} className="img-thumbnail" />
      </div>

      <div className="col-md-8">
        <h3>{superhero}</h3>
        <hr />

        <ul className="list-group">
          <li className="list-group-item list-group-item-action">
            <b>Alter ego:</b> {alter_ego}
          </li>
          <li className="list-group-item list-group-item-action">
            <b>Publisher:</b> {publisher}
          </li>
          <li className="list-group-item list-group-item-action">
            <b>First appearance:</b> {first_appearance}
          </li>
          <li className="list-group-item list-group-item-action">
            <b>Characters:</b> {characters}
          </li>
        </ul>

        <button className="btn btn-link" onClick={onNavigateToPublisher}>
          Go to {publisher}
        </button>
      </div>
    </div>
  );
};
