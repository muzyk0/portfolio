import styled from 'styled-components';

interface StyledPropsType {
    direction?: string
    justify?: string
    align?: string
}

export const StyleContainer = styled.div<StyledPropsType>`
  
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => props.justify ? props.direction : 'row'};
  justify-content: ${props => props.justify ? props.justify : 'space-between'};
  align-items: ${props => props.align ? props.align : 'center'};
  @media (min-width: 1200px) {
      max-width: 1170px !important;
    }
  }
`
