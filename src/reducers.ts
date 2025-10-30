import type { Action, Item } from "./types";

export function itemsReducer(state: Item[], action: Action): Item[] {
  switch (action.type) {
    case "CREATE":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((it) => it.id !== action.payload);
    default:
      return state;
  }
}
