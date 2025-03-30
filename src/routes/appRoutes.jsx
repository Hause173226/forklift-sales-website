import { Route, Routes } from 'react-router-dom';
import About from '../pages/AboutPage';
import Home from '../pages/HomePage';
import Detail from '../pages/Detail';

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  );
};

export default AppRoutes;
