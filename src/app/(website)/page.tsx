import HomeContainer from "@/container/HomeContainer";
import React from "react";

const App = () => {
  return (
    <main className="relative w-full h-screen">
      <div className="absolute h-full w-full bg-[radial-gradient(#00000020_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <HomeContainer />
    </main>
  );
};

export default App;
