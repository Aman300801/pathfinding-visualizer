import { twMerge } from "tailwind-merge";
import usePathfinding from "../hooks/usePathfinding";
import { MAX_ROWS } from "../utils/constant";
import { Tile } from "./Tile";
import { RefObject, useState } from "react";
import { checkStartOrEnd, createNewGrid } from "../utils/helper";

export const Grid = ({
  isVisualizationRunningRef,
}: {
  isVisualizationRunningRef: RefObject<boolean>;
}) => {
  const { grid, setGrid } = usePathfinding();

  const [isMouseDown, setMouseDown] = useState(false);

  const handleMouseDown = (row: number, col: number)=>{
    if(isVisualizationRunningRef.current || checkStartOrEnd(row, col)){
        return;
    }

    setMouseDown(true)
    const newGrid = createNewGrid(grid, row, col);

    setGrid(newGrid)
  }

  const handleMouseUp = (row: number, col: number)=>{
    if(isVisualizationRunningRef.current || checkStartOrEnd(row, col)){
        return;
    }

    setMouseDown(false);
  }

  const handleMouseEnter = (row: number, col: number)=>{
    if(isVisualizationRunningRef.current || checkStartOrEnd(row, col)){
        return;
    }

    if(isMouseDown){
        const newGrid = createNewGrid(grid, row, col);
        setGrid(newGrid)
    }    
  }

  return (
    <div
      className={twMerge(
        //Base Classes
        "flex flex-col justify-center items-center border-sky-300 mt-10 mb-10",
        //control grid height
        `lg:min-h-[${MAX_ROWS * 15}px] md:min-h-[${
          MAX_ROWS * 12
        }px] xs:min-h-[${MAX_ROWS * 12}px] min-h-[${MAX_ROWS * 7}px] `,
        // Controlling Grid Width
        `lg:min-w-[${MAX_ROWS * 15}px] xs:min-w-[${
          MAX_ROWS * 12
        }px] md:min-w-[${MAX_ROWS * 12}px] min-w-[${MAX_ROWS * 7}px] `
      )}
    >
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((tile, tileIndex) => {
            const { isStart, isEnd, isPath, isTraversed, isWall } = tile;

            return (
              <Tile
                key={tileIndex}
                row={tile.row}
                column={tile.column}
                isEnd={isEnd}
                isStart={isStart}
                isPath={isPath}
                isWall={isWall}
                isTraversed={isTraversed}
                handleMouseDown={()=> handleMouseDown(tile.row, tile.column)}
                handleMouseEnter={()=> handleMouseEnter(tile.row, tile.column)}
                handleMouseUp={()=> handleMouseUp(tile.row, tile.column)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};
