import { Fragment } from 'react';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import AboutMe from './components/aboutMe/AboutMe';
import Skillsets from './components/works/skillsets/Skillsets';
import Works from './components/works/Works';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Nav />
      <AboutMe />
      <Skillsets />
      <Works />
      <Contacts />
      <Footer />
    </Fragment>
  );
};

export default App;
