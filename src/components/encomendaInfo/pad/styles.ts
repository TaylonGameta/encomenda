import styled from 'styled-components'

export const Pagamento = styled.div`

    margin-top: 30px;
    
   
    >div{
        display: flex;
        justify-content: space-between;
        padding-top: 20px;
        padding-bottom: 20px;
        color: var(--tertiary);
    }

    button{
        width: 200px;
        height: 50px;
        color: white;
        font-weight: bold;
        background-color: var(--blue);
        font-size: 14px;
    
        &:hover{
            background-color: #567BFF;
            cursor: pointer;
        }
    }

`

export const Encomenda = styled.div`
    margin-top: 30px;

    >div{
        display: flex;
        justify-content: space-between;
        padding-top: 20px;
        padding-bottom: 20px;
        

        color: var(--tertiary);

        p{
            span{
                i{
                    font-size: 25px;
                    margin-right: 10px;
                }
            }
        }
        
    }

`

export const Container = styled.div`
    box-shadow: 0px 4px 5px 1px rgba(0, 0, 0, 0.1);
    background-color: var(--primary);
    border-radius: 5px;
    padding: 40px;
    overflow: hidden;

    >h1{
        font-size: 20px;
        color: var(--tertiary);
    }

    >ul{
        margin-top: 30px;
        list-style-type: none;
        color: var(--tertiary);

        >li{
            padding-top: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid var(--secundary);
        }
    }
    
`