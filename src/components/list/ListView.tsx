import type { Item } from "../../types";
import ListItem from "./ListItem";

interface Props {
  items: Item[];
}

const ListView = ({ items }: Props) => {
  if (items.length === 0) {
    return (
      <p className="text-gray-500">No items yet. Click Create to add one.</p>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ListView;
