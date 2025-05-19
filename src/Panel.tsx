import React from "react";

type PanelProps = {
  children: React.ReactNode;
  className?: string;
  title?: string;
};

const Panel: React.FC<PanelProps> = ({ children, className = "", title }) => (
  <div className={`bg-white rounded-xl shadow p-6 mb-4 ${className}`}>
    {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
    {children}
  </div>
);

export default Panel;
