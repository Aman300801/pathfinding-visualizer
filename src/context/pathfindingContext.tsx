import { createContext, ReactNode, useState } from "react";
import { AlgorithmTypes, GridType, MazeType } from "../utils/types";
import { createGrid } from "../utils/helper";
import {
  END_TILE_CONFIGURATION,
  START_TILE_CONFIGURATION,
} from "../utils/constant";

interface PathfindingContextInterface {
  algorithm: AlgorithmTypes;
  setAlgorithm: (algorithm: AlgorithmTypes) => void;
  maze: MazeType;
  setMaze: (mazeType: MazeType) => void;
  grid: GridType;
  setGrid: (grid: GridType) => void;
  isGraphTraversed: boolean;
  setGraphTraversed: (isGraphVisualized: boolean) => void;
}

export const PathfindingContext = createContext<
  PathfindingContextInterface | undefined
>(undefined);

export const PathfindingProvider = ({ children }: { children: ReactNode }) => {
  const [algorithm, setAlgorithm] = useState<AlgorithmTypes>("BFS");
  const [maze, setMaze] = useState<MazeType>("NONE");
  const [grid, setGrid] = useState<GridType>(
    createGrid(START_TILE_CONFIGURATION, END_TILE_CONFIGURATION)
  );
  const [isGraphTraversed, setGraphTraversed] = useState(false);

  return (
    <PathfindingContext.Provider
      value={{
        algorithm,
        setAlgorithm,
        maze,
        setMaze,
        grid,
        setGrid,
        isGraphTraversed,
        setGraphTraversed,
      }}
    >
      {children}
    </PathfindingContext.Provider>
  );
};
