import "./App.css";
import React from "react";

const MicroFrontend = React.lazy(() => import("remote/MicroFrontend"));

console.log(MicroFrontend);

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <React.Suspense fallback="Loading Remote App...">
        <MicroFrontend />
      </React.Suspense>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export default App;
