import React from 'react';
import styled from 'styled-components';
import {StyleContainer} from '../common/Styles/Container';
import Title from '../common/Components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTelegram} from '@fortawesome/free-brands-svg-icons';
import {faMailBulk} from '@fortawesome/free-solid-svg-icons';
import {Button} from '../common/Button/Button';
import {useFormik} from 'formik';
import {api, FormData} from '../dal/Api';


const Section = styled.section`
  background-color: #343a40;
`;
const ContactsWrapper = styled(StyleContainer)`
  background-color: #343a40;
  flex-direction: column;
  justify-content: flex-start;
`;
const Contact = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: flex-start;
`;
const ContactsMe = styled.div`
  flex: 1 1 200px;

  line-height: 1.8;
  margin-bottom: 1rem;
  padding-right: 15px;
  padding-left: 15px;
  @media screen and (max-width: 868px) {
    margin-top: 3rem;
  }
`;
const ContactsForm = styled.div`
  flex: 2 1 600px;
  display: flex;
  flex-direction: column;

`;
const SubTitle = styled.h2`
  font-size: 1.3125rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;
const Paragraph = styled.span`
  color: rgba(255, 255, 255, .5);
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;
const List = styled.ul`
  list-style: none;
  padding: 10px 0;
  margin-bottom: 1rem;
`;
const ListElement = styled.li`
  color: rgba(255, 255, 255, .5);
  list-style-type: none;
`;
const Form = styled.form`
  color: #4c4d4d;

  p {
    text-align: center;
  }
`
const InputBlock = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`
const InputWrapper = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  margin-bottom: 1rem;
`
const InputInner = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  padding: 0 15px;
`
const Input = styled.input`
  background: #232a31;
  color: #fff;
  border: 1px solid #232a31;
  outline: none;
  border-radius: .25rem;
  display: block;
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  padding: .810rem .96rem;
  height: inherit;
  //transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;

  &:focus {
    border-color: #80bdff;
    box-shadow: 0 0 5px rgba(128, 189, 255, 0.5);
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill,
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: #fff;
    -webkit-box-shadow: 0 0 0 1000px #232a31 inset;
    transition: background-color 5000s ease-in-out 0s;
    background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 0%, rgba(0, 174, 255, 0.04) 50%, rgba(255, 255, 255, 0) 51%, rgba(0, 174, 255, 0.03) 100%);
  }

`;
const TextareaWrapper = styled(InputWrapper)`
  max-width: 100%;
`;


const Contacts = () => {
    const styleIcon = {
        fontSize: '20px',
        color: '#20c997'
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        } as FormData,
        onSubmit: async values => {
            await api.sendMessage(values)
        },
    })

    return (
        <Section>
            <ContactsWrapper>
                <Title title={'Contact'} subTitle={'Get in Touch'}/>

                <Contact>
                    <ContactsMe>
                        <SubTitle>
                            ADDRESS
                        </SubTitle>
                        <Paragraph>
                            Russia, Cheboksary
                        </Paragraph>
                        <List>
                            <ListElement>
                                <FontAwesomeIcon style={styleIcon} icon={faTelegram}/> +7 (999) 199 05 90
                            </ListElement>
                            <ListElement>
                                <FontAwesomeIcon style={styleIcon} icon={faMailBulk}/> ru9art@gmail.com
                            </ListElement>
                        </List>
                    </ContactsMe>

                    <ContactsForm>
                        <SubTitle>
                            send me
                        </SubTitle>

                        <Form id="contact-form" onSubmit={formik.handleSubmit}>
                            <InputBlock>
                                <InputWrapper>
                                    <InputInner>
                                        <Input
                                            type="text"
                                            placeholder="Name"
                                            {...formik.getFieldProps('name')}
                                        />
                                    </InputInner>
                                </InputWrapper>
                                <InputWrapper>
                                    <InputInner>
                                        <Input
                                            type="email"
                                            placeholder="Email"
                                            {...formik.getFieldProps('email')}
                                        />
                                    </InputInner>
                                </InputWrapper>
                            </InputBlock>
                            <TextareaWrapper>
                                <Input as={'textarea'}
                                       rows={5}
                                       placeholder="Tell us more about your needs........"
                                       {...formik.getFieldProps('message')}
                                />
                            </TextareaWrapper>
                            <p className="text-center mt-4 mb-0">
                                <Button
                                    id="submit-btn"
                                    type="submit"
                                >
                                    Send Message
                                </Button>
                            </p>
                        </Form>
                    </ContactsForm>
                </Contact>

            </ContactsWrapper>
        </Section>
    );
};
export default Contacts
