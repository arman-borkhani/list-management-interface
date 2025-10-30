import { useReducer, useState } from "react";
import ListModal from "./components/list/ListModal";
import ListView from "./components/list/ListView";
import Button from "./components/ui/Button";
import { itemsReducer } from "./reducers";
import type { Item } from "./types";

function App() {
  const [items, dispatch] = useReducer(itemsReducer, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Item | null>(null);

  const handleCreate = () => {
    setEditingItem(null);
    setIsModalOpen(true);
  };

  const handleEdit = (item: Item) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const handleSubmit = (data: { title: string; subtitle: string }) => {
    if (editingItem) {
      dispatch({
        type: "UPDATE",
        payload: { ...editingItem, ...data },
      });
    } else {
      dispatch({
        type: "CREATE",
        payload: {
          id: items.length ? Math.max(...items.map((it) => it.id)) + 1 : 1,
          title: data.title,
          subtitle: data.subtitle,
          createdAt: new Date().toLocaleString(),
        },
      });
    }
    setIsModalOpen(false);
  };

  return (
    <main>
      <div className="container">
        <div className="py-6 max-w-2xl mx-auto font-sans text-gray-800">
          <div className="flex justify-between items-center gap-4 mb-6">
            <h1 className="text-2xl font-semibold">List Management</h1>
            <Button onClick={handleCreate}>Create</Button>
          </div>

          <ListView items={items} onEdit={handleEdit} onDelete={handleDelete} />

          <ListModal
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSubmit={handleSubmit}
            editingItem={editingItem}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
