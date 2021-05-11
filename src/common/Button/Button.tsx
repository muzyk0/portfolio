import styled, {css} from 'styled-components';

enum VARIANT {
    PRIMARY,
    SECONDARY
}

interface IProps {
    variant?: VARIANT
}

// const tone = compose( desaturate(0.3))

export const Button = styled.button<IProps>`
  display: inline-block;
  padding: 0.8rem 2.6rem;
  font-weight: 500;
  border: 2px solid;
  text-decoration: none;
  border-radius: ${props => props.theme.borderRadius};
  
  ${props => {
    switch (props.variant) {
      case VARIANT.SECONDARY: {
        const {main, contrastText, hover} = props.theme.palette.secondary
        return css`
          color: ${contrastText};
          background-color: ${main};
          border-color: ${main};
          &:hover {
            background-color: ${hover.main};
            border-color: ${hover.main};
          }
        `;
      }
      case VARIANT.PRIMARY:
      default: {
        const {main, contrastText, hover} = props.theme.palette.primary
        return css`
          color: ${contrastText};
          background-color: ${main};
          border-color: ${main};
          &:hover {
            background-color: ${hover.main};
            border-color: ${hover.main};
          }
        `;
      }
    }
  }}
  &:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  &:hover {

    box-shadow: 0 5px 15px rgb(0 0 0 / 30%);
    transition: all 0.5s ease;
  }
`;