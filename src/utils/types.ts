export type AlgorithmTypes = "DIJKSTRA" | "A_STAR" | "DFS" | "BFS";
export interface AlgorithmSelectType {
  name: string;
  value: AlgorithmTypes;
}

export type MazeType = "NONE" | "BINARY_TREE" | "RECURSIVE_DIVISION";

export type MazeSelectType = {
  name: string;
  value: MazeType;
};

export type TileType = {
  row: number;
  column: number;
  isEnd: boolean;
  isStart: boolean;
  isWall: boolean;
  isPath: boolean;
  distance: number;
  isTraversed: boolean;
  parent: TileType | null;
};

export type GridType = TileType[][];

export type SpeedType = 2 | 1 | 0.5;
export interface SpeedSelectType {
  name: string;
  value: SpeedType;
}
