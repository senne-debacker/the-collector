export default interface Beer {
  id: number;
  documentId: string;

  Name: string;
  ABV: number;
  Style: string;
  My_score: number;
  Average_score: number;
  Date_tasted: string;

  createdAt: string;
  updatedAt: string;
  publishedAt: string;

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

  Brewery: {
      id: number;
      documentId: string;

      Name: string;
      Location: string;

      createdAt: string;
      updatedAt: string;
      publishedAt: string;

      Description: string;
  };
}
