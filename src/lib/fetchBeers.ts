import fetchApi from "./strapi.ts";

const fetchBeers = async () => {
    const pageSize = 25;
    let page = 1;
    let allBeers = [];
  
    let fetchMore = true;
    while (fetchMore) {
      const beersPage = await fetchApi<Beer[]>({
        endpoint: `beers?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
        wrappedByKey: "data",
      });
  
      allBeers = [...allBeers, ...beersPage];
  
      if (beersPage.length < pageSize) {
        fetchMore = false;
      } else {
        page++;
      }
    }
  
    return allBeers;
  };
  
  export default fetchBeers;
  