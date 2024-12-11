            document.addEventListener("DOMContentLoaded", () => {
                const filterSelect = document.getElementById("locationFilter");
                const sortSelect = document.getElementById("sortOrder");
                const breweryList = document.getElementById("breweriesList");
                let breweryItems = Array.from(document.querySelectorAll(".brewery-item"));

                function filterBreweries() {
                    const selectedLocation = filterSelect.value;

                    breweryItems.forEach((item) => {
                        const location = item.getAttribute("data-location");
                        if (!selectedLocation || location === selectedLocation) {
                            item.style.display = "";
                        } else {
                            item.style.display = "none";
                        }
                    });
                }

                function sortBreweries() {
                    const sortOrder = sortSelect.value;
                    const visibleItems = breweryItems.filter(item => item.style.display !== "none");

                    visibleItems.sort((a, b) => {
                        const nameA = a.getAttribute("data-name").toLowerCase();
                        const nameB = b.getAttribute("data-name").toLowerCase();

                        if (sortOrder === "az") {
                            return nameA.localeCompare(nameB);
                        } else if (sortOrder === "za") {
                            return nameB.localeCompare(nameA);
                        }
                        return 0;
                    });

                    visibleItems.forEach(item => breweryList.appendChild(item));
                }

                filterSelect.addEventListener("change", () => {
                    filterBreweries();
                    sortBreweries();
                });

                sortSelect.addEventListener("change", sortBreweries);
            });