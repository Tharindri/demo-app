import { IProduct, NewProduct } from './product.model';

export const sampleWithRequiredData: IProduct = {
  id: 16808,
};

export const sampleWithPartialData: IProduct = {
  id: 23262,
  title: 'yowza through',
  url: 'https://clean-conspiracy.net/',
};

export const sampleWithFullData: IProduct = {
  id: 21236,
  title: 'marketer clever flaky',
  description: 'ouch criminal riot',
  rating: 'once burble unto',
  url: 'https://awful-wrong.biz',
};

export const sampleWithNewData: NewProduct = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
