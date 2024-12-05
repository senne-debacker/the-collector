interface Props {
    endpoint: string;
    query?: Record<string, string>;
    wrappedByKey?: string;
    wrappedByList?: boolean;
    pagination?: boolean; 
}

export default async function fetchApi<T>({
    endpoint,
    query,
    wrappedByKey,
    wrappedByList,
    pagination = false,
}: Props): Promise<T> {
    if (endpoint.startsWith("/")) {
        endpoint = endpoint.slice(1);
    }

    const url = new URL(`${import.meta.env.STRAPI_URL}/api/${endpoint}`);

    if (query) {
        Object.entries(query).forEach(([key, value]) => {
            url.searchParams.append(key, value);
        });
    }

    let results = [];
    let page = 1;
    let totalPages = 1;

    do {
        const res = await fetch(url.toString());
        const data = await res.json();

        if (wrappedByKey) {
            const currentPageData = data[wrappedByKey];
            results = results.concat(currentPageData);
        }

        if (pagination && data.meta?.pagination) {
            totalPages = data.meta.pagination.pageCount;
            page++;
            url.searchParams.set("pagination[page]", page.toString());
        } else {
            break; 
        }
    } while (page <= totalPages);

    return results as T;
}
