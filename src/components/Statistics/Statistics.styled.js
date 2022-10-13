import styled from 'styled-components';

export const Name = styled.h2`
font-weight: bold;
font-size: 16px;
margin-bottom: 10px;
`
export const StatisticsSection =styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const StatList = styled.ul`
display: flex;

border-top: 1px solid black;
background-color: lightgrey;
border-radius: 3px;
`
export const StatItem = styled.li`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
padding: 10px; 
background-color: ${()=> {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}` 
}} 
`