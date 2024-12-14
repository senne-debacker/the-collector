window.addEventListener('load', function () {
    const sortSelect = document.getElementById("sortOrder");
    const breweryList = document.getElementById("breweries-list");
    const allBreweries = Array.from(breweryList.children);

    function sortBreweries(order) {
        let sortedBreweries;
        if (order === 'az') {
            sortedBreweries = allBreweries.sort((a, b) => {
                const nameA = a.querySelector(".card-name")?.textContent || '';
                const nameB = b.querySelector(".card-name")?.textContent || '';
                return nameA.localeCompare(nameB);
            });
        } else if (order === 'za') {
            sortedBreweries = allBreweries.sort((a, b) => {
                const nameA = a.querySelector(".card-name")?.textContent || '';
                const nameB = b.querySelector(".card-name")?.textContent || '';
                return nameB.localeCompare(nameA);
            });
        }
        breweryList.textContent = '';
        sortedBreweries.forEach(brewery => breweryList.appendChild(brewery));
    }

    sortSelect.addEventListener("change", (e) => {
        const sortOrder = e.target.value;
        sortBreweries(sortOrder);
    });
});