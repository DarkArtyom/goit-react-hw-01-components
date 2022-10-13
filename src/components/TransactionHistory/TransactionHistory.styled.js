import styled from 'styled-components';

export const TableHeader = styled.th`
background-color: green;
padding: 5px 15px;
`

export const TableItemList = styled.tr`
text-align: center;
background-color: greylight;
:nth-child(2n+1) { background-color: grey; }
`


export const TableItem = styled.td`
padding: 5px 35px;
`