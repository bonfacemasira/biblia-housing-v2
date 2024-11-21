import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";
import { getProducts, productSlug } from "@/lib/product";
import TitleSection from "@/components/titleSection";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import TestimonialCarouselItem from "@/components/testimonialCarousel";
import testimonialData from "@/data/testimonial";
import BlogItem from "@/components/blog";
import blogData from "@/data/blog";
import CallToAction from "@/components/callToAction";
import AboutUsStyleOne from "@/components/aboutUs/aboutUsStyleOne";
import Feature from "@/components/features";
import featureData from "@/data/service"
import TeamItem from "@/components/team";
import TeamData from '@/data/team';

function AboutUs() {
  const agents = getProducts(TeamData, "buying", "featured", 3);
  const featureDataSorted = getProducts(featureData, "buying", "featured", 3);

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" +
        (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <FaArrowLeft />
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <FaArrowRight />
    </button>
  );

  const testiMonialsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  const blogSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  return (
    <>
      <LayoutOne topbar={true}>
        <ShopBreadCrumb
          title="About Us"
          sectionPace=""
          currentSlug="About Us"
        />

        <AboutUsStyleOne sectionSpace="pb-90" />

        <Feature
          classes="section-bg-1"
          servicebtn={true}
          iconTag={false}
          data={featureDataSorted}
          titleSectionData={{
            sectionClasses: "text-center",
            subTitle: "Our Services",
            title: "Our Main Focus",
          }}
        />




        <div className="ltn__team-area pt-115 pb-90">
          {/* <Container>
            <Row>
              <Col lg={12}>
                <TitleSection
                  sectionClasses="text-center"
                  headingClasses="section-subtitle-2"
                  titleSectionData={{
                    subTitle: "Team",
                    title: "Property Agents",
                  }}
                />
              </Col>
            </Row>

            <Row>
              {agents.map((data, key) => {
                const slug = productSlug(data.name);
                return (
                  <Col key={key} xs={12} sm={6} lg={4} >
                    <TeamItem baseUrl="blog" data={data} slug={slug} additionalClassname="" />
                  </Col>
                );
              })}
            </Row>


          </Container> */}
        </div>



        {/* <!-- TESTIMONIAL AREA START (testimonial-7) -->  */}
        <div
          className="ltn__testimonial-area bg-image-top pt-115 pb-70"
          style={{ 
            backgroundImage: `url("../img/Land Project  Photos-201.jpg")` ,
            backgroundPosition : "center",
            


          }}
        >
          <Container>
            <Row>
              <Col lg={12}>
                <TitleSection
                  sectionClasses="text-center"
                  headingClasses="section-subtitle-2"
                  titleSectionData={{
                    subTitle: "Our Testimonial",
                    title: "Clients Feedback",
                  }}
                />
              </Col>
            </Row>

            <Slider
              {...testiMonialsettings}
              className="ltn__testimonial-slider-5-active slick-arrow-1"
            >
              {testimonialData.map((data, key) => {
                return (
                  <TestimonialCarouselItem key={key} data={data} />
                );
              })}
            </Slider>
          </Container>
        </div>
        {/* <!-- TESTIMONIAL AREA END --> */}

        {/* <!-- BLOG AREA START (blog-3) -->  */}
        <div className="ltn__blog-area pb-70">
          {/* <Container>
            <Row>
              <Col lg={12}>
                <TitleSection
                  sectionClasses="text-center"
                  headingClasses="section-subtitle-2"
                  titleSectionData={{
                    subTitle: "News & Blogs",
                    title: "Leatest News Feeds",
                  }}
                />
              </Col>
            </Row>
            <Slider
              {...blogSettings}
              className="ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal"
            >
              {blogData.map((data, key) => {
                const slug = productSlug(data.title);
                return (
                  <BlogItem key={key} baseUrl="blog" data={data} slug={slug} />
                );
              })}
            </Slider>
          </Container> */}
        </div>
        {/* <!-- BLOG AREA END --> */}

            <Container>
           {/* Our vission Section */}
           <Row className="mt-5 py-5 border-bottom card">
            <Col xs={12}>
              <h2 className="text-center mb-3">Our Vision</h2>
              <p className="text-center text-muted">
              To be the Prime Real Estate Investment provider in Kenya.
              </p>
            </Col>
          </Row>

            {/* Our Mission Section */}
            <Row className="mt-5 py-5 border-bottom card">
            <Col xs={12}>
              <h2 className="text-center mb-4">Our Mission</h2>
              <p className="text-center text-muted">
              To provide opportunities to our members and the public in the real estate through acquiring and selling land and property at competitive prices.
              </p>
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
                  Spread the word about the Society&#39;s deals and earn incentives:
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

        <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom">
          <Container>
            <Row>
              <Col xs={12}>
                <CallToAction />
              </Col>
            </Row>
          </Container>
        </div>
      </LayoutOne>
    </>
  );
}

export default AboutUs;
