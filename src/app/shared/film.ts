export interface Film {
  gtin: string;
  title: string;
  authors: string[];
  published: string;
  subtitle?: string;
  rating?: number;
  thumbnails?: string[];
  description?: string;
}
