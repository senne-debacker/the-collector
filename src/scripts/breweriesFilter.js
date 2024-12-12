
document.addEventListener('DOMContentLoaded', function () {
    const sortSelect = document.getElementById("sortOrder");
    const locationSelect = document.getElementById("locationFilter");
    const breweryList = document.getElementById("breweriesList");
    const allBreweries = Array.from(breweryList.children);

    function sortBreweries(order) {
        let sortedBreweries;
        if (order === 'az') {
            sortedBreweries = allBreweries.sort((a, b) => {
                const nameA = a.querySelector(".brewery-name").textContent;
                const nameB = b.querySelector(".brewery-name").textContent;
                return nameA.localeCompare(nameB);
            });
        } else if (order === 'za') {
            sortedBreweries = allBreweries.sort((a, b) => {
                const nameA = a.querySelector(".brewery-name").textContent;
                const nameB = b.querySelector(".brewery-name").textContent;
                return nameB.localeCompare(nameA);
            });
        }
        breweryList.innerHTML = '';
        sortedBreweries.forEach(brewery => breweryList.appendChild(brewery));
    }

    function filterBreweries(location) {
        allBreweries.forEach(brewery => {
            const breweryLocation = brewery.getAttribute('data-location');
            if (location === "" || breweryLocation === location) {
                brewery.style.display = "block";
            } else {
                brewery.style.display = "none";
            }
        });
    }

    sortSelect.addEventListener("change", (e) => {
        const sortOrder = e.target.value;
        sortBreweries(sortOrder);
    });

    locationSelect.addEventListener("change", (e) => {
        const selectedLocation = e.target.value;
        filterBreweries(selectedLocation);
    });
});