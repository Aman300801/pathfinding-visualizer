import { AlgorithmSelectType, MazeSelectType, SpeedSelectType } from "./types";

export const MAX_ROWS = 40;
export const MAX_COLS = 40;

export const START_TILE_CONFIGURATION = {
  row: 1,
  column: 1,
  isEnd: false,
  isWall: false,
  isPath: false,
  parent: null,
  distance: 0,
  isStart: false,
  isTraversed: false,
};

export const END_TILE_CONFIGURATION = {
  row: MAX_ROWS - 2,
  column: MAX_COLS - 2,
  isEnd: false,
  isWall: false,
  isPath: false,
  parent: null,
  distance: 0,
  isStart: false,
  isTraversed: false,
};

export const TILE_STYLE =
  "lg:w-[17px] md:w-[15px] xs:w-[12px] w-[7px] lg:h-[17px] md:h-[15px] xs:h-[12px] h-[7px] border-t border-r border-sky-100 ";

export const TRAVERSED_TILE_STYLE = TILE_STYLE + "bg-cyan-400";
export const START_TILE_STYLE = TILE_STYLE + "bg-green-400";
export const END_TILE_STYLE = TILE_STYLE + "bg-red-400";
export const WALL_TILE_STYLE = TILE_STYLE + "bg-gray-400";
export const PATH_TILE_STYLE = TILE_STYLE + "bg-green-500";

export const MAZES: MazeSelectType[] = [
  { name: "No Maze", value: "NONE" },
  { name: "Binary Tree", value: "BINARY_TREE" },
  { name: "Recursive Division", value: "RECURSIVE_DIVISION" },
];

export const PATHFINDING_ALGORITHMS: AlgorithmSelectType[] = [
  { name: "Dijkstra", value: "DIJKSTRA" },
  { name: "A-Star", value: "A_STAR" },
  { name: "Breath First Search", value: "BFS" },
  { name: "Depth First Search", value: "DFS" },
];

export const SPEEDS: SpeedSelectType[] = [
  { name: "Slow", value: 2 },
  { name: "Medium", value: 1 },
  { name: "Fast", value: 0.5 },
];

export const SLEEP_TIME = 8;
export const EXTENDED_SLEEP_TIME = 30;
