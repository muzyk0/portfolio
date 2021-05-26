import React from 'react';
import styled, {keyframes} from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';

const Scroll = styled.a`
  position: absolute;
  z-index: 3;
  bottom: 20px;
  left: 50%;
  margin-left: -16px;
  width: 32px;
  height: 32px;
  line-height: 32px;
  font-size: 20px;
  text-align: center;
`
const fadeInDown = keyframes`
  0% {
    top: -25px;
    opacity: 0;
  }
  100% {
    top: 10px;
    opacity: 1;
  }

`;

export const Animation = styled.span`
  position: relative;
  animation: ${fadeInDown} 1.5s infinite;
`
export const Icon = styled.i`
  position: relative;
  animation: ${fadeInDown} 1.5s infinite;
`

const ScrollBtn = () => {
    return (
        <Scroll className="scroll-down-arrow text-white smooth-scroll">
            <Animation className="animated">
                <Icon className="fa fa-chevron-down">
                    <FontAwesomeIcon icon={faChevronDown}/>
                </Icon>
            </Animation>
        </Scroll>
    );
};

export default ScrollBtn;