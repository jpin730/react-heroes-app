import { useLocation, useNavigate } from "react-router-dom";

import { useForm } from "../../hooks";
import { HeroCard } from "../components";
import queryString from "query-string";
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const { searchText, onInputChange, onResetForm } = useForm({
    searchText: "",
  });

  const { query = "" } = queryString.parse(search);
  const heroes = getHeroesByName(query);

  const onSubmitSearch = (event) => {
    event.preventDefault();

    const trimmedSearchText = searchText.trim();
    navigate(`?query=${trimmedSearchText}`);

    onResetForm();
  };

  const showMessage = !heroes.length;
  const isErrorMessage = !!query;

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row g-4">
        <div className="col-xl-4">
          <form className="d-flex gap-3" onSubmit={onSubmitSearch}>
            <input
              type="text"
              placeholder="Enter a hero name"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button
              className="btn btn-primary"
              type="submit"
              disabled={!searchText.trim()}
            >
              Search
            </button>
          </form>
        </div>

        <div className="col-xl-8">
          {showMessage && (
            <div
              className={`alert alert-${
                isErrorMessage ? "danger" : "info"
              } animate__animated animate__fadeIn`}
            >
              {isErrorMessage ? (
                <>
                  No hero with name <b>"{query}"</b>
                </>
              ) : (
                <>Search a hero</>
              )}
            </div>
          )}

          <div className="row row-cols-1 row-cols-lg-2 g-4">
            {heroes.map((hero) => (
              <HeroCard key={hero.id} {...hero} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
