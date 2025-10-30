export interface Item {
  id: number;
  title: string;
  subtitle: string;
  createdAt: string;
}

export type Action =
  | { type: "CREATE"; payload: Item }
  | { type: "UPDATE"; payload: Item }
  | { type: "DELETE"; payload: number };
