import React from 'react';
import styled from 'styled-components';
import {StyleContainer} from '../common/Styles/Container';
import Title from '../common/Components/Title/Title';
import {Button} from '../common/Button/Button';
import {Link} from '../common/Link/Link';
import ExperienceItemBox from './ExperienceItemBox';

const AboutMeSection = styled.section`
  overflow: hidden;
`;
const AboutMeWrapper = styled(StyleContainer)`
  flex-direction: column;
  justify-content: flex-start;
`;
const Profile = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: flex-start;
`;
const AboutMeDescription = styled.div`
  flex: 2 1 600px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const AboutMeProfile = styled.div`
  flex: 1 1 200px;
  color: rgba(255, 255, 255, .5);
  line-height: 1.8;
  margin-bottom: 1rem;
  padding-right: 15px;
  padding-left: 15px;
  @media screen and (max-width: 868px) {
    margin-top: 3rem;
  }
`;
const SubTitle = styled.div`
  font-size: 1.75rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 1rem;
`;
const SubTitleSpan = styled.span`
  color: #20c997;
`;
const Paragraph = styled.span`
  color: rgba(255, 255, 255, .5);
  line-height: 1.8;
  margin-bottom: 1rem;
`;
const AboutMeCV = styled.div`
  padding-left: 1.5rem
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
`;
const ListElement = styled.li`
  display: list-item;
  list-style-type: none;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #dee3e4;
  border-bottom: 1px solid rgba(250, 250, 250, 0.12);
  :nth-last-child(1) {
    border-bottom: none;
  }
`;
const ListElementSpan = styled.span`
  font-weight: 600;
  margin-right: .5rem;
`;

const SocialNetwork = styled.div`
  flex: 0 1 100%;
  margin-top: 3rem;
  overflow: hidden;
`
const Experience = styled.div`
  display: flex;
  flex-wrap: wrap;
`


const AboutMe = () => {

    return (
        <AboutMeSection>
            <AboutMeWrapper>
                <Title subTitle={'Know Me More'} title={'About me'}/>

                <Profile>
                    <AboutMeDescription>
                        <SubTitle>
                            I'm <SubTitleSpan>Vladislav Muzyka, </SubTitleSpan>
                            a Front-End Developer
                        </SubTitle>
                        <Paragraph>
                            I have experience with React,
                            Redux, TypeScript as the main
                            stack, and I want to develop in this
                            direction.
                            Now I am improving my skills in
                            this direction and expanding them
                            with new technologies.
                        </Paragraph>
                        <Paragraph>
                            I'm planning to study Node.js,
                            because my next focus is to
                            become a Full-Stack Developer.
                            And also I have interest to design.
                        </Paragraph>
                    </AboutMeDescription>
                    <AboutMeProfile>
                        <AboutMeCV>
                            <List>
                                <ListElement>
                                    <ListElementSpan>Name:</ListElementSpan>Vladislav Muzyka
                                </ListElement>
                                <ListElement>
                                    <ListElementSpan>Email:</ListElementSpan>
                                    <Link href="mailto:ru9art@gmail.com">ru9art@gmail.com</Link>
                                </ListElement>
                                <ListElement>
                                    <ListElementSpan>Age:</ListElementSpan>23
                                </ListElement>
                                <ListElement>
                                    <ListElementSpan>From:</ListElementSpan>Russia, Cheboksary
                                </ListElement>
                            </List>
                            <Button as="a" href="#">Download CV</Button>
                        </AboutMeCV>
                    </AboutMeProfile>
                    <SocialNetwork>
                        <Experience>
                            <ExperienceItemBox />
                            <ExperienceItemBox />
                            <ExperienceItemBox />
                            <ExperienceItemBox />
                        </Experience>
                    </SocialNetwork>
                </Profile>

            </AboutMeWrapper>
        </AboutMeSection>
    );
};
export default AboutMe
