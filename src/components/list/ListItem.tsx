import type { Item } from "../../types";

interface Props {
  item: Item;
}

const ListItem = ({ item }: Props) => {
  return (
    <article className="border border-gray-200 rounded-xl p-4 space-y-1">
      <time className="text-xs text-gray-400">{item.createdAt}</time>
      <h3 className="font-medium text-gray-900">{item.title}</h3>
      <p className="text-sm text-gray-600">{item.subtitle}</p>
    </article>
  );
};

export default ListItem;
