const filterNames = [
  `All movies`, `Watchlist`, `History`, `Favorites`
];

const filterUrls = [
  `#all`, `#watchlist`, `#history`, `#favorites`
];

export const generateFilters = () => {
  return filterNames.map((it, i) => {
    return {
      name: it,
      count: it === `All movies` ? `` : Math.floor(Math.random() * 20),
      url: filterUrls[i],
      isActive: it === `All movies` ? true : false
    };
  });
};
