    // Wait until the DOM is loaded before adding event listeners
    document.addEventListener('DOMContentLoaded', function () {
        const sortSelect = document.getElementById("sortOrder");
        const locationSelect = document.getElementById("locationFilter");
        const breweryList = document.getElementById("breweriesList");
        const allBreweries = Array.from(breweryList.children); // Get all the brewery cards

        // Function to sort breweries
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
            // Remove all the existing cards and append sorted ones
            breweryList.innerHTML = '';
            sortedBreweries.forEach(brewery => breweryList.appendChild(brewery));
        }

        // Function to filter breweries by location
        function filterBreweries(location) {
            allBreweries.forEach(brewery => {
                const breweryLocation = brewery.getAttribute('data-location');
                if (location === "" || breweryLocation === location) {
                    brewery.style.display = "block"; // Show the brewery
                } else {
                    brewery.style.display = "none"; // Hide the brewery
                }
            });
        }

        // Event listener for sorting
        sortSelect.addEventListener("change", (e) => {
            const sortOrder = e.target.value;
            sortBreweries(sortOrder); // Call the sort function
        });

        // Event listener for location filtering
        locationSelect.addEventListener("change", (e) => {
            const selectedLocation = e.target.value;
            filterBreweries(selectedLocation); // Call the filter function
        });
    });