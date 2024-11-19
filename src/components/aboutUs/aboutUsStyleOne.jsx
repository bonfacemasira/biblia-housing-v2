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
                  Explore a wide range of premium land deals in prime locations. Whether you're
                  looking for agricultural, residential, or commercial land, our platform offers
                  detailed listings and expert guidance.
                </p>
                <Link href="#" className="theme-btn-1 btn btn-effect-1">
                  Learn More
                </Link>
              </div>
            </Col>
          </Row>

          {/* Core Values Section */}
          <Row className="mb-5">
            <Col xs={12}>
              <h2 className="section-title mb-4">Our Core Values</h2>
              <div className="d-flex flex-wrap gap-4">
                {[
                  "Customer Focused",
                  "Professionalism",
                  "Integrity",
                  "Teamwork",
                  "Innovation",
                ].map((value, index) => (
                  <div key={index} className="p-3 shadow-sm rounded bg-white text-center">
                    <h5 className="mb-0">{value}</h5>
                  </div>
                ))}
              </div>
            </Col>
          </Row>

          {/* Principles Section */}
          <Row className="mb-5 bg-light py-5">
            <Col xs={12}>
              <h2 className="section-title mb-4">Our Principles</h2>
              <div className="row g-3">
                {[
                  "Voluntary and Open Membership",
                  "Democratic Member Control",
                  "Economic Participation by Members",
                  "Autonomy & Independence",
                  "Education, Training & Information",
                  "Cooperation Among Cooperatives",
                ].map((principle, index) => (
                  <Col xs={12} sm={6} key={index}>
                    <div className="p-3 shadow-sm rounded bg-white">
                      <p className="mb-0">{principle}</p>
                    </div>
                  </Col>
                ))}
              </div>
            </Col>
          </Row>

          {/* Share Capital Section */}
          <Row className="mb-5">
            <Col xs={12}>
              <h2 className="section-title mb-4">Share Capital</h2>
              <div className="p-4 shadow-sm rounded bg-white">
                <p>
                This is the minimum amount of money a member should retain in the Housing
                Society in case you want to withdraw, and it stands at <strong>Ksh.50,000.</strong>
                </p>
                <p>
                It is transferable to an existing member or a new member joining Biblia Housing
                Society or the amount is retained and earns you attractive Dividends annually.
                Once a member meets the minimum Share Capital amount of<strong>Ksh.50,000;</strong> 
                the Society Awards them with <strong>Share-Capital Certificates</strong>  to recognize them
                as <strong>fully-fledged members</strong> 
                </p>
              </div>
            </Col>
          </Row>

          {/* Why Choose BHS Section */}
          <Row className="mb-5 bg-light py-5">
            <Col xs={12}>
              <h2 className="section-title mb-4">Why Choose BHS?</h2>
              <ul className="list-unstyled">
                {[
                  "Highly discounted prices of plots compared to the Market Value.",
                  "Flexible payment terms of 30% discount and balance payable in installments of up to 6 months with no interest.",
                  "Value added plots with Ready Titles.",
                  "Free site visits.",
                  "High returns on Investments in the form of Interests and Dividends.",
                  "The Society is also open to non-members who may wish to buy plots as Investments.",
                  "Our Membership application is open to both Individuals and Co-operates/Units"
                ].map((benefit, index) => (
                  <li
                    key={index}
                    className="p-2 mb-2 shadow-sm rounded bg-white d-flex align-items-center gap-2"
                  >
                    <span className="badge bg-primary">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>

          {/* Membership Drive Section */}
          <Row className="mb-5">
            <Col xs={12}>
              <h2 className="section-title mb-4">Membership Drive</h2>
              <div className="p-4 shadow-sm rounded bg-white">
                <p>
                  Spread the word about the Society's deals and earn incentives:
                </p>
                <ul>
                  <li>
                    Introduce a new member and earn <strong>Ksh. 500</strong> referral fee (T&Cs
                    apply).
                  </li>
                  <li>
                    Help a member buy a plot and earn <strong>Ksh. 14,000</strong> on completion
                    (T&Cs apply).
                  </li>
                </ul>
              </div>
            </Col>
          </Row>

          {/* Application Section */}
          <Row className="mb-5 bg-light py-5">
            <Col xs={12}>
              <h2 className="section-title mb-4">Application to BHS</h2>
              <div className="p-4 shadow-sm rounded bg-white">
                <p>
                  To join, please provide the following:
                </p>
                <ul>
                  <li>Filled application form</li>
                  <li>Copy of national ID</li>
                  <li>Copy of KRA PIN</li>
                  <li>Passport photo</li>
                  <li>Registration fee of Ksh. 2,000/-</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AboutUsStyleOne;
