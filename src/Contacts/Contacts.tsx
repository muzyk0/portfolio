import React from 'react';
import {Link, LinkStyle} from '../common/Button/Link';
import styled from 'styled-components';
import {StyleContainer} from '../common/Styles/Container';

const ContactsStyled = styled.div`
  background-color: bisque;
`

const ContactWrapper = styled(StyleContainer)`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 10px;
`
const Button = styled.button`
  text-decoration: none;
  display: inline-block;
  background-color: #fcd65d;
  color: #000;
  padding: 10px 20px;
  border-radius: 2px;
  border: none;
  outline: none;
  &:hover {
    background-color: #ffc700;
  }
`
const Title = styled.h2`
  background-color: aliceblue;
`
const Form = styled.form`
  border: 1px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding-bottom: 20px;
`

const Input = styled.input`
  width: 100%;
`
const Textarea = styled(Input)`
  width: 100%;
`

export const Contacts = () => {
    return (
        <ContactsStyled>
            <ContactWrapper>
                <Title>Contacts</Title>
                <Form>
                    <label>email</label>
                    <Input type="text"/>

                    <label>email</label>
                    <Input type="text"/>

                    <label>Your message</label>
                    <Textarea/>

                </Form>
                <Button type={'submit'}>Submit</Button>
            </ContactWrapper>
        </ContactsStyled>
    )
}