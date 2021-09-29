
import { types } from './../types/types';


const initialState={
    projects:[
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
}

export const projectsReducer=(state=initialState,action)=>{
    switch (action.type) {
        case types.postsLoaded:
            return {
                ...state,
                projects:[...action.payload]
            }
      
        default:
            return state;
    }
}