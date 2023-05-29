import { Link } from "react-router-dom";
import { BASE_URL } from "../constants";

export const HomePage = () => {
  const cardItems = [
    { name: "Marvel Comics", image: "heroes/marvel.svg", to: "/marvel" },
    { name: "DC Comics", image: "heroes/dc.svg", to: "/dc-comics" },
    { name: "Search", image: "heroes/search.svg", to: "/search" },
  ];
  return (
    <div className="row row-cols-1 row-cols-lg-3 my-5 py-5 g-3">
      {cardItems.map(({ image, name, to }) => (
        <div className="col" key={name}>
          <Link className="card" to={to}>
            <img
              className="object-fit-contain p-3"
              src={BASE_URL + image}
              alt={name}
              height="300"
            />
            <div className="card-body">
              <h5 className="card-title text-center">{name}</h5>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
