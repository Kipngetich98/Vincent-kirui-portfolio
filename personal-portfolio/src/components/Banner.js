import { useState, useEffect,useCallback,useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import VincentKirui from '../assets/img/VincentKirui.jpg'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = useMemo(() => ["Software Tester", "Software Engineer", "Machine Learning/Data Scientist"], []);
  const period = 2000;

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [isDeleting, loopNum, period, text,toRotate]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [delta, tick]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Vincent`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Software Engineer", "Data Scientist" ]'><span className="wrap">{text}</span></span></h1>
                  <p>As a versatile professional with a wide range of skills, I specialize in software engineering, data analysis, machine learning, and quality assurance. I have a passion for designing, documenting, and building API platforms and applications that scale. I also have experience in statistical modeling, data management, and developing CRUD applications and REST APIs. In addition, I am proficient in testing new features manually and writing automation tests using tools like Jest, Selenium, Mocha-Chai, and Cypress. I'm constantly exploring the latest technologies and have a keen interest in research and development. With strong interpersonal skills, effective communication, and high adaptability, I'm a valuable asset to any team I'm part of.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={10} md={3} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={VincentKirui} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}