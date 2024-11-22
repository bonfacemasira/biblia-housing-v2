import { Container, Row, Col, Nav, Tab, Form } from "react-bootstrap";
import { useRouter } from "next/router";
import { useState } from "react";

function PropertySearchForm({ navMenuClass, customClasses }) {
  const router = useRouter();

 
  const [area, setArea] = useState("");
  const [propertyStatus, setPropertyStatus] = useState("");
  const [propertyType, setPropertyType] = useState("");

  const handleSearch = () => {
    const query = {
      ...(area && { area }),
      ...(propertyStatus && { status: propertyStatus }),
      ...(propertyType && { type: propertyType }),
    };

    
    router.push({
      pathname: "/properties/filtered-products",
      query,
    });
  };

  return (
    <div
      className={`ltn__car-dealer-form-area mt--65 mt-120 ${customClasses}`}
    >
      <Container>
        <Row>
          <Col xs={12}>
            <div className="ltn__car-dealer-form-tab">
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <div
                  className={`ltn__tab-menu text-uppercase ${navMenuClass}`}
                >
                  <Nav variant="pills">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Find Property</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>

                <Tab.Content className="tab-content bg-white box-shadow-1 ltn__border position-relative pb-10">
                  <Tab.Pane eventKey="first">
                    <div className="car-dealer-form-inner">
                      <form className="ltn__car-dealer-form-box">
                        <Row>
                          {/* Area Dropdown */}
                          <Col
                            xs={12}
                            md={6}
                            lg={3}
                            className="ltn__car-dealer-form-item"
                          >
                            <Form.Select
                              className="nice-select"
                              value={area}
                              onChange={(e) => setArea(e.target.value)}
                            >
                              <option value="">Choose Area</option>
                              <option value="Nairobi">Nairobi</option>
                              <option value="Mombasa">Mombasa</option>
                              <option value="Kisumu">Kisumu</option>
                              <option value="Nakuru">Nakuru</option>
                              <option value="Makueni">Makueni</option>
                              <option value="Machakos">Machakos</option>
                            </Form.Select>
                          </Col>

                          {/* Property Status Dropdown */}
                          <Col
                            xs={12}
                            md={6}
                            lg={3}
                            className="ltn__car-dealer-form-item"
                          >
                            <Form.Select
                              className="nice-select"
                              value={propertyStatus}
                              onChange={(e) =>
                                setPropertyStatus(e.target.value)
                              }
                            >
                              <option value="">Property Status</option>
                              <option value="available">Available</option>
                              <option value="sold">Sold</option>
                              <option value="leased">Leased</option>
                            </Form.Select>
                          </Col>

                          {/* Property Type Dropdown */}
                          <Col
                            xs={12}
                            md={6}
                            lg={3}
                            className="ltn__car-dealer-form-item"
                          >
                            <Form.Select
                              className="nice-select"
                              value={propertyType}
                              onChange={(e) => setPropertyType(e.target.value)}
                            >
                              <option value="">Property Type</option>
                              <option value="land">Land</option>
                              <option value="house">House</option>
                              <option value="apartment">Apartment</option>
                            </Form.Select>
                          </Col>

                          {/* Search Button */}
                          <Col
                            xs={12}
                            md={6}
                            lg={3}
                            className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar"
                          >
                            <div className="btn-wrapper text-center mt-0">
                              <button
                                type="button"
                                onClick={handleSearch}
                                className="btn theme-btn-1 btn-effect-1 text-uppercase"
                              >
                                Search
                              </button>
                            </div>
                          </Col>
                        </Row>
                      </form>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PropertySearchForm;
