import { Fragment } from 'react';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import AboutMe from './components/aboutMe/AboutMe';
import Skillsets from './components/skillsets/Skillsets';
import Works from './components/works/Works';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <Fragment>
      <Nav />
      <Header />
      <AboutMe />
      <Skillsets />
      <Works />
      <Footer />
    </Fragment>
  );
};

export default App;
