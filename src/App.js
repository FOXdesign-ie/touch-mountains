
import {Switch, Route, useLocation} from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PlacesPage from './pages/PlacesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PlaceDetails from './pages/PlaceDetails';
import './App.css';

function App() {

  const location = useLocation();

  return (
    <>
        <Nav />
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" exact  component={AboutPage} />
          <Route path="/places" exact  component={PlacesPage} />   
          <Route path="/places/:id" component={PlaceDetails} />
          <Route path="/contact" exact  component={ContactPage} />
        </Switch>
      <Footer/>
    </>
  );
}

export default App;