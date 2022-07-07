/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { AccordionBody, AccordionHeader, AccordionItem, Card, Col, Row, UncontrolledAccordion } from 'reactstrap'

const BiographyAccordion = ({membersData}) => {
    
    return (
        <>
            {membersData.map(member => {
                return (
                    <Card key={member.id} className='bg-secondary mt-2 col-md-7'>
                        <Row>
                            <Col md='3'>
                                <h1 className="text-primary text-center card-title">
                                    {member.memberName}
                                </h1>
                                <img src={member.image} alt={member.memberName} height='275px' width='auto'  className='rounded-circle d-none d-md-block position-relative' style={{top:'0px', left:'25px'}}/>
                            </Col>

                            <Col md='9' className='bg-success'>
                                <UncontrolledAccordion defaultOpen="3">
                                    
                                    <AccordionItem>
                                        <AccordionHeader targetId="1">
                                            <h4><strong>Biography</strong></h4>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="1">
                                            <ul className="list-group text-center">
                                                <li className="list-group-item">
                                                    <strong>Stage Name:</strong> {member.biography.stageName}
                                                </li>
                                                <li className="list-group-item">
                                                    <strong>Birth Name:</strong> {member.biography.birthName}
                                                </li>
                                                <li className="list-group-item">
                                                    <strong>Nicknames:</strong> {member.biography.nicknames}
                                                </li>
                                                <li className="list-group-item">
                                                    <strong>Position:</strong> {member.biography.position}
                                                </li>
                                                <li className="list-group-item">
                                                    <strong>Birthday:</strong> {member.biography.birthday}
                                                </li>
                                                <li className="list-group-item">
                                                    <strong>Zodiac Sign:</strong> {member.biography.zodiacSign}
                                                </li>
                                                <li className="list-group-item">
                                                    <strong>Birthplace:</strong> {member.biography.birthplace}
                                                </li>
                                                <li className="list-group-item">
                                                    <strong>Height:</strong> {member.biography.height}
                                                </li>
                                                <li className="list-group-item">
                                                    <strong>Weight:</strong> {member.biography.weight}
                                                </li>
                                                <li className="list-group-item">
                                                    <strong>Blood Type:</strong> {member.biography.bloodType}
                                                </li>
                                                <li className="list-group-item">
                                                    <strong>MBTI Type:</strong> {member.biography.mbti}
                                                </li>
                                            </ul>
                                        </AccordionBody>
                                    </AccordionItem>
                                    
                                    <AccordionItem>
                                        <AccordionHeader targetId="2">
                                            <h4><strong>Interesting Facts About {member.memberName}</strong></h4>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="2">
                                            <ul className="list-group text-center">
                                                {member.interestingFacts.map(fact => {
                                                    return <li className='list-group-item'key={fact.id}>{fact.fact}</li>
                                                })}
                                            </ul>
                                        </AccordionBody>
                                    </AccordionItem>
    
                                    <AccordionItem>
                                        <AccordionHeader targetId="3">
                                            <h4><strong>Social Media</strong></h4>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="3" >
                                            <Row >
                                                <Col xs='3'>
                                                    <a href={member.socialMedia[0].link} target="_blank" rel="noreferrer">
                                                        <Image width="100px" height="100px" src="/logos/weibo_pink.webp" alt='pink weibo logo'className="bg-primary"
                                                        />
                                                    </a>
                                                </Col>
                                                <Col xs='3'>
                                                    <a href={member.socialMedia[1].link} target="_blank" rel="noreferrer">
                                                        <Image width="100px" height="100px" src="/logos/instagram_pink.webp" alt='pink instagram logo'className="bg-primary"/>
                                                    </a>
                                                </Col>
                                                <Col xs='3'>
                                                    <a href={member.socialMedia[2].link} target="_blank" rel="noreferrer">
                                                        <Image width="100px" height="100px" src="/logos/twitter_pink.webp" alt='pink twitter logo'className="bg-primary"/>
                                                    </a>
                                                </Col>
                                                <Col xs='3'>
                                                    <a href={member.socialMedia[3].link} target="_blank" rel="noreferrer">
                                                        <Image width="100px" height="100px" src="/logos/youtube_pink.webp" alt='pink youtube logo'className="bg-primary"/>
                                                    </a>
                                                </Col>
                                            </Row>    
                                        </AccordionBody>
                                    </AccordionItem>

                                </UncontrolledAccordion>

                            </Col>
                        </Row>

                    </Card>
                )
            })}
        </>
    )
}

export default BiographyAccordion;