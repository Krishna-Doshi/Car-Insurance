import React from "react";
// import {
//     Box,
//     FooterContainer,
//     Row,
//     Column,
//     FooterLink,
//     Heading,
// } from "./FooterStyle";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { Box } from "./FooterStyle";
// import {
//     FiGithub,
//     FiTwitter,
//     FiLinkedin,
//     FiGlobe,
//     FiYoutube,
//   } from "react-icons/fi";
 
//   const socialLinks = [
//     {
//       id: 1,
//       icon: <FiGlobe />,
//       url: "https://www.stoman.me/",
//     },
//     {
//       id: 2,
//       icon: <FiGithub />,
//       url: "https://github.com/",
//     },
//     {
//       id: 3,
//       icon: <FiTwitter />,
//       url: "https://twitter.com/",
//     },
//     {
//       id: 4,
//       icon: <FiLinkedin />,
//       url: "https://www.linkedin.com/in/",
//     },
   
//   ];

export function Footer () {
    return (
        <Box>
            <h1
                style={{
                    color: "green",
                    textAlign: "center",
                    marginTop: "10px",
                }}
            >
                Get Your Car Insurance Now!
            </h1>
            <Container>
                <Row>
                    <Col>
                        <h4>About Us</h4>
                            <LinkContainer to="/">
                                <Link>About My Car App</Link>
                            </LinkContainer>
                            <LinkContainer to="/team">
                                <Link>The Team</Link>
                            </LinkContainer>
                            <LinkContainer to="/report">
                                <Link>General Report</Link>
                            </LinkContainer>
                    </Col>
                    <Col>
                        <h4>Get In Touch</h4>
                            <LinkContainer to="/contact">
                                <Link>Contact Us</Link>
                            </LinkContainer>
                            <LinkContainer to="/feedback">
                                <Link>Feedback</Link>
                            </LinkContainer>
                            <LinkContainer to="/locate">
                                <Link>Locate Us</Link>
                            </LinkContainer>
                    </Col>
                    <Col>
                        <h4>Support</h4>
                             <LinkContainer to="/policy">
                                <Link> Download Policy Copy</Link>
                            </LinkContainer>
                            <LinkContainer to="/garage">
                                <Link> Garage Locator</Link>
                            </LinkContainer>
                            <LinkContainer to="/reminder">
                                <Link> Renewal Reminder</Link>
                            </LinkContainer>
                    </Col>
                    <Col>
                    <h4>Resources</h4>
                             <LinkContainer to="/faq">
                                <Link> FAQs</Link>
                            </LinkContainer>
                            <LinkContainer to="/blog">
                                <Link> Blog</Link>
                            </LinkContainer>
                            <LinkContainer to="/help-center">
                                <Link> Help Center</Link>
                            </LinkContainer>
                        </Col>   
                </Row>
                <Row>
                            <LinkContainer to="/help-center">
                                <Link><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                                    </svg></Link>
                            </LinkContainer>
                            <LinkContainer to="/help-center">
                                <Link><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15"/>
                                    </svg></Link>
                            </LinkContainer>
                            <LinkContainer to="/help-center">
                                <Link><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                    </svg></Link>
                            </LinkContainer>


                </Row>
            </Container> 
        </Box>
    );
};