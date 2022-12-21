import './App.css';
import Footer from './components/Footer/Footer.js'
import Homepage from './components/Homepage/Homepage.js'
import ContactForm from './components/ContactForm/ContactForm.js'
import Portfolio from './components/Portfolio/Portfolio.js'
import {Route, Routes} from "react-router-dom";
import Layout from './Layout.js';
import './Menu.css';

function App() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Homepage/>}/>
                    <Route path="/contact" element={<ContactForm/>}/>
                    <Route path="/portfolio" element={<Portfolio
                        sections={[
                            {
                                title: 'Fashion',
                                images: ['./images/portfolio_1.png', './images/portfolio_2.png']
                            },
                            {
                                title: 'Art',
                                images: [],
                            },
                            {
                                title: 'Design',
                                images: [],
                            },
                            {
                                title: 'Style',
                                images: [],
                            },
                        ]}
                    />}/>
                </Route>
            </Routes>
            <Footer/>
        </main>
    );
}

export default App;
