import {
  END_TILE_STYLE,
  PATH_TILE_STYLE,
  START_TILE_STYLE,
  TILE_STYLE,
  TRAVERSED_TILE_STYLE,
  WALL_TILE_STYLE,
} from "../utils/constant";

export const useTileStyle = ({
  isStart,
  isEnd,
  isWall,
  isPath,
  isTraversed,
}: {
  isEnd: boolean;
  isStart: boolean;
  isWall: boolean;
  isPath: boolean;
  isTraversed: boolean;
}) => {
  if (isStart) {
    return START_TILE_STYLE;
  } else if (isEnd) {
    return END_TILE_STYLE;
  } else if (isWall) {
    return WALL_TILE_STYLE;
  } else if (isPath) {
    return PATH_TILE_STYLE;
  } else if (isTraversed) {
    return TRAVERSED_TILE_STYLE;
  } else {
    return TILE_STYLE;
  }
};
