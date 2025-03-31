import { createContext, ReactNode, useState } from "react";
import { SpeedType } from "../utils/types";

interface SpeedContextInterface {
  speed: SpeedType;
  setSpeed: (tile: SpeedType) => void;
}

export const SpeedContext = createContext<SpeedContextInterface | undefined>(
  undefined
);

export const SpeedProvide = ({ children }: { children: ReactNode }) => {
  const [speed, setSpeed] = useState<SpeedType>(0.5);

  return (
    <SpeedContext.Provider
      value={{
        speed,
        setSpeed,
      }}
    >
      {children}
    </SpeedContext.Provider>
  );
};
