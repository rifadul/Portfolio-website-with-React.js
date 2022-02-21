import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Expreience from './components/expreience/Expreience';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Service from './components/service/Service';
import Testimonials from './components/testimonials/Testimonials';

function App() {
    return (
        <div className="App">
            <Header />
            <Nav />
            <About />
            <Expreience />
            <Service />
            <Portfolio />
            <Testimonials />
            <Contact />
        </div>
    );
}

export default App;
