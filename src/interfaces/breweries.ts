export default interface Brewery {
    id: number;
    documentId: string;

    Name: string;
    Location: string;

    createdAt: string;
    updatedAt: string;
    publishedAt: string;

    Description: string;
    Beers: object;

    Logo: Array<{
        id: number;
        documentId: string;
        name: string;
        alternativeText: string | null;
        caption: string | null;
        width: number;
        height: number;
        formats: any;
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl: string | null;
        provider: string;
        provider_metadata: any;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
      }>;
  }
  