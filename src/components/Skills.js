import image1 from "../assets/img/Reactlogo.png"
import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";



export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
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
      return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skillsx
                            </h2>
                            <p></p>
                            <div className="skill-slider">
                                <div className="item">
                                    <img src={image1}/>
                                    <h5>React</h5>
                                </div>

                                <div className="item">
                                    <img src="JavaScript.png"/>
                                    <h5>JavaScript</h5>
                                </div>

                                <div className="item">
                                    <img src="python.png"/>
                                    <h5>Python</h5>
                                </div>

                                <div className="item">
                                    <img src="Java-Logo.png"/>
                                    <h5>Java</h5>
                                </div>

                                <div className="item">
                                    <img src="mysql.png"/>
                                    <h5>MySql</h5>
                                </div>

                                
                                <div className="item">
                                    <img src="dockerlogo.png"/>
                                    <h5>Docker</h5>
                                </div>

                                <div className="item">
                                    <img src="Git.png"/>
                                    <h5>Git</h5>
                                </div>

                                <div className="item">
                                    <img src="Cpp.png"/>
                                    <h5>C++</h5>
                                </div>
                                
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </section>
      )

}