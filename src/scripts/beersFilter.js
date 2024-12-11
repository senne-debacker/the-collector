document.addEventListener("DOMContentLoaded", () => {
  const sortSelect = document.getElementById("sort-select");
  const breweryFilter = document.getElementById("brewery-filter");
  const styleFilter = document.getElementById("style-filter");
  const minScoreFilter = document.getElementById("min-score-filter");
  const maxScoreFilter = document.getElementById("max-score-filter");
  const beerList = document.getElementById("beer-list");
  let beerCards = Array.from(document.querySelectorAll(".beer-card"));

  function filterAndSortBeers() {
    const selectedSort = sortSelect.value;
    const selectedBrewery = breweryFilter.value.toLowerCase();
    const selectedStyle = styleFilter.value.toLowerCase();
    const minScore = parseFloat(minScoreFilter.value) || 0;
    const maxScore = parseFloat(maxScoreFilter.value) || Infinity;

    let visibleBeers = beerCards;

    visibleBeers = visibleBeers.filter((beer) => {
      const beerBrewery = beer.getAttribute("data-brewery").toLowerCase();
      const beerStyle = beer.getAttribute("data-style").toLowerCase();
      const beerScore = parseFloat(beer.getAttribute("data-score"));

      return (
        (!selectedBrewery || beerBrewery.includes(selectedBrewery)) &&
        (!selectedStyle || beerStyle.includes(selectedStyle)) &&
        beerScore >= minScore &&
        beerScore <= maxScore
      );
    });

    visibleBeers.sort((a, b) => {
      const nameA = a.getAttribute("data-name").toLowerCase();
      const nameB = b.getAttribute("data-name").toLowerCase();
      const breweryA = a.getAttribute("data-brewery").toLowerCase();
      const breweryB = b.getAttribute("data-brewery").toLowerCase();
      const scoreA = parseFloat(a.getAttribute("data-score"));
      const scoreB = parseFloat(b.getAttribute("data-score"));

      switch (selectedSort) {
        case "name":
          return nameA.localeCompare(nameB);
        case "name_":
          return nameB.localeCompare(nameA);
        case "brewery":
          return breweryA.localeCompare(breweryB);
        case "brewery_":
          return breweryB.localeCompare(breweryA);
        case "score":
          return scoreA - scoreB;
        case "score_":
          return scoreB - scoreA;
        default:
          return 0;
      }
    });

    beerList.innerHTML = "";
    visibleBeers.forEach((beer) => beerList.appendChild(beer));
  }

  sortSelect.addEventListener("change", filterAndSortBeers);
  breweryFilter.addEventListener("input", filterAndSortBeers);
  styleFilter.addEventListener("input", filterAndSortBeers);
  minScoreFilter.addEventListener("input", filterAndSortBeers);
  maxScoreFilter.addEventListener("input", filterAndSortBeers);

  filterAndSortBeers();
});