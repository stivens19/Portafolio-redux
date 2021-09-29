import React from 'react';

import CardService from './complements/CardService';
const services=[
    {
        id:1,
        classIcon:'fab fa-github',
        title:'Desarrollo Web',
        description:'Desarrollo de aplicaciones web a medida'
    },
    {
        id:2,
        classIcon:'fas fa-palette',
        title:'Diseño Web',
        description:'Diseño de interfaces web interactivas.'
    },
    {
        id:3,
        classIcon:'fas fa-chalkboard-teacher',
        title:'Asesoria',
        description:'Asesoria en desarrollo web.'
    },
 
];
const ServicesCards = () => {
   
    return (
        <div className="services__flex-container">
            {
                services.map((service) => (
                    <CardService key={service.id} {...service} />
                ))
            }
        </div>
    );
}

export default ServicesCards;
