import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./views/HomePage";
import ContactPage from "./views/ContactPage";
import NotFound from "./views/NotFound";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/contacto"
          element={<ContactPage />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
      <Footer/>
    </div>
  );
};
export default App;
