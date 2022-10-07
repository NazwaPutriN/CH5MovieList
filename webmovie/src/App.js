import Navigationbar from "./components/Navigationbar";
import LandingPage from "./components/LandingPage";
import Movie from "./components/Movie";
import Footer from "./components/Footer";

import './components/Navbar.css';
import './components/LandingPage.css';
import './components/Movie.css';
import './components/Footer.css'

function App() {
  return (
    <div>
        <Navigationbar />
        <LandingPage />
        <Movie />
        {/* <Card /> */}
        <Footer />
    </div>
  );
}

export default App;
