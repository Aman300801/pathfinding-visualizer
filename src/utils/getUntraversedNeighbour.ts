import { MAX_COLS, MAX_ROWS } from "./constant";
import { GridType, TileType } from "./types";

export const getUntraversedNeighbors = (grid: GridType, tile: TileType) => {
  const { row, column } = tile;
  const neighbors = [];

  if (row > 0) {
    neighbors.push(grid[row - 1][column]);
  }
  if (row < MAX_ROWS - 1) {
    neighbors.push(grid[row + 1][column]);
  }
  if (column > 0) {
    neighbors.push(grid[row][column - 1]);
  }
  if (column < MAX_COLS - 1) {
    neighbors.push(grid[row][column + 1]);
  }
  return neighbors.filter((neighbor) => !neighbor.isTraversed);
};
