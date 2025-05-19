import React from "react";

type MemoryCardProps = {
  title: string;
  text: string;
  date?: string;
  tags?: string[];
};

const MemoryCard: React.FC<MemoryCardProps> = ({ title, text, date, tags }) => {
  console.log("✅ MemoryCard rendering with:", { tags });

  return (
    <div className="border rounded-lg p-4 bg-white shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        {date && <span className="text-xs text-gray-500">{date}</span>}
      </div>
      <p className="text-gray-700 mb-3">{text}</p>
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-mono"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default MemoryCard;

