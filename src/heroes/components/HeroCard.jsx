export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const imageUrl = `${
    location.origin + import.meta.env.BASE_URL
  }/heroes/${id}.jpg`;

  const filteredCharacters = characters
    .split(", ")
    .filter((char) => char !== alter_ego)
    .join(", ");

  return (
    <div className="col">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
