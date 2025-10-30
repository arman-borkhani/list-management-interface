import { useState } from "react";
import ListView from "./components/list/ListView";
import type { Item } from "./types";

function App() {
  const [items, setItems] = useState<Item[]>([
    {
      id: 1,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      subtitle: "Lorem ipsum",
      createdAt: "10/30/2025, 9:48:36 AM",
    },
  ]);

  return (
    <main>
      <div className="container">
        <div className="py-6 max-w-2xl mx-auto font-sans text-gray-800">
          <h1 className="text-2xl font-semibold mb-6">List Management</h1>

          <ListView items={items} />
        </div>
      </div>
    </main>
  );
}

export default App;
