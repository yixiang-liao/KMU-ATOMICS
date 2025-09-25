// routes/index.jsx
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

const AppRoutes = () => {
  return (
    <>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
