import React from "react";
import MemoryCard from "./MemoryCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <MemoryCard
        title="Memory Test"
        text="This is only a test of the MemoryCard rendering system."
        date="2025-05-18"
        tags={["react", "tailwind", "debug"]}
      />
    </div>
  );
}

export default App;
