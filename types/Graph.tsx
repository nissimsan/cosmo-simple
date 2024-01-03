import { Node } from "./Node";
import { Link } from "./Link";

export type Graph = {
  nodes: Node[];
  links: Link[];
  mainNode?: Node;
  nodeColor: (n: Node, i: number) => string;
}
