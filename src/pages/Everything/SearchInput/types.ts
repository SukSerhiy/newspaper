import { ChangeEvent } from 'react';

export interface ISearchInput {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
