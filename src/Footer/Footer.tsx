import React from 'react';
import styled from 'styled-components';
import {StyleContainer} from '../common/Styles/Container';

const FooterStyled = styled.footer`
  background-color: chocolate;
`
const FooterWrapper = styled(StyleContainer)`
  align-items: center;
  flex-direction: column;`
const SocialNetworkList = styled.ul`
  width: 280px;
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid;
`
const LinkSocialNetwork = styled.li`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6da8ee;
`

export const Footer = () => {

    const socialNetwork = [
        {id: 1, title: 'in', link: ''},
        {id: 2, title: 'vk', link: ''},
        {id: 3, title: 'tg', link: ''},
        {id: 5, title: 'fb', link: ''},
    ]

    return (
        <FooterStyled>
            <FooterWrapper>
                <a href="/">
                    <h3>Vladislav Muzyka</h3>
                </a>
                <SocialNetworkList>
                    {socialNetwork.map(link => (
                        <LinkSocialNetwork>{link.title}</LinkSocialNetwork>
                    ))}
                </SocialNetworkList>

                <p>
                    © 2021 muzyk0, All Rights Reserved.
                </p>

            </FooterWrapper>
        </FooterStyled>
    )
}