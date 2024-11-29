import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <>
      <ParallaxProvider>
        <BrowserRouter>
          <div className="maladroit">
            <Routes>
              <Route path="/" element={<Landing />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ParallaxProvider>
    </>
  );
}

export default App;
