document.addEventListener("DOMContentLoaded", () => {
  const beerList = document.getElementById("beer-list");
  const sortSelect = document.getElementById("sort-select");

  const sortBeers = () => {
    const beers = Array.from(beerList.querySelectorAll("li"));
    const criterion = sortSelect.value;

    const sortedBeers = beers.sort((a, b) => {
      switch (criterion) {
        case "name":
          return a.querySelector(".beer-name").textContent.localeCompare(b.querySelector(".beer-name").textContent);
        case "name_":
            return b.querySelector(".beer-name").textContent.localeCompare(a.querySelector(".beer-name").textContent);
        case "brewery":
          return a.querySelector(".beer-brewery").textContent.localeCompare(b.querySelector(".beer-brewery").textContent);
        case "brewery_":
          return b.querySelector(".beer-brewery").textContent.localeCompare(a.querySelector(".beer-brewery").textContent);
        case "score":
          return parseFloat(a.dataset.score) - parseFloat(b.dataset.score);
        case "score_":
          return parseFloat(b.dataset.score) - parseFloat(a.dataset.score);
        default:
          return 0;
      }
    });

    sortedBeers.forEach((beer) => beerList.appendChild(beer));
  };

  sortSelect.addEventListener("change", sortBeers);

  sortBeers();
});
