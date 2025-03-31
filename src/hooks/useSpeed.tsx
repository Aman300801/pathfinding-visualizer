import { useContext } from "react";
import { SpeedContext } from "../context/SpeedContext";

export default function useSpeed() {
  const context = useContext(SpeedContext);
  if (!context) {
    throw new Error(
      "useSpeed must be used inside a speed context"
    );
  }

  return context;
}
