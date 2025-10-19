"use client";

import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';

// Define the data structure we expect for our custom node
export type CustomNodeData = {
  icon: string; // e.g., 'fas fa-database'
  title: string;
  description: string;
};

// The component itself, using memo for performance
const CustomNode = ({ data }: { data: CustomNodeData }) => {
  return (
    <div className="bg-background-light p-4 rounded-lg border-2 border-primary/50 w-64 shadow-lg">
      <div className="flex items-center gap-4 mb-2">
        <i className={`${data.icon} text-highlight text-2xl`}></i>
        <h3 className="text-lg font-bold text-secondary">{data.title}</h3>
      </div>
      <p className="text-secondary/80 text-sm">{data.description}</p>

      {/* Handles are the connection points for edges */}
      <Handle type="target" position={Position.Left} className="!bg-highlight" />
      <Handle type="source" position={Position.Right} className="!bg-highlight" />
    </div>
  );
};

export default memo(CustomNode);
