import { LayoutOne } from "@/layouts";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import Accordion from "react-bootstrap/Accordion";
import {
  FaHome,
  FaUserAlt,
  FaMapMarkerAlt,
  FaList,
  FaHeart,
  FaMapMarked,
  FaDollarSign,
  FaSignOutAlt,
  FaLock,
  FaEnvelope,
  FaArrowDown,
  FaPencilAlt,
  FaPhoneAlt,
  FaTrashAlt,
  FaStar,
  FaRegStarHalf,
  FaRegStar,
  FaGlobe,
} from "react-icons/fa";
import Link from "next/link";

function MyAccount() {
  return (
    <>
      <LayoutOne topbar={true}>
        <ShopBreadCrumb
          title="My Account"
          sectionPace=""
          currentSlug="My Account"
        />

        {/* <!-- LOGIN AREA START --> */}
        <div className="liton__wishlist-area pb-70">
          <Container>
            <Row>
              <Col xs={12}>
                {/* <!-- PRODUCT TAB AREA START --> */}
                <div className="ltn__product-tab-area">
                  <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="ltn_tab_1_1"
                  >
                    <Row>
                      <Col xs={12} lg={4}>
                        <div className="ltn__tab-menu-list mb-50">
                          <Nav variant="pills" className="flex-column">
                            <Nav.Item style={{ marginBottom: "10px" }}>
                              <Nav.Link eventKey="ltn_tab_1_1">
                                Profile Details <FaUserAlt />
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item style={{ marginBottom: "10px" }}>
                              <Nav.Link eventKey="ltn_tab_1_2">
                                Change Password <FaLock />
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item style={{ marginBottom: "10px" }}>
                              <Nav.Link eventKey="ltn_tab_1_3">
                                Change OTP Phone <FaPhoneAlt />
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item style={{ marginBottom: "10px" }}>
                              <Nav.Link eventKey="ltn_tab_1_4">
                                Edit Profile Details <FaUserAlt />
                              </Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </div>
                      </Col>
                      <Col xs={12} lg={8}>
                        <Tab.Content>
                          <Tab.Pane eventKey="ltn_tab_1_1">
                            <div className="ltn__myaccount-tab-content-inner">
                              <div className="ltn__form-box">
                                <form action="#">
                                  <div className="row mb-50">
                                    <Col xs={12} md={4}>
                                      <label>First name:</label>
                                      <input type="text" name="ltn__name" />
                                    </Col>
                                    <Col xs={12} md={4}>
                                      <label>Middle name:</label>
                                      <input type="text" name="ltn__lastname" />
                                    </Col>
                                    <Col xs={12} md={4}>
                                      <label>Last Name:</label>
                                      <input
                                        type="text"
                                        name="ltn__lastname"
                                        placeholder="Ethan"
                                      />
                                    </Col>
                                    <Col xs={12} md={6}>
                                      <label>ID Number:</label>
                                      <input
                                        type="text"
                                        name="ltn__idNumber"
                                        placeholder="31245678"
                                      />
                                    </Col>
                                    <Col xs={12} md={6}>
                                      <label>Membership Number:</label>
                                      <input
                                        type="text"
                                        name="ltn__membershipNo"
                                        placeholder="BH1246"
                                      />
                                    </Col>
                                    <Col xs={12} md={8}>
                                      <label>Gender:</label>
                                      <input
                                        type="text"
                                        name="ltn__gender"
                                        placeholder="MALE"
                                      />
                                    </Col>
                                    <Col xs={12} md={6}>
                                      <label>Primary Email:</label>
                                      <input
                                        type="text"
                                        name="ltn__primaryEmail"
                                        placeholder="example@bibliahousing.com"
                                      />
                                    </Col>
                                    <Col xs={12} md={6}>
                                      <label>Secondary Email:</label>
                                      <input
                                        type="text"
                                        name="ltn__secondaryEmail"
                                        placeholder="secondary@bibliahousing.com"
                                      />
                                    </Col>
                                    <Col xs={12} md={6}>
                                      <label>Primary Phone Number:</label>
                                      <input
                                        type="text"
                                        name="ltn__primaryphoneno"
                                        placeholder="0712345678"
                                      />
                                    </Col>
                                    <Col xs={12} md={6}>
                                      <label>Secondary Phone Number:</label>
                                      <input
                                        type="text"
                                        name="ltn__secondaryphoneno"
                                        placeholder="0712345678"
                                      />
                                    </Col>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="ltn_tab_1_2">
                            <div className="ltn__myaccount-tab-content-inner">
                              <div className="account-login-inner">
                                <form
                                  action="#"
                                  className="ltn__form-box contact-form-box"
                                >
                                  <h5 className="mb-30">Change Password</h5>
                                  <input
                                    type="password"
                                    name="password"
                                    placeholder="Current Password*"
                                  />
                                  <input
                                    type="password"
                                    name="password"
                                    placeholder="New Password*"
                                  />
                                  <input
                                    type="password"
                                    name="password"
                                    placeholder="Confirm New Password*"
                                  />
                                  <div className="btn-wrapper mt-0">
                                    <button
                                      className="theme-btn-1 btn btn-block"
                                      type="submit"
                                    >
                                      Save Changes
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="ltn_tab_1_3">
                            <div className="ltn__myaccount-tab-content-inner">
                              <div className="account-login-inner">
                                <form
                                  action="#"
                                  className="ltn__form-box contact-form-box"
                                >
                                  <h5 className="mb-30">Change OTP Phone</h5>
                                  <input
                                    type="password"
                                    name="password"
                                    placeholder="Current OTP Phone"
                                  />
                                  <input
                                    type="password"
                                    name="password"
                                    placeholder="New OTP Phone"
                                  />
                                  <input
                                    type="password"
                                    name="password"
                                    placeholder="Confirm New OTP Phone"
                                  />
                                  <div className="btn-wrapper mt-0">
                                    <button
                                      className="theme-btn-1 btn btn-block"
                                      type="submit"
                                    >
                                      Save Changes
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="ltn_tab_1_4">
                            <div className="ltn__myaccount-tab-content-inner">
                              <div className="ltn__form-box">
                                <form action="#">
                                  <div className="row mb-50">
                                    <Col xs={12} md={4}>
                                      <label>First name:</label>
                                      <input type="text" name="ltn__name" />
                                    </Col>
                                    <Col xs={12} md={4}>
                                      <label>Middle name:</label>
                                      <input type="text" name="ltn__lastname" />
                                    </Col>
                                    <Col xs={12} md={4}>
                                      <label>Last Name:</label>
                                      <input
                                        type="text"
                                        name="ltn__lastname"
                                        placeholder="Ethan"
                                      />
                                    </Col>
                                    <Col xs={12} md={6}>
                                      <label>ID Number:</label>
                                      <input
                                        type="text"
                                        name="ltn__idNumber"
                                        placeholder="31245678"
                                      />
                                    </Col>
                                    <Col xs={12} md={6}>
                                      <label>Membership Number:</label>
                                      <input
                                        type="text"
                                        name="ltn__membershipNo"
                                        placeholder="BH1246"
                                      />
                                    </Col>
                                    <Col xs={12} md={8}>
                                      <label>Gender:</label>
                                      <input
                                        type="text"
                                        name="ltn__gender"
                                        placeholder="MALE"
                                      />
                                    </Col>
                                    <Col xs={12} md={6}>
                                      <label>Primary Email:</label>
                                      <input
                                        type="text"
                                        name="ltn__primaryEmail"
                                        placeholder="example@bibliahousing.com"
                                      />
                                    </Col>
                                    <Col xs={12} md={6}>
                                      <label>Secondary Email:</label>
                                      <input
                                        type="text"
                                        name="ltn__secondaryEmail"
                                        placeholder="secondary@bibliahousing.com"
                                      />
                                    </Col>
                                    <Col xs={12} md={6}>
                                      <label>Primary Phone Number:</label>
                                      <input
                                        type="text"
                                        name="ltn__primaryphoneno"
                                        placeholder="0712345678"
                                      />
                                    </Col>
                                    <Col xs={12} md={6}>
                                      <label>Secondary Phone Number:</label>
                                      <input
                                        type="text"
                                        name="ltn__secondaryphoneno"
                                        placeholder="0712345678"
                                      />
                                    </Col>
                                  </div>
                                  <div className="btn-wrapper">
                                    <button
                                      type="submit"
                                      className="btn theme-btn-1 btn-effect-1 text-uppercase"
                                    >
                                      Save Changes
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </Row>
                  </Tab.Container>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

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

export default MyAccount;
