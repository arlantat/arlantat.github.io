"use client";

import { ReactFlow, MiniMap, Controls, Background, Node, Edge } from  "@xyflow/react";
import '@xyflow/react/dist/style.css';

const initialNodes: Node[] = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: 'Data Pipeline' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: 'Data Source' } },
  { id: '3', position: { x: 250, y: 100 }, data: { label: 'Transformation' } },
  { id: '4', position: { x: 250, y: 200 }, data: { label: 'Data Warehouse' } },
];

const initialEdges: Edge[] = [
  { id: 'e2-3', source: '2', target: '3' },
  { id: 'e3-4', source: '3', target: '4' },
];

export default function NodeSystem() {
  return (
    <div style={{ width: '100%', height: '400px' }} className="rounded-lg border border-secondary/30">
      <ReactFlow nodes={initialNodes} edges={initialEdges}>
        <Controls />
        <MiniMap />
        <Background gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
