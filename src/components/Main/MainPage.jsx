import React from 'react';
import ServicesSection from './../sections/ServicesSection';
import About from './../sections/About';
import Skills from './../sections/Skills';
import Contact from './../sections/Contact';
import Redes from './../sections/Redes';
import Banner from './../ui/Banner';

const MainPage = () => {
    return (
        <>
            <div className="mt-1">
                <Banner />
                <ServicesSection />
                <About />
                <Skills />
                <Contact />
                <Redes />
            </div>

        </>
    );
}

export default MainPage;
