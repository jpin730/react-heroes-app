import { Link } from "react-router-dom";

import { BASE_URL } from "../constants";

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const imageUrl = `${BASE_URL}heroes/${id}.jpg`;

  const filteredCharacters = characters
    .split(", ")
    .filter((char) => char !== alter_ego)
    .join(", ");

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row g-0">
          <div className="col-6">
            <img
              className="img-fluid rounded-start"
              src={imageUrl}
              alt={superhero}
            />
          </div>
          <div className="col-6">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              <p className="card-text">{filteredCharacters}</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  {first_appearance}
                </small>
              </p>
              <Link className="card-link" to={`/hero/${id}`}>
                More...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
