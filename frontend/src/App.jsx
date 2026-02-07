import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomeRetro from "./pages/HomeRetro";
import Explore from "./pages/Explore";
import Timeline from "./pages/Timeline";
import Search from "./pages/Search";
import Submit from "./pages/Submit";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeRetro />} />
        <Route path="explore" element={<Explore />} />
        <Route path="timeline" element={<Timeline />} />
        <Route path="search" element={<Search />} />
        <Route path="submit" element={<Submit />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
