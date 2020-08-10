import React from 'react';
import {Container, Encomenda, Pagamento} from './styles'; 

export interface Props{
    title?: string,
    loc?: boolean,
    enc?: boolean,
    pay?: boolean,
    isClient?: boolean
}

const Pad: React.FC<Props> = ({title, loc, enc, pay, isClient}) => {
    return (
        <Container>
            <h1>{title}</h1>
            {loc ? <ul>
                <li>Objeto Postado</li>
                <li>São Paulo</li>
                <li>Rio de Janeiro</li>
                <li>Cachoeiro de Itepemirim</li>
                
            </ul> : ''}

            {enc ? 
            <Encomenda>
                <div>
                    <p><span><i className="fa fa-history"></i></span>Visto pela última vez:</p>
                    <p>04/12/2018</p>
                </div>
                <div>
                    <p><span><i className="fa fa-truck"></i></span>Transportadora:</p>
                    <p>BrasilPress</p>
                </div>
                <div>
                    <p><span><i className="fa fa-home"></i></span>Endereço Final:</p>
                    <p>Gironda</p>
                </div>
            </Encomenda>
             : ''}

            {pay ? 
                <Pagamento>
                    <div>
                        <p>Status:</p>
                        <p>Pendente</p>
                    </div>

                    <div>
                        <p>Valor:</p>
                        <p>70,66 R$</p>
                    </div>

                    {isClient ? <button>PAGAR</button> : ''}
                </Pagamento>
            : ''}

        </Container>
    )
}

export default Pad;