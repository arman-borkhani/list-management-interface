import type { Item } from "./types";

type Action =
  | { type: "CREATE"; payload: Item }
  | { type: "UPDATE"; payload: Item }
  | { type: "DELETE"; payload: number };

export function itemsReducer(state: Item[], action: Action): Item[] {
  switch (action.type) {
    case "CREATE":
      return [...state, action.payload];
    case "UPDATE":
      return state.map((it) =>
        it.id === action.payload.id ? action.payload : it
      );
    case "DELETE":
      return state.filter((it) => it.id !== action.payload);
    default:
      return state;
  }
}
