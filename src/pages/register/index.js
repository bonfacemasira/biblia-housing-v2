import { useEffect, useState } from "react";
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

import ShopBreadCrumb from "@/components/breadCrumbs/shop";

import CallToAction from "@/components/callToAction";
import Link from "next/link";
import { validate } from "uuid";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passError, setPassError] = useState(false);
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    validatePassword(password, confirmPassword);
    checkFormValidity();
  }, [
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    checkbox1,
    checkbox2,
    isValid,
  ]);

  function validatePassword(pass, confirmPass) {
    let isValid = confirmPass === pass;
    setIsValid(isValid);
    setPassError(!isValid);
  }

  function checkFormValidity() {
    const isFormValid =
      firstName &&
      lastName &&
      email &&
      password &&
      confirmPassword &&
      isValid &&
      checkbox1 &&
      checkbox2;
    setIsFormValid(isFormValid);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (isFormValid) {
      let userData = { firstName, lastName, email, password };
      // Make call to backend to create user
      const res = await fetch("/api/user/create", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res);

      if (res.ok) {
        const data = await res.json();
        console.log(data);
      } else {
        console.error("Registration failed");
      }
    }
  }

  return (
    <>
      <LayoutOne topbar={true}>
        {/* <ShopBreadCrumb title="Account" sectionPace="" currentSlug="Register" /> */}

        {/* <!-- LOGIN AREA START (Register) --> */}
        <div className="ltn__login-area pb-110">
          <Container>
            <Row>
              <Col xs={12}>
                <div className="section-title-area text-center">
                  <h1 className="section-title">
                    Register <br />
                    Your Account
                  </h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
                    <br />
                    Sit aliquid, Non distinctio vel iste.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} lg={{ span: 6, offset: 3 }}>
                <div className="account-login-inner">
                  <form
                    onSubmit={handleSubmit}
                    className="ltn__form-box contact-form-box"
                  >
                    <input
                      type="text"
                      name="firstname"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                      type="text"
                      name="lastname"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    <input
                      type="text"
                      name="email"
                      placeholder="Email*"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password*"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                      type="password"
                      name="confirmpassword"
                      placeholder="Confirm Password*"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <label className="checkbox-inline">
                      <input
                        type="checkbox"
                        checked={checkbox1}
                        onChange={(e) => setCheckbox1(e.target.checked)}
                        style={{ marginRight: 5 }}
                      />
                      I consent to Herboil processing my personal data in order
                      to send personalized marketing material in accordance with
                      the consent form and the privacy policy.
                    </label>
                    <label className="checkbox-inline">
                      <input
                        type="checkbox"
                        checked={checkbox2}
                        onChange={(e) => setCheckbox2(e.target.checked)}
                        style={{ marginRight: 5 }}
                      />
                      By clicking create account, I consent to the privacy
                      policy.
                    </label>
                    <div className="btn-wrapper">
                      <button
                        className="theme-btn-1 btn reverse-color btn-block"
                        type="submit"
                        disabled={!isFormValid}
                      >
                        CREATE ACCOUNT
                      </button>
                    </div>
                  </form>
                  <div className="by-agree text-center">
                    <p>By creating an account, you agree to our:</p>
                    <p>
                      <Link href="#">
                        TERMS OF CONDITIONS &nbsp; &nbsp; | &nbsp; &nbsp;
                        PRIVACY POLICY
                      </Link>
                    </p>
                    <div className="go-to-btn mt-50">
                      <Link href="/login">ALREADY HAVE AN ACCOUNT ?</Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <!-- LOGIN AREA END --> */}

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

export default Register;
