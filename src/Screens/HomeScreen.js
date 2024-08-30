import React from 'react';
import { Carousel,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';


const HomeScreen = () => {
  return (
    <>
      <div>
        <marquee> VTU Results 2024 Out - Check Exam Result Here!!!
          <Link to="/result/loginpage" > Click Here...</Link> Best Luck !
        </marquee>
      </div>
      
      <div>

      
        <Carousel>
          <Carousel.Item>
          
            <img
              className="d-block w-100"
              src="image/img1.jpg"
              alt="Second slide"
            /> 
          </Carousel.Item>
          
          
          <Carousel.Item>
           
            <img
              className="d-block w-100"
              src="image/img2.jpg"
              alt="Third slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="image/img3.jpg"
              alt="Third slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="image/img4.jpg"
              alt="Third slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="image/img5.jpg"
              alt="Third slide"
            />
          </Carousel.Item>

        </Carousel>
        
      </div>
      

      <br/>

      <div>
        <Row>
          <Col>
            <h3><Link to="/about">Vision</Link></h3>
            <p class="home-para-style">
              VTU stands as one of India's most prominent Technological Universities, boasting a rich 24-year legacy of excellence 
              in Engineering, Technical Education, Research, and Innovations. Established in 1998, its primary mission was to address
               the growing demand of Indian industries for skilled technical professionals equipped with both practical expertise and 
               solid theoretical foundations.<br/>
              Over the years, the University has remarkably accomplished the formidable feat of unifying previously affiliated colleges 
              from diverse Universities, each characterized by distinct syllabi, procedures, and traditions. This consolidation has 
              brought together a diverse array of institutions under a single banner, fostering greater cohesion and uniformity.
            </p>
             {/* <Button varient="warning"  >Read more</Button>  */}
             <Link to='/about' class='btn btn warning' style={{backgroundColor:"blue",color:"white",width:"100px"}} >
            Read more</Link> 
          </Col>

          <Col>
            <h3><Link to="/about">Mission</Link></h3>
            <p class="home-para-style">
              VTU stands as one of India's most prominent Technological Universities, boasting a rich 24-year legacy of excellence 
              in Engineering, Technical Education, Research, and Innovations. Established in 1998, its primary mission was to address
               the growing demand of Indian industries for skilled technical professionals equipped with both practical expertise and 
               solid theoretical foundations.<br/>
              Over the years, the University has remarkably accomplished the formidable feat of unifying previously affiliated colleges 
              from diverse Universities, each characterized by distinct syllabi, procedures, and traditions. This consolidation has 
              brought together a diverse array of institutions under a single banner, fostering greater cohesion and uniformity.
            </p>
             {/* <Button varient="warning">Read more</Button>  */}
            <Link to='/about' class='btn btn warning' style={{backgroundColor:"blue",color:"white",width:"100px"}} >
            Read more</Link> 
          </Col>

          <Col>
            <h3><Link to="/about">Mandate</Link></h3>
            <p class="home-para-style">
              VTU stands as one of India's most prominent Technological Universities, boasting a rich 24-year legacy of excellence 
              in Engineering, Technical Education, Research, and Innovations. Established in 1998, its primary mission was to address
               the growing demand of Indian industries for skilled technical professionals equipped with both practical expertise and 
               solid theoretical foundations.<br/>
              Over the years, the University has remarkably accomplished the formidable feat of unifying previously affiliated colleges 
              from diverse Universities, each characterized by distinct syllabi, procedures, and traditions. This consolidation has 
              brought together a diverse array of institutions under a single banner, fostering greater cohesion and uniformity.
            </p>
             {/* <Button varient="warning">Read more</Button>  */}
            <Link to='/about' class='btn btn warning' style={{backgroundColor:"blue",color:"white",width:"100px"}} >
            Read more
              </Link> 
          </Col>
        </Row>
      </div>



    </>
  )
}

export default HomeScreen
