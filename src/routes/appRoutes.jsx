import { Route, Routes } from 'react-router-dom';
import About from '../pages/AboutPage';
import Home from '../pages/HomePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
