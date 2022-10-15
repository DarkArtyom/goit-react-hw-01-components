import styled from 'styled-components';

export const List = styled.ul`
display: flex;
flex-direction: column;
margin-top: 20px
`

export const Item = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 5px 5px 5px black;
  border-radius: 5px;
  cursor: pointer;
`
export const Image = styled.img`
margin-right: 10px;`

export const StatusOnline = styled.span`
display: flex;
width: 5px;
height: 5px;
border: none;
border-radius: 5px;
margin-right: 10px;
background-color: ${props => {
return props.online ? "green" : 'red';
}}`