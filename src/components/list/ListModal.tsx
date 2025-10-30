import { useEffect, useState, type FormEvent } from "react";
import type { Item } from "../../types";
import Button from "../ui/Button";
import Dialog from "../ui/Dialog";
import Input from "../ui/Input";

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: { title: string; subtitle: string }) => void;
  editingItem: Item | null;
}

const ListModal = ({ open, onClose, onSubmit, editingItem }: Props) => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

  useEffect(() => {
    if (editingItem) {
      setTitle(editingItem.title);
      setSubtitle(editingItem.subtitle);
    } else {
      setTitle("");
      setSubtitle("");
    }
  }, [editingItem]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return alert("Title is required");
    onSubmit({ title, subtitle });
    setTitle("");
    setSubtitle("");
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <h2 className="text-lg font-semibold mb-4">
        {editingItem ? "Edit Item" : "Create Item"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="title">
            Title
          </label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="subtitle">
            Subtitle
          </label>
          <Input
            id="subtitle"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            placeholder="Enter subtitle"
          />
        </div>
        <div className="flex justify-end gap-2 mt-6">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">{editingItem ? "Save" : "Create"}</Button>
        </div>
      </form>
    </Dialog>
  );
};

export default ListModal;
