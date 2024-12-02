import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter4 from "../assets/img/circular_progress_70.png"
import meter5 from "../assets/img/circular_progress_65.png"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

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

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I possess a diverse skill set encompassing both technical and soft skills. My programming expertise includes Kotlin, C#, and SQL, and Java complemented by web development experience with HTML, CSS, React, JavaScript, and Node.js. I excel in data analytics through data visualization, statistical analysis, and data cleansing, as well as database management with MongoDB, MySQL, Excel and Oracle. My proficiency in UI/UX design involves prototyping, wireframing, and user research with the use of Figma, while my project management capabilities are rooted in Agile methodologies, Scrum, and effective time management. Additionally, I am adept with tools such as Firebase, Git, Visual Studio, Visual Studio Code, and Android Studio, and I thrive on problem-solving, teamwork, adaptability, and critical thinking to tackle complex challenges.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>Data Analytics</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Android Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>Database Management</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>UI/UX Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Project Management</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
