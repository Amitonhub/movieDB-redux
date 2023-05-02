import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { lazy, Suspense } from "react";

const SignUp = lazy(() => import("./Components/UserRegistration/SignUp/SignUp"));
const LogIn = lazy(() => import("./Components/UserRegistration/LogIn/LogIn"));
const Home = lazy(() => import("./Components/Home/Home"));
const Wishlist = lazy(() => import("./Components/Wishlist/Wishlist"));
const MovieDetails = lazy(() => import("./Components/MovieDetails/MovieDetails"));
const RecentlyAdded = lazy(() => import("./Components/RecentlyAdded/RecentlyAdded"));
const TopRated = lazy(() => import("./Components/TopRated/TopRated"));

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/wishlist" element={<Suspense fallback={<div>Loading...</div>}><Wishlist /></Suspense>} />
          <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><SignUp /></Suspense>} />
          <Route path="/login" element={<Suspense fallback={<div>Loading...</div>}><LogIn /></Suspense>} />
          <Route path="/home" element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
          <Route path="/movies/:id" element={<Suspense fallback={<div>Loading...</div>}><MovieDetails /></Suspense>} />
          <Route path="/recently-added" element={<Suspense fallback={<div>Loading...</div>}><RecentlyAdded /></Suspense>} />
          <Route path="/top-rated" element={<Suspense fallback={<div>Loading...</div>}><TopRated /></Suspense>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
