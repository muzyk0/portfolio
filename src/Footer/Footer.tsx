import React from 'react';
import styled from 'styled-components';
import {StyleContainer} from '../common/Styles/Container';
import {Link} from '../common/Link/Link';

const FooterStyled = styled.footer`
  color: rgba(250, 250, 250, 0.8);
  padding: 4.125rem 0;
  background-color: #212529
`
const FooterWrapper = styled(StyleContainer)`
  align-items: center;
  flex-direction: column;`
// const SocialNetworkList = styled.ul`
//   width: 280px;
//   display: flex;
//   justify-content: space-between;
//   list-style: none;
//   margin: 0;
//   padding: 0;
//   border: 1px solid;
// `
// const LinkSocialNetwork = styled.li`
//   width: 40px;
//   height: 40px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #6da8ee;
// `

export const Footer = () => {

    const socialNetwork = [
        {id: 1, title: 'in', link: ''},
        {id: 2, title: 'vk', link: ''},
        {id: 3, title: 'tg', link: ''},
        {id: 5, title: 'fb', link: ''},
    ]

    return (
        // <FooterStyled>
        //     <FooterWrapper>
        //         <a href="/">
        //             <h3>Vladislav Muzyka</h3>
        //         </a>
        //         <SocialNetworkList>
        //             {socialNetwork.map(link => (
        //                 <LinkSocialNetwork>{link.title}</LinkSocialNetwork>
        //             ))}
        //         </SocialNetworkList>
        //
        //         <p>
        //             © 2021 muzyk0, All Rights Reserved.
        //         </p>
        //
        //     </FooterWrapper>
        // </FooterStyled>

        <FooterStyled>
            <FooterWrapper>
                <p>Copyright © 2021 <Link href="#">Muzyk0</Link>. All Rights Reserved</p>
            </FooterWrapper>
        </FooterStyled>


    )
}