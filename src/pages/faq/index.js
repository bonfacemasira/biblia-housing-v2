import { useState } from "react";
import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaArrowRight,
  FaArrowLeft,
  FaPlay,
  FaSearch,
  FaRegEnvelopeOpen,
  FaPhoneAlt,
} from "react-icons/fa";
import Slider from "react-slick";
import { productSlug } from "@/lib/product";
import TitleSection from "@/components/titleSection";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import BlogItem from "@/components/blog";
import blogData from "@/data/blog";
import CallToAction from "@/components/callToAction";
import Accordion from "react-bootstrap/Accordion";
import ModalVideo from "react-modal-video";
import Link from "next/link";
import CounterUp from "@/components/counterUp";

function Faq() {
  const [isOpen, setOpen] = useState(false);

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
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
          title="Frequently asked questions"
          sectionPace=""
          currentSlug="FAQs"
        />

        {/* <!-- FAQ AREA START (faq-2) (ID > accordion_2) --> */}
        <div className="ltn__faq-area mb-100">
          <div className="container">
            <Row>
              <Col xs={12} lg={8}>
                <div className="ltn__faq-inner ltn__faq-inner-2">
                  <Accordion defaultActiveKey="2">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        What types of land do you offer for sale?
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>
                          We offer a wide variety of land types, including
                          residential plots, commercial land, agricultural land,
                          and investment properties. Each is located in prime
                          areas to suit different needs, whether you&lsquo;re
                          looking to build, farm, or invest.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        Are the plots serviced with utilities like water and
                        electricity?
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>
                          Yes, many of our plots come fully serviced with
                          essential utilities such as water, electricity, and
                          road access. For specific plot details, we recommend
                          checking the listing or contacting our team for more
                          information.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        Do you offer financing or payment plans for land
                        purchases?
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>
                          Yes, we provide flexible financing options and payment
                          plans for buyers. Our goal is to make land ownership
                          accessible, so you can discuss custom payment options
                          with our sales team.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        How can I verify the ownership and legal status of the
                        land?
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>
                          We ensure all our listed properties have clear titles
                          and are legally verified. You will receive all
                          necessary documentation, including title deeds and
                          ownership certificates, to confirm the authenticity
                          and legality of your purchase.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                        Can I visit the land before making a purchase?
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>
                          Absolutely! We encourage buyers to visit the property
                          before making a decision. Our team can arrange guided
                          site visits so you can explore the land and assess the
                          surroundings firsthand.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                  <div className="need-support text-center mt-100">
                    <h2>Still need help? Reach out to support 24/7:</h2>
                    <div className="btn-wrapper mb-30">
                      <Link href="/contact" className="theme-btn-1 btn">
                        Contact Us
                      </Link>
                    </div>
                    <h3>
                      <FaPhoneAlt />
                      0716 195 054
                    </h3>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={4}>
                <aside className="sidebar-area ltn__right-sidebar">
                  {/* <!-- Newsletter Widget --> */}
                  <div className="widget ltn__search-widget ltn__newsletter-widget">
                    <h6 className="ltn__widget-sub-title">{`// subscribe`}</h6>
                    <h4 className="ltn__widget-title">Get Newsletter</h4>
                    <form action="#">
                      <input type="text" name="search" placeholder="Search" />
                      <button type="submit">
                        <FaSearch />
                      </button>
                    </form>
                    <div className="ltn__newsletter-bg-icon">
                      <FaRegEnvelopeOpen />
                    </div>
                  </div>
                  {/* <!-- Banner Widget --> */}
                  <div className="widget ltn__banner-widget">
                    <Link href="/shop">
                      <img src="/img/Land Project Photos 203.jpg" alt="Banner Image" />
                    </Link>
                  </div>
                </aside>
              </Col>
            </Row>
          </div>
        </div>
        {/* <!-- FAQ AREA START --> */}

        {/* <!-- COUNTER UP AREA START -->  */}
        <CounterUp />

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

export default Faq;
