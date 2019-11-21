export interface Film {
  gtin: string;
  title: string;
  authors: string[];
  published: Date;
  subtitle?: string;
  rating?: number;
  thumbnails?: string[];
  description?: string;
}
