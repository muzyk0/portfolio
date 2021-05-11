import React from 'react';
import styled from 'styled-components';
import {StyleContainer} from '../common/Styles/Container';
import Title from '../common/Components/Title/Title';
import {Button} from '../common/Button/Button';
import {Link} from '../common/Link/Link';

const AboutMeSection = styled.section`
  padding: 4.5rem 0;
  overflow: hidden;
`;
const AboutMeWrapper = styled(StyleContainer)`
  flex-direction: column;
  justify-content: flex-start;
`;
const Profile = styled.div`
  width: 100%;
  border: 1px solid;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const AboutMeDescription = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
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
const AboutMeProfile = styled.div`
  color: rgba(255, 255, 255, .5);
  line-height: 1.8;
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 3rem;
  padding-right: 15px;
  padding-left: 15px;
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

const AboutMe = () => {

    return (
        <AboutMeSection>
            <AboutMeWrapper>
                <Title subTitle={'Know Me More'} title={'About me'}/>

                <Profile>
                    <AboutMeDescription>
                        <SubTitle>
                            I'm <SubTitleSpan className="text-primary">Vladislav Muzyka, </SubTitleSpan>
                            a Front-End Developer
                        </SubTitle>
                        <Paragraph className="text-white-50">
                            I help you build brand for your business at an affordable price.
                            Thousands of clients have procured exceptional results while working with our dedicated
                            team. when an unknown printer took a galley of type and scrambled it to make a type specimen
                            book.
                        </Paragraph>
                        <Paragraph className="text-white-50">
                            Delivering work within time and budget which meets client’s
                            requirements is our moto. Lisque persius interesset his et, in quot quidam persequeris vim,
                            ad mea essent possim iriure. Lorem Ipsum has been the industry's standard dummy text ever
                            when an unknown printer took a galley. Lisque persius interesset in quot quidam possim
                            iriure.
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
                            <Button as="a" href="#" className="btn btn-primary rounded-pill">Download CV</Button>
                        </AboutMeCV>
                    </AboutMeProfile>
                </Profile>

            </AboutMeWrapper>
        </AboutMeSection>
    );
};
export default AboutMe