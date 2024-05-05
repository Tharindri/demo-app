import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '27d8ba5f-45d5-4784-a776-85e1f6b91b38',
};

export const sampleWithPartialData: IAuthority = {
  name: '7afb1144-de94-4009-8f96-81f42f51718e',
};

export const sampleWithFullData: IAuthority = {
  name: '5d2ef4a7-cdca-4984-9e4c-328548cfeb15',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
