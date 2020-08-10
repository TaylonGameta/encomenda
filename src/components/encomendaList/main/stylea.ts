import styled from 'styled-components'

export const Item = styled.button`

    margin-top: 40px;
    height: 150px;
    padding: 20px;
    border-radius: 5px;
    width: 100%;
    background-color: white;
    box-shadow: 0px 4px 5px 1px rgba(0, 0, 0, 0.1);

    display: flex;
    align-items: center;

    &:hover{
        cursor: pointer;
        background-color: #f7f7f7;
    }
    >div{
        >h3{
            text-align: start;
            margin-left: 20px;
            color: var(--tertiary);
        }
        >p{
            margin-left: 10px;
            padding: 10px;
            color: var(--tertiary);
        }
        >i{
            border-right: 1px solid var(--tertiary);
            padding-right: 10px;
            font-size: 48px;
            color: var(--tertiary);
        }
    }
    
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding : 40px;
    width: 100%;
    overflow: scroll;

    >h1{
        margin-bottom: 40px;
        color: var(--tertiary);
        font-size: 22px;
    }

    
`