import React, { useState } from "react";
import Button from "./Button";
import Panel from "./Panel";
import MemoryEntry from "./MemoryEntry";

const DevTest = () => {
  const [count, setCount] = useState(0);

const sampleMemories = [
  {
    title: "First Memory Entry",
    text: "Roger wakes up in the alley, sticky and confused. What happened last night?",
    date: "2025-05-18",
    tags: ["demo", "wake-up", "alley"],
  },
  {
    title: "Charliebot Boot",
    text: "Charliebot online. System log activated. Player status: sticky.",
    date: "2025-05-18",
    tags: ["ai", "system", "funny"],
  },
  {
    title: "Suspicious Hovercraft",
    text: "A hovercraft dumps garbage. Is someone watching?",
    date: "2025-05-18",
    tags: ["mystery", "hovercraft", "scene"],
  },
];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Dev Test Page</h2>
      <Panel title="Sample Panel">
  <p>This is inside a reusable Panel component.</p>
</Panel>
{sampleMemories.map((mem, idx) => (
  <MemoryEntry
    key={idx}
    title={mem.title}
    text={mem.text}
    date={mem.date}
    tags={mem.tags}
  />
))}
      <div className="flex items-center gap-4 mb-4">
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
        <span className="text-lg">Count: {count}</span>
      </div>
    </div>
  );
};

export default DevTest;
