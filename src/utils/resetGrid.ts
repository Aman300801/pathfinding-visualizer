import {
  END_TILE_CONFIGURATION,
  MAX_COLS,
  MAX_ROWS,
  START_TILE_CONFIGURATION,
  TILE_STYLE,
} from "./constant";
import { isEqual } from "./helper";
import { GridType, TileType } from "./types";

export const resetGrid = ({
  grid,
  startTile = START_TILE_CONFIGURATION,
  endTile = END_TILE_CONFIGURATION,
}: {
  grid: GridType;
  startTile: TileType;
  endTile: TileType;
}) => {
  for (let row = 0; row < MAX_ROWS; row++) {
    for (let col = 0; col < MAX_COLS; col++) {
      const tile = grid[row][col];
      tile.distance = Infinity;
      tile.isPath = false;
      tile.isWall = false;
      tile.isTraversed = false;
      tile.parent = null;

      if (!isEqual(startTile, tile) && !isEqual(endTile, tile)) {
        const tileElement = document.getElementById(`${tile.row}-${tile.column}`);

        if (tileElement) {
          tileElement.className = TILE_STYLE;
        }

        if (tile.row === MAX_ROWS - 1) {
          tileElement?.classList.add("border-b");
        }

        if (tile.column === 0) {
          tileElement?.classList.add("border-l");
        }
      }
    }
  }
};
