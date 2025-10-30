import type { Item } from "../../types";
import Button from "../ui/Button";

interface Props {
  item: Item;
  onEdit: () => void;
  onDelete: () => void;
}

const ListItem = ({ item, onEdit, onDelete }: Props) => {
  return (
    <article className="border border-gray-200 rounded-xl p-4 space-y-1 flex flex-col sm:flex-row gap-4 justify-between items-start">
      <div>
        <time className="text-xs text-gray-400">{item.createdAt}</time>
        <h3 className="font-medium text-gray-900">{item.title}</h3>
        <p className="text-sm text-gray-600">{item.subtitle}</p>
      </div>

      <div className="flex gap-2">
        <Button onClick={onEdit} variant="outline">
          Edit
        </Button>
        <Button onClick={onDelete} variant="destructive">
          Delete
        </Button>
      </div>
    </article>
  );
};

export default ListItem;
