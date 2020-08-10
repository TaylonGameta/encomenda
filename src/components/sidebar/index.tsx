import React from 'react'
import {Container} from './styles'

const Sidebar: React.FC = () =>{
    return(
        <Container>
            <button>
                <img width="50" height="50" src="https://avatars2.githubusercontent.com/u/36745771?s=400&u=03d2da8a294d622dec9cf0c722d7223eaec7706d&v=4"></img>
                <p>Taylon Sopeletto</p>
            </button>
            
            <button>
                <i className="fa fa-cogs"></i><p>Opções</p>
            </button>
        </Container>
    )
}

export default Sidebar;