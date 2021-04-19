import React from 'react';
import {Link} from '../common/Button/Link';
import styled from 'styled-components';
import {StyleContainer} from '../common/Styles/Container';

const ContactsStyled = styled.div`
  background-color: bisque;
`

const ContactWrapper = styled(StyleContainer)`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 10px;
`
const Title = styled.h2`
  background-color: aliceblue;
`
const Form = styled.form`
  border: 1px solid;
  display: flex;
  flex-direction: column;
  width: 250px;
  padding-bottom: 20px;
`

export const Contacts = () => {
    return (
        <ContactsStyled>
            <ContactWrapper>
                <Title>Contacts</Title>
                <Form>
                    <label>email</label>
                    <input type="text"/>

                    <label>email</label>
                    <input type="text"/>

                    <label>Your message</label>
                    <textarea/>

                </Form>
                <Link href={'#'}>Submit</Link>
            </ContactWrapper>
        </ContactsStyled>
    )
}