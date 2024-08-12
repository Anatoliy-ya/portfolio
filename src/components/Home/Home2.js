import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/avatar.svg';
import Tilt from 'react-parallax-tilt';
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';
import Techstack from './Techstack';

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: '2.6em' }}>
              ПОЗВОЛЬТЕ <span className="purple"> ПРЕДСТАВИТЬСЯ </span>
            </h1>
            <p className="home-about-body">
              Я программист, специализируюсь на фронтенд-разработке и современных библиотеках, таких
              как
              <i>
                <b className="purple"> React. </b>
              </i>
              <br />
              <br />
              Кроме того, у меня есть опыт работы с бэкендом, где я активно использую
              <i>
                <b className="purple"> Nest.js. </b>
              </i>
              <br />
              <br />
              Мои интересы сосредоточены на создании и развитии
              <i>
                <b className="purple"> современных веб-технологий и продуктов, </b>
              </i>
              а также на реализации fullstack проектов.
              <br />
              <br />
              Когда возможно, я использую свои знания для разработки приложений с помощью{' '}
              <b className="purple">Node.js</b> и
              <i>
                <b className="purple"> React.js</b>
              </i>
              &nbsp;в сочетании с
              <i>
                <b className="purple"> передовыми библиотеками и фреймворками.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 style={{ color: 'while' }}>Технологии, которые я использую</h2>
            <Techstack />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Найди меня </h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Anatoliy-ya?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons">
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://t.me/etoya250"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons">
                  <FaTelegram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons">
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
