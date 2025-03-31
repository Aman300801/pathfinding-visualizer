import { useRef } from "react";
import { Grid } from "./components/Grid";
import { PathfindingProvider } from "./context/pathfindingContext";
import { SpeedProvide } from "./context/SpeedContext";
import { TileProvide } from "./context/TileContext";
import Nav from "./components/Nav";
import { Analytics } from "@vercel/analytics/react"

export default function App() {
  const isVisualizationRunningRef = useRef(false);
  return (
    <PathfindingProvider>
      <TileProvide>
        <SpeedProvide>
          <Analytics/>
          <div className="h-screen w-screen flex flex-col">
            <Nav isVisualizationRunningRef={isVisualizationRunningRef} />
            <Grid isVisualizationRunningRef={isVisualizationRunningRef}></Grid>
          </div>
        </SpeedProvide>
      </TileProvide>
    </PathfindingProvider>
  );
}
