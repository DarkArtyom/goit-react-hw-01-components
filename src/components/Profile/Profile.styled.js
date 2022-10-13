import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
  width: 180px;
  height: 230px;
  border: 1px solid black;
  box-shadow: 10px 10px 10px black;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const ImgWrap = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const ImgAvatar = styled.img`
  width: 70px;
  height: 70px;
  margin-top: 20px;
  display: block;
  margin-bottom: 5px;
`;

export const Name = styled.h2`
font-weight: bold;
font-size: 16px;
margin-bottom: 10px;
`

export const Text = styled.p`
font-size: 14px;
margin-bottom: 10px;
`
export const StatList = styled.ul`
display: flex;
justify-content: space-around;
// margin-top: 22px;
padding: 10px; 
border-top: 1px solid black;
background-color: lightgrey;
border-radius: 3px;
`
export const StatItem = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const ItemStats = styled.span`
  font-size: 12px;
  color: black;
  font-weight: bold;
`
