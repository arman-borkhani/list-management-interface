import { useReducer, useState } from "react";
import ListModal from "./components/list/ListModal";
import ListView from "./components/list/ListView";
import Button from "./components/ui/Button";
import { itemsReducer } from "./reducers";

function App() {
  const [items, dispatch] = useReducer(itemsReducer, [
    {
      id: 1,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      subtitle: "Lorem ipsum",
      createdAt: "10/30/2025, 9:48:36 AM",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (id: number) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const handleSubmit = (data: { title: string; subtitle: string }) => {
    dispatch({
      type: "CREATE",
      payload: {
        id: items.length ? Math.max(...items.map((it) => it.id)) + 1 : 1,
        title: data.title,
        subtitle: data.subtitle,
        createdAt: new Date().toLocaleString(),
      },
    });
    setIsModalOpen(false);
  };

  return (
    <main>
      <div className="container">
        <div className="py-6 max-w-2xl mx-auto font-sans text-gray-800">
          <div className="flex justify-between items-center gap-4 mb-6">
            <h1 className="text-2xl font-semibold">List Management</h1>
            <Button onClick={() => setIsModalOpen(true)}>Create</Button>
          </div>

          <ListView items={items} onDelete={handleDelete} />

          <ListModal
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
