interface Page<T> {
  content: T[];
  numberOfElements: number;
  totalElements: number;
  totalPages: number;
  number: number;
  first: boolean;
  last: boolean;
  size: number;
}
