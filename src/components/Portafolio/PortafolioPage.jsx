import React, { useEffect, useState } from 'react';
import CardProject from '../ui/CardProject';

const portfolios =[
    {
        id:1,
        img:'https://i.ibb.co/rFHYMzM/got.png',
        type:'personal',
        description:'Taller Web',
        url_project:'https://stivens-espinoza-got.netlify.app',
        url_repo:'https://github.com/stivens19/got-taller-web'
    },
    {
        id:2,
        img:'https://i.ibb.co/rFHYMzM/got.png',
        type:'trabajo',
        description:'Taller Web',
        url_project:'https://stivens-espinoza-got.netlify.app',
        url_repo:'https://github.com/stivens19/got-taller-web'
    }
]
const PortfolioPage = () => {
    const [type, setType] = useState('todos')

    const [portfoliosfilter, setPortfoliosfilter] = useState(portfolios);
    useEffect(() => {
        setPortfoliosfilter(portfolios)
    }, [portfolios]);
    useEffect(() => {
    
        if(type==='todos'){
            setPortfoliosfilter(portfolios)
        }else{
            const repos=portfolios.filter((portfolio)=>portfolio.type === type);
            setPortfoliosfilter(repos)
        }
    }, [type]);
    return (
        <section className="portfoliosection p-main-service">
            <div className="categories">
                <div className="category" onClick={()=>setType('todos')}>
                    <span>Todos</span>
                </div>
                <div className="category" onClick={()=>setType('trabajo')}>
                    <span>Trabajos</span>
                </div>
                <div className="category" onClick={()=>setType('personal')}>
                    <span>Personal</span>
                </div>
            </div>
            <div className="projects">
                {
                    portfoliosfilter.map(portfolio=>(
                        <CardProject key={portfolio.id} {...portfolio} />
                    ))
                }
            </div>
        </section>
    );
}

export default PortfolioPage;