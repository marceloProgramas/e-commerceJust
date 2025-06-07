import styled from "styled-components"

export const Card = styled.div`
    background-color:hsl(195, 53.30%, 79.00%);
    width: fit-content;
    
    margin-inline: auto;
    margin-block: 2rem;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    cursor: pointer;
`

export const Title = styled.h3`
    font-size: 5rem;
`

export const Price = styled.p`
    font-size: 1.5rem;

`

export const Img = styled.img`
    max-width:30rem;
`