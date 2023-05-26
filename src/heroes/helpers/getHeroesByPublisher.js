import { PUBLISHERS } from "../constants";
import { heroes } from "../data";

export const getHeroesByPublisher = (publisher) => {
  const validPublishers = Object.values(PUBLISHERS);

  if (!validPublishers.includes(publisher)) {
    throw new Error(`${publisher} is not a valid publisher`);
  }

  return heroes.filter((hero) => hero.publisher === publisher);
};
