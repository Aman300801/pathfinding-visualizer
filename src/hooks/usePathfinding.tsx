import { useContext } from "react";
import { PathfindingContext } from "../context/pathfindingContext";

export default function usePathfinding() {
  const context = useContext(PathfindingContext);
  if (!context) {
    throw new Error(
      "usePathfinding must be used inside a Path finding context"
    );
  }

  return context;
}
