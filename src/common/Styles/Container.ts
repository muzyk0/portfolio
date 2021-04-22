import styled from 'styled-components';

interface StyledPropsType {
    justify?: string
    align?: string
}

export const StyleContainer = styled.div<StyledPropsType>`
  border: 1px solid black;
  height: 100%;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => props.justify ? props.justify : 'space-between'};
  align-items: ${props => props.align ? props.align : 'center'};;
`
