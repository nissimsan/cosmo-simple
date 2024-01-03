import { useEffect, useRef, useState } from "react";
import { Node } from "../types/Node";
import { Link } from "../types/Link";
import GraphRenderer from "./GraphRenderer";

export default function App() {
  const [mainNode, setMainNode] = useState<Node>();
  const [nodes, setNodes] = useState<Node[]>([
    { id: "n1", color: "blue" },
    { id: "n2", color: "blue" },
  ]);
  const [links, setLinks] = useState<Link[]>([
    { source: "n1", target: "n2", date: new Date("2023-06-23T10:00:00.000Z") },
  ]);

  return (
    <>
      <GraphRenderer nodes={nodes} links={links} nodeColor={d => d.color}  />  
    </>
  );
}
