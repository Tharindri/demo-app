export interface IProduct {
  id: number;
  title?: string | null;
  description?: string | null;
  rating?: string | null;
  url?: string | null;
}

export type NewProduct = Omit<IProduct, 'id'> & { id: null };
