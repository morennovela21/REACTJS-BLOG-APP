import { Routes, Route } from "react-router-dom";
import About from "./About";
import Services from "./Services";
import Footer from "./Footer";
import Main from "./Main";
import MainLayout from "./MainLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/footer" element={<Footer />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;