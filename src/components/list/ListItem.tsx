import type { Item } from "../../types";
import Button from "../ui/Button";

interface Props {
  item: Item;
  onDelete: () => void;
}

const ListItem = ({ item, onDelete }: Props) => {
  return (
    <article className="border border-gray-200 rounded-xl p-4 space-y-1 flex flex-col sm:flex-row gap-4 justify-between items-start">
      <div>
        <time className="text-xs text-gray-400">{item.createdAt}</time>
        <h3 className="font-medium text-gray-900">{item.title}</h3>
        <p className="text-sm text-gray-600">{item.subtitle}</p>
      </div>

      <Button onClick={onDelete} variant="destructive">
        Delete
      </Button>
    </article>
  );
};

export default ListItem;
