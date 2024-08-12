import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import sws from '../../Assets/Projects/sws.png';
import sirius from '../../Assets/Projects/sirius.png';
import formLk from '../../Assets/Projects/form_lk3.jpg';
import lumina from '../../Assets/Projects/lumina.png';
import progress from '../../Assets/Projects/progress.jpg';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={10} className="project-card">
            <ProjectCard
              imgPath={formLk}
              isBlog={false}
              title="Пошаговая форма  заполнения"
              description="Форма заполнения для кликента по шагам и отправка всех данных по завершени, всерху имеется шкала индикатора прогресса."
              ghLink="https://github.com/Anatoliy-ya/test-task"
              demoLink="https://anatoliy-ya.github.io/test-task/"
            />
          </Col>

          <Col md={10} className="project-card">
            <ProjectCard
              imgPath={progress}
              isBlog={false}
              title="Progress Авто детали"
              description="Сайт визитка с описанием компании, с формой для обратной связи, каталогом товара и слайдер с категориями. "
              ghLink="https://github.com/Anatoliy-ya/Auto-details"
              demoLink="https://anatoliy-ya.github.io/Auto-details/"
            />
          </Col>

          <Col md={10} className="project-card">
            <ProjectCard
              imgPath={sirius}
              isBlog={false}
              title="Sirius Future"
              description="Интерактивная платформа онлайн школы Sirius Future.  "
              ghLink="https://github.com/Anatoliy-ya/test-sirius"
              demoLink="https://anatoliy-ya.github.io/test-sirius/"
            />
          </Col>

          <Col md={10} className="project-card">
            <ProjectCard
              imgPath={lumina}
              isBlog={false}
              title="LuminaLearn "
              description="В LuminaLearn мы верим, что образование - это ключ к раскрытию истинного потенциала человека. Наши тщательно подобранные курсы охватывают широкий спектр навыков и профессий, от технологий и бизнеса до творческих искусств и личностного развития. Каждый курс разработан отраслевыми экспертами, которые привносят в занятия реальный опыт и знания, гарантируя, что наши ученики получат практические, применимые знания, которые выделят их на конкурентном рынке труда."
              ghLink="https://github.com/Anatoliy-ya/lumina-learn"
              demoLink="https://anatoliy-ya.github.io/lumina-learn/"
            />
          </Col>

          <Col md={10} className="project-card">
            <ProjectCard
              imgPath={sws}
              isBlog={false}
              title="Таблица"
              description="Таблица для записей и расчетов работ, есть вложенность строк, все данные вносятся вручную и подсчитываются автоматически в первой строке."
              ghLink="https://github.com/Anatoliy-ya/test-sws"
              demoLink="https://anatoliy-ya.github.io/test-sws/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
