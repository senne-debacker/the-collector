import fetchApi from "./strapi";

export async function getStaticPaths() {
    const pageSize = 25;
    let page = 1;
    let allBreweries = [];
  
    let fetchMore = true;
    while (fetchMore) {
      const breweriesPage = await fetchApi<Brewery[]>({
        endpoint: `breweries?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
        wrappedByKey: "data",
      });
  
      allBreweries = [...allBreweries, ...breweriesPage];
  
      if (breweriesPage.length < pageSize) {
        fetchMore = false;
      } else {
        page++;
      }
    }
  
    return allBreweries.map((brewery) => ({
      params: { Name: brewery.Name },
      props: { ...brewery },
    }));
  }

export default getStaticPaths;