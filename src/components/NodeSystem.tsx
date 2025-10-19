"use client";

import { useMemo, useState, useCallback } from 'react';
import { ReactFlow, Background, Node, Edge, NodeChange, applyNodeChanges } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import CustomNode, { CustomNodeData } from './CustomNode';

// 1. Define the node types
const nodeTypes = {
  custom: CustomNode,
};

// 2. Define the nodes for the development process
// 2. Define the nodes for the development process with better spacing
const initialNodes: Node<CustomNodeData>[] = [
  {
    id: '1',
    type: 'custom',
    position: { x: 200, y: 50 },
    data: {
      icon: 'fas fa-graduation-cap',
      title: 'Learning Phase',
      description: 'Self-taught React and Next.js from scratch to build the foundation.',
    },
  },
  {
    id: '2',
    type: 'custom',
    position: { x: 800, y: 50 },
    data: {
      icon: 'fas fa-project-diagram',
      title: 'Core Development',
      description: 'Built the interactive node-based interface from the ground up using React Flow.',
    },
  },
  {
    id: '3',
    type: 'custom',
    position: { x: 200, y: 300 },
    data: {
      icon: 'fas fa-code-branch',
      title: 'Backend Integration',
      description: 'Collaborated with backend engineers to establish API connections and data flow.',
    },
  },
  {
    id: '4',
    type: 'custom',
    position: { x: 800, y: 300 },
    data: {
      icon: 'fas fa-paint-brush',
      title: 'UI/UX Enhancement',
      description: 'Worked with designers to revamp the landing page and improve product presentation.',
    },
  },
  {
    id: '5',
    type: 'custom',
    position: { x: 500, y: 550 },
    data: {
      icon: 'fas fa-bug',
      title: 'Quality Assurance',
      description: 'Collaborated with QA team to identify and resolve frontend and backend issues.',
    },
  },
  {
    id: '6',
    type: 'custom',
    position: { x: 1100, y: 550 },
    data: {
      icon: 'fas fa-book',
      title: 'Documentation',
      description: 'Created comprehensive documentation to ensure smooth knowledge transfer.',
    },
  },
];

// 3. Define the edges connecting the nodes to show the workflow
const initialEdges: Edge[] = [
  { 
    id: 'e1-2', 
    source: '1', 
    target: '2', 
    animated: true, 
    style: { 
      stroke: '#64FFDA',
      strokeWidth: 2
    }
  },
  { 
    id: 'e2-3', 
    source: '2', 
    target: '3', 
    animated: true, 
    style: { 
      stroke: '#64FFDA',
      strokeWidth: 2
    }
  },
  { 
    id: 'e2-4', 
    source: '2', 
    target: '4', 
    animated: true, 
    style: { 
      stroke: '#64FFDA',
      strokeWidth: 2
    }
  },
  { 
    id: 'e3-5', 
    source: '3', 
    target: '5', 
    animated: true, 
    style: { 
      stroke: '#64FFDA',
      strokeWidth: 2
    }
  },
  { 
    id: 'e4-5', 
    source: '4', 
    target: '5', 
    animated: true, 
    style: { 
      stroke: '#64FFDA',
      strokeWidth: 2
    }
  },
  { 
    id: 'e5-6', 
    source: '5', 
    target: '6', 
    animated: true, 
    style: { 
      stroke: '#64FFDA',
      strokeWidth: 2
    }
  },
];

export default function NodeSystem() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges] = useState<Edge[]>(initialEdges);
  
  // By wrapping the nodeTypes in useMemo, we prevent re-renders
  const memoizedNodeTypes = useMemo(() => nodeTypes, []);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  return (
    <div className="w-full h-full relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={memoizedNodeTypes}
        onNodesChange={onNodesChange}
        nodesDraggable={true}
        fitView
        proOptions={ { hideAttribution: true } }
      >
        <Background />
      </ReactFlow>
    </div>
  );
}
