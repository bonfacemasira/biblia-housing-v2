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
          {/* About Us Section */}
          <Row className="align-items-center mb-5">
            <Col xs={12} lg={6}>
              <div className="about-us-img-wrap rounded s">
                <img
                  src="/img/Land Project Photos 203.jpg"
                  alt="About Us"
                  className="img-fluid rounded"
                />
              </div>
            </Col>
            <Col xs={12} lg={6}>
              <div className="about-us-info">
                <h1 className="mb-4">The Leading Marketplace for Premium Land Sales</h1>
                <p className="text-muted">
                  Explore a wide range of premium land deals in prime locations. Whether you&#39;re
                  looking for agricultural, residential, or commercial land, our platform offers
                  detailed listings and expert guidance.
                </p>
                <Link href="#" className="theme-btn-1 btn btn-effect-1">
                  Learn More
                </Link>
              </div>
            </Col>
          </Row>

        

        </Container>
      </div>
    </>
  );
}

export default AboutUsStyleOne;
