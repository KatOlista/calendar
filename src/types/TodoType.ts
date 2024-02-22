import { DropDownListElement } from ".";

export type Todo = {
  id: string,
  date: string,
  name: string,
  labelColors: DropDownListElement[] | null,
};