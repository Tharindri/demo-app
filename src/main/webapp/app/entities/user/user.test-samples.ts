import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 1153,
  login: 'LML|r3@I\\\\KwQn\\x98',
};

export const sampleWithPartialData: IUser = {
  id: 3493,
  login: 'Qe@7zL4zz\\Ci4XG-x',
};

export const sampleWithFullData: IUser = {
  id: 6674,
  login: '?|@DxwC',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
