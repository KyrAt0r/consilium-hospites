import type { Edge, Node } from '@xyflow/react';
import { Sidebar } from '@components/Graph/Sidebar.tsx';
import {
  addEdge,
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
} from '@xyflow/react';
import { useCallback } from 'react';

import '@xyflow/react/dist/style.css';

export interface GraphData {
  nodes: Node[];
  edges: Edge[];
}

const initialNodes = [];
const initialEdges = [];

export const Graph = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>(initialEdges);

  const onConnect = useCallback((params: any) => setEdges((els) => addEdge(params, els)), [setEdges]);

  const handleFileUpload = (data: GraphData) => {
    setNodes(data.nodes);
    setEdges(data.edges);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar onFileUpload={handleFileUpload} />

      <div style={{ flex: 1 }}>
        <ReactFlowProvider>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
          >
            <MiniMap />
            <Background />
            <Controls />
          </ReactFlow>
        </ReactFlowProvider>
      </div>
    </div>
  );
};
