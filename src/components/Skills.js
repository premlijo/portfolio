import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import skill1 from "../assets/img/skill1.svg";
import skill2 from "../assets/img/skill2.svg";
import skill3 from "../assets/img/skill3.svg";
import skill4 from "../assets/img/skill4.svg";
import skill5 from "../assets/img/skill5.svg";
import skill6 from "../assets/img/skill6.svg";
import skill7 from "../assets/img/skill7.svg";
import skill8 from "../assets/img/skill8.svg";
import colorSharp from "../assets/img/skillsbg.jpg";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>
                                I am proficient in multiple programming languages such as Java, HTML, CSS, and JavaScript.
                                <br /> I have practical experience with frameworks and tools like React, Bootstrap, IntelliJ IDEA,
                                Eclipse, and VS Code, which I use to build efficient responsive web applications.
                                <br /> My knowledge of Git enables effective version control, while my understanding of Data Structures,
                                Algorithms, and OOP principles helps in solving complex coding problems.
                                <br /> Additionally, I am familiar with managing customer interactions and have experience working in
                                collaborative environments, focusing on problem-solving and process improvement.
                                <br /> Furthermore, my proficiency in both technical and soft skills, including communication and time
                                management, contributes to delivering successful projects on time.
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={skill1} alt="Java Programming Language" />
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <img src={skill2} alt="HTML" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={skill3} alt="CSS" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={skill4} alt="JavaScript" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={skill5} alt="Bootstrap" />
                                    <h5>Bootstrap</h5>
                                </div>
                                <div className="item">
                                    <img src={skill6} alt="React JS" />
                                    <h5>React JS</h5>
                                </div>
                                <div className="item">
                                    <img src={skill7} alt="Git" />
                                    <h5>Git</h5>
                                </div>
                                <div className="item">
                                    <img src={skill8} alt="GitHub" />
                                    <h5>GitHub</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Background" />
        </section>
    );
};
