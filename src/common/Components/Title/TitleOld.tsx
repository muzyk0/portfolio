import styled from 'styled-components'
import React from 'react';

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  text-transform: capitalize;
  letter-spacing: 1px;
  word-spacing: 3px;
  position: relative;

  &:after {
    content: '';
    width: 100px;
    height: 1px;
    background: #4bffa5;
    position: absolute;
    bottom: -20px;
  }
`
const TitleStyled = styled.h2`
  color: #4bffa5;
  font-size: 46px;
  margin: 0 0 25px;
`
const TitleSpan = styled.span`
  color: #262728;
  font-weight: 200;
`
const SubTitle = styled.p`
  margin: 0;
  font-size: 17px;
  line-height: 27px;
`
type Props = {
    title: string
    subTitle: string
    description?: string
}

const TitleOld: React.FC<Props> = props => {
    const {title, subTitle, description} = props

    return (

        <TitleWrapper>
            <TitleStyled>
                {title}
                <SubTitle>{description}</SubTitle>
            </TitleStyled>
        </TitleWrapper>

    );
};
export default TitleOld