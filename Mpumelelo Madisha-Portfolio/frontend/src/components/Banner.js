import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/IMG-20240520-WA0018-modified.png";
import mongo from "../assets/img/c#.jpg"
import mysql from "../assets/img/express.jpg"
import oracle from "../assets/img/react.jpg"
import excel from "../assets/img/excel.webp"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Developer", "Data Analyst", "UI/UX Designer" , "Project Manager"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Mpumelelo, a `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Developer", "Data Analyst", "UI/UX Designer", "Project Manager" ]'><span className="wrap">{text}</span></span></h1>
                <p>
                    I am a dedicated young professional with a recently
                    completed Bachelor of Computer and Information Sciences in
                    Application Development, driven by a passion for technology
                    and innovation. My academic journey has equipped me with a
                    strong foundation in software development, data analytics,
                    UX/UI design, and project management, enabling me to
                    approach challenges with both technical expertise and
                    creative problem-solving skills.
                  </p>
                  <p>
                    I am particularly interested in exploring the intersection
                    of data analytics and software development, leveraging
                    data-driven insights to create impactful, user-centric
                    solutions. My proficiency in UX/UI design empowers me to
                    craft intuitive and visually engaging interfaces that
                    enhance user experiences, while my background in project
                    management allows me to effectively plan, execute, and
                    deliver projects within scope and time.
                  </p>
                  <p>
                    As I embark on the next phase of my career, I am eager to
                    contribute to innovative projects, collaborate with
                    cross-functional teams, and continually expand my skill
                    set. I thrive in dynamic environments where I can apply my
                    knowledge, learn from industry experts, and make meaningful
                    contributions to both my team and the organization.
                  </p>
                  
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"  style={{ width: "535px", height: "auto" }}/>
                </div>}
                
            </TrackVisibility>
             </Col>
        </Row>
      </Container>
    </section>
  )
}
