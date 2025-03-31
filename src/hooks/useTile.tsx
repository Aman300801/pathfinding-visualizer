import { useContext } from "react";
import { TileContext } from "../context/TileContext";

export default function useTile() {
  const context = useContext(TileContext);
  if (!context) {
    throw new Error("useTile must be used inside a Tile context");
  }

  return context;
}
