import {
  Cosmograph,
  CosmographProvider,
} from "@cosmograph/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Node } from "../types/Node";
import { Graph } from "../types/Graph";

export default function GraphRenderer({ nodes, links, mainNode }: Graph) {
  // Create a ref to hold the Cosmograph instance
  const cosmographRef = useCallback(
    (ref: any) => {
      // Focus node after Cosmograph mount
      ref?.focusNode({id: "n1"});
      ref?.setZoomLevel(80);
    },
    [nodes]
  );

  return (
    <CosmographProvider nodes={nodes} links={links}>
      <Cosmograph
        ref={cosmographRef}
        nodes={nodes}
        links={links}
        nodeColor={(n, i) => n.color}
        linkColor={"orange"}
        nodeSize={1}
        linkWidth={2}
        linkWidthScale={1}
        nodeSizeScale={0.5}
        nodeLabelColor={"white"}
        nodeSamplingDistance={10}
        onClick={handleClick}
        nodeLabelAccessor={(n) => n.id}
      />
    </CosmographProvider>
  );
}

const handleClick = (
  clickedNode: Node | undefined,
  index: number | undefined,
  nodePosition: [number, number] | undefined,
  event: MouseEvent
) => {
  if (clickedNode && index !== undefined && nodePosition) {
    console.log("Node clicked:", clickedNode);
    clickedNode.color="red";
  }
};
