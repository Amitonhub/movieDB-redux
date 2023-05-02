import "./App.css";
import SignUp from "./Components/UserRegistration/SignUp/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogIn from "./Components/UserRegistration/LogIn/LogIn";
import Home from "./Components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Wishlist from "./Components/Wishlist/Wishlist";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import RecentlyAdded from "./Components/RecentlyAdded/RecentlyAdded";
import TopRated from "./Components/TopRated/TopRated";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/recently-added" element={<RecentlyAdded />} />
          <Route path="/top-rated" element={<TopRated />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
