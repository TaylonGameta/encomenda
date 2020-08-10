import React from 'react';

import {Container, Item} from './stylea';

export interface Props{
    isAdmin?: boolean
}


const Main: React.FC<Props> = ({isAdmin}) =>{
    return(
        <Container>
            <h1>Encomendas</h1>
            <Item onClick={()=> window.location.href = "/#/cliente/pacote"}>
                <div><i className="fa fa-cubes"></i></div>
                <div>
                    <h3>GTX 960 GALAX</h3>
                    <p>Placa de Video de 2GB, Cachoeiro de Itapemirim</p>
                </div>
            </Item>
            <Item onClick={()=> window.location.href = "/#/cliente/pacote"}>
                <div><i className="fa fa-cubes"></i></div>
                <div>
                    <h3>GTX 960 GALAX</h3>
                    <p>Placa de Video de 2GB, Cachoeiro de Itapemirim</p>
                </div>
            </Item>
            {isAdmin ? <Item onClick={()=> window.location.href = "/#/transportador/registrar"}>
                <div><i className="fa fa-cubes"></i></div>
                <div>
                    <h3>Adicionar</h3>
                </div>
            </Item> : ''}
            
        </Container>
    )
}

export default Main;