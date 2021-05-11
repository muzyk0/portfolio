import styled from 'styled-components';

const TitleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #6c757d;
  margin-bottom: 3rem;
`
const TitleStyled = styled.h2`
  font-family: "Poppins", sans-serif;
  line-height: 1.3;
  font-weight: 600;
  font-size: 8.25rem;
  opacity: 0.1;
  user-select: none;
  @media (max-width: 1200px) {
    font-size: calc(1.95rem + 8.4vw)
  };
`
const SubTitle = styled.p`
  display: flex;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  font-size: 2.25rem;
  position: absolute;
  &:after {
    content: '';
    width: 80px;
    height: 2px;
    background: #20c997;
    position: absolute;
    bottom: -20px;
  }
`
type Props = {
    title: string
    subTitle: string
    description?: string
}

const Title: React.FC<Props> = props => {
    const {title, subTitle, description} = props

    return (

        <TitleWrapper>
            <TitleStyled>{title}</TitleStyled>
            <SubTitle>{subTitle}</SubTitle>
        </TitleWrapper>

    );
};
export default Title