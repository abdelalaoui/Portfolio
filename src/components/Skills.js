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
                                Skills
                            </h2>
                            <p></p>
                            <div className="skill-slider">
                                <div className="item">
                                    <img src="https://images-ext-1.discordapp.net/external/MIwQTfo1j9eTzkXLkoTFUJWAMKhpvzHe8usoY_V1n98/https/cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png?width=936&height=936" alt="Image"/>
                                    <h5>React</h5>
                                </div>

                                <div className="item">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"/>
                                    <h5>JavaScript</h5>
                                </div>

                                <div className="item">
                                    <img src="https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png"/>
                                    <h5>Python</h5>
                                </div>

                                <div className="item">
                                    <img src="https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png"/>
                                    <h5>Java</h5>
                                </div>

                                <div className="item">
                                    <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png"/>
                                    <h5>MySql</h5>
                                </div>

                                
                                <div className="item">
                                    <img src="https://static-00.iconduck.com/assets.00/docker-icon-2048x1753-uguk29a7.png"/>
                                    <h5>Docker</h5>
                                </div>

                                <div className="item">
                                    <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"/>
                                    <h5>Git</h5>
                                </div>

                                <div className="item">
                                    <img src="https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png"/>
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