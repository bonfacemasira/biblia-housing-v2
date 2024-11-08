import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaPlay } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import { useState } from "react";
function AboutUsStyleOne({ sectionSpace }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="X7R-q9rsrtU"
        onClose={() => setOpen(false)}
      />
      <div className={`ltn__about-us-area ${sectionSpace}`}>
        <Container>
          <Row>
            <Col xs={12} lg={6} className="align-self-center">
              <div className="about-us-img-wrap about-img-left">
                <img src="/img/Land Project Photos 203.jpg" alt="About Us Image" />
              </div>
            </Col>
            <Col xs={12} lg={6} className="align-self-center">
              <div className="about-us-info-wrap">
                <div className="section-title-area mb-20">
                  <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                    About Us
                  </h6>
                  <h1 className="section-title">
                    The Leading Marketplace for Premium Land Sales<span>.</span>
                  </h1>
                  <p>
                    Your gateway to premium land deals in prime locations.
                    Explore a wide range of plots perfect for investment or
                    building your dream property. Secure your ideal land with
                    ease today!
                  </p>
                </div>
                <ul className="ltn__list-item-half clearfix">
                  <li>
                    <i className="flaticon-home-2"></i>
                    Residential Plots
                  </li>
                  <li>
                    <i className="flaticon-mountain"></i>
                    Commercial Land
                  </li>
                  <li>
                    <i className="flaticon-heart"></i>
                    Agricultural Land
                  </li>
                  <li>
                    <i className="flaticon-secure"></i>
                    Investment Property
                  </li>
                </ul>
                <div className="ltn__callout bg-overlay-theme-05  mt-30">
                  <p>
                    Whether you&#39;re looking for agricultural, residential, or
                    commercial land, our platform provides detailed listings and
                    expert guidance to help you find the perfect property.
                  </p>
                </div>
                <div className="btn-wrapper animated">
                  <Link
                    href="#"
                    className="theme-btn-1 btn btn-effect-1 text-black"
                  >
                    OUR SERVICES
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AboutUsStyleOne;
