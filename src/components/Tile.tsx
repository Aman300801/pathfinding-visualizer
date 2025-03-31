import { twMerge } from "tailwind-merge";
import { useTileStyle } from "../hooks/useTileStyle";
import { MAX_ROWS } from "../utils/constant";

interface MouseFunction {
  (row: number, col: number): void;
}

export const Tile = ({
  row,
  column,
  isStart,
  isEnd,
  isWall,
  isPath,
  isTraversed,
  handleMouseDown,
  handleMouseEnter,
  handleMouseUp,
}: {
  row: number;
  column: number;
  isEnd: boolean;
  isStart: boolean;
  isWall: boolean;
  isPath: boolean;
  isTraversed: boolean;
  handleMouseDown: MouseFunction;
  handleMouseUp: MouseFunction;
  handleMouseEnter: MouseFunction;
}) => {
  const tileStyle = useTileStyle({
    isStart,
    isEnd,
    isWall,
    isPath,
    isTraversed,
  });

  const borderStyle =
    row == MAX_ROWS - 1 ? "border-b" : column == 0 ? "border-l" : "";

  const edgeStyle = row == MAX_ROWS - 1 && column == 0 ? "border-l" : "";

  return (
    <div
      className={twMerge(tileStyle, borderStyle, edgeStyle)}
      key={`${row}-${column}`}
      id={`${row}-${column}`}
      onMouseDown={() => handleMouseDown(row, column)}
      onMouseEnter={() => handleMouseEnter(row, column)}
      onMouseUp={() => handleMouseUp(row, column)}
    ></div>
  );
};
