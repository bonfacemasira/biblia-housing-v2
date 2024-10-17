import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useRef } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";




const AccountStatement = () => {
  const statementRef = useRef();


  const handleDownloadPDF = () => {

    if (typeof window !== "undefined") {
      import("html2pdf.js").then((html2pdf) => {
        const element = statementRef.current;
        html2pdf.default()
          .from(element)
          .set({
            margin: 1,
            filename: 'account-statement.pdf',
            html2canvas: { scale: 2 },
            jsPDF: { orientation: 'portrait' },
          })
          .save();
      });
    }
  };




  const accountDetails = {
    memberName: "PATRICK CHERUIYOT TUM",
    accountNumber: "100-00-IND02280",
    postalAdress: "0100",
    statementDate: "21 Aug 2024 09:21",
    statementPeriod: " 01 Jan 2000 to 21 Aug 2024",
    transactions: [
      {
        date: "22 May 2024",
        transNo: "RCPT:00907",
        description: "REG FEE & SHARE CAPITAL",
        moneyOut: 0,
        moneyIn: 50000,
        balance: 50000,
      },
    ],
    parcelDetails: [
      {
        parcelId: "PRJ:00012\\7",
        status: "Booked",
        description: "PREMIER GARDENS UTAWALA",
        plotPrice: 1800000,
        amountPaid: 661000,
        balance: 1139000,
      },
    ],

    utawalaTransactions: [
      {
        date: "19 Jun 2024",
        transNo: "RCPT:00957",
        description: "PREMIER GARDENS UTAWALA",
        moneyOut: 0,
        moneyIn: 450000,
        balance: 450000,
      },
      {
        date: "19 Jun 2024",
        transNo: "RCPT:00957",
        description: "PREMIER GARDENS UTAWALA",
        moneyOut: 0,
        moneyIn: 450000,
        balance: 900000,
      },
      {
        date: "21 Jun 2024",
        transNo: "RCPT:00980",
        description: "PREMIER GARDENS LIMITED",
        moneyOut: 0,
        moneyIn: 150000,
        balance: 1050000,
      },
      {
        date: "21 Jun 2024",
        transNo: "RCPT:00980",
        description: "PREMIER GARDENS LIMITED",
        moneyOut: 0,
        moneyIn: 150000,
        balance: 1200000,
      },
      {
        date: "21 Jun 2024",
        transNo: "G00615",
        description: "PREMIER GARDENS UTAWALA",
        moneyOut: 600000,
        moneyIn: 0,
        balance: 600000,
      },
      {
        date: "22 May 2024",
        transNo: "RCPT:00907",
        description: "REG FEE & SHARE CAPITAL",
        moneyOut: 0,
        moneyIn: 2000,
        balance: 2000,
      },
      {
        date: "30 Jun 2024",
        transNo: "G00622",
        description: "PREMIER GARDENS PLOT BOOKING FEE",
        moneyOut: 2000,
        moneyIn: 0,
        balance: 598000,
      },
      {
        date: "05 Aug 2024",
        transNo: "RCPT:01067",
        description: "PREMIER GARDENS UTAWALA",
        moneyOut: 400000,
        moneyIn: 0,
        balance: 998000,
      },
      {
        date: "12 Aug 2024",
        transNo: "RCPT:01068",
        description: "PREMIER GARDENS UTAWALA",
        moneyOut: 200000,
        moneyIn: 0,
        balance: 1198000,
      },
      {
        date: "20 Aug 2024",
        transNo: "RCPT:01069",
        description: "PREMIER GARDENS UTAWALA",
        moneyOut: 639000,
        moneyIn: 0,
        balance: 1837000,
      },
      {
        date: "20 Aug 2024",
        transNo: "INT:00075",
        description: "PREMIER GARDENS UTAWALA",
        moneyOut: 1800000,
        moneyIn: 0,
        balance: 37000,
      },
    ],

    utawalaTransactions2: [
      {
        date: "19 Jun 2024",
        transNo: "RCPT:00957",
        description: "PREMIER GARDENS UTAWALA",
        moneyOut: 0,
        moneyIn: 480000,
        balance: 600000,
      },
      {
        date: "19 Jun 2024",
        transNo: "RCPT:00957",
        description: "PREMIER GARDENS UTAWALA",
        moneyOut: 0,
        moneyIn: 590000,
        balance: 900000,
      },
    ],

    projects: [
      {
        percelID: `PRJ:00012/7`,
        status: "RCPT:00957",
        description: "PREMIER GARDENS UTAWALA",
        plotPrice: 1800000.0,
        amountPaid: 661000.0,
        balance: 1139000.0,
      },
    ],
  };

  return (
    <Container>
      {/* Header Information */}
      <Button variant="primary" onClick={handleDownloadPDF} className="mb-4">Download PDF</Button>
      <div ref={statementRef}>
      <Row className="text-center my-4">
        <Col>
          <div className="site-logo-wrap">
            <div className="site-logo">
              <Link href="/">
                <img src="/img/biblia-sacco-logo.jpg" alt="Logo" />
              </Link>
            </div>
          </div>
        </Col>
        <Col>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: "1px",
              alignItems: "end",
            }}
          >
            <h3>BIBLIA HOUSING</h3>
            <p>7041-00300</p>
            <p>Kamirembe Place,Ring Road Kilimani</p>
            <p>+254716195054 </p>
            <p>info.biblihousing@gmail.com</p>
          </div>
        </Col>
      </Row>
      <div>
        <h3
          style={{ borderBottom: "2px solid black" }}
          className=" text-center text-primary py-2 "
        >
          MEMBER ACCOUNT STATEMENT
        </h3>
      </div>

      <Row className="mb-4">
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            lineHeight: "1px",
          }}
        >
          <div>
            <p>
              <strong>Account Number </strong> {accountDetails.accountNumber}
            </p>

            <p>
              <strong>Member Name </strong> {accountDetails.memberName}
            </p>
            <p>
              <strong>Postal Address </strong> {accountDetails.postalAdress}
            </p>
          </div>

          <div>
            <p>
              <strong>Statement Date </strong> {accountDetails.statementDate}
            </p>
            <p>
              <strong>Postal Period </strong> {accountDetails.statementPeriod}
            </p>
          </div>
        </Col>
      </Row>

      {/* Transaction Table */}
      <Row className="mb-4">
        <Col>
          <div
            className="w-100 px-3 py-1 text-white"
            style={{ backgroundColor: "#d3b489 " }}
          >
            <strong>Registration Fee</strong>
          </div>

          <Table bordered hover responsive>
            <thead>
              <tr>
                <th>Trans Date</th>
                <th>Trans No</th>
                <th>Description</th>
                <th>Money Out</th>
                <th>Money In</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {accountDetails.transactions.map((trans, index) => (
                <tr key={index} colspan="6">
                  <td>{trans.date}</td>
                  <td>{trans.transNo}</td>
                  <td>{trans.description}</td>
                  <td className="text-right">{trans.moneyOut.toFixed(2)}</td>
                  <td className="text-right">{trans.moneyIn.toFixed(2)}</td>
                  <td className="text-right">{trans.balance.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      <div
        className="w-100 px-3 py-1 text-white"
        style={{ backgroundColor: "#d3b489 " }}
      >
        <strong>Account No 100-00-IND02280 PATRICK CHERUIYOT TUM</strong>
      </div>

      <Row>
        <strong colspan="2">Account Type SHARE_CAPITAL</strong>
        <Col>
          <Table bordered hover responsive>
            <thead>
              <tr>
                <th>Trans Date</th>
                <th>Trans No</th>
                <th>Description</th>
                <th>Money Out</th>
                <th>Money In</th>
                <th>Balance</th>
              </tr>
            </thead>

            <tbody>
              {accountDetails.transactions.map((trans, index) => (
                <>
                  <tr>
                    <td colSpan="5">
                      <strong>Balance B/F</strong>
                    </td>
                    <td className="text-right">{0.0}</td>
                  </tr>
                  <tr key={index} colspan="6">
                    <td>{trans.date}</td>
                    <td>{trans.transNo}</td>
                    <td>{trans.description}</td>
                    <td className="text-right">{trans.moneyOut.toFixed(2)}</td>
                    <td className="text-right">{trans.moneyIn.toFixed(2)}</td>
                    <td className="text-right">{trans.balance.toFixed(2)}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      <div
        className="w-100 px-3 py-1 text-white"
        style={{ backgroundColor: "#d3b489 " }}
      >
        <strong>Account No 100-00-IND02280 PATRICK CHERUIYOT TUM</strong>
      </div>

      <Row>
        <strong colspan="2">Account Type SHARE_CAPITAL</strong>
        <Col>
          <Table bordered hover responsive>
            <thead>
              <tr>
                <th>Trans Date</th>
                <th>Trans No</th>
                <th>Description</th>
                <th>Money Out</th>
                <th>Money In</th>
                <th>Balance</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td colSpan="5">
                  <strong>Balance B/F</strong>
                </td>
                <td className="text-right">{0.0}</td>
              </tr>
              {accountDetails.transactions.map((trans, index) => (
                <>
                  <tr key={index} colspan="6">
                    <td>{trans.date}</td>
                    <td>{trans.transNo}</td>
                    <td>{trans.description}</td>
                    <td className="text-right">{trans.moneyOut.toFixed(2)}</td>
                    <td className="text-right">{trans.moneyIn.toFixed(2)}</td>
                    <td className="text-right">{trans.balance.toFixed(2)}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      <div
        className="w-100 px-3 py-1 text-white"
        style={{ backgroundColor: "#d3b489 " }}
      >
        <strong>Account No PRJ:00012-IND02280 PATRICK CHERUIYOT TUM</strong>
      </div>

      <Row>
        <strong colspan="2">Account Type PREMGARDENS_UTAWALA</strong>
        <Col>
          <Table bordered hover responsive>
            <thead>
              <tr>
                <th>Trans Date</th>
                <th>Trans No</th>
                <th>Description</th>
                <th>Money Out</th>
                <th>Money In</th>
                <th>Balance</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td colSpan="5">
                  <strong>Balance B/F</strong>
                </td>
                <td className="text-right">{0.0}</td>
              </tr>
              {accountDetails.utawalaTransactions.map((trans, index) => (
                <>
                  <tr key={index} colspan="6">
                    <td>{trans.date}</td>
                    <td>{trans.transNo}</td>
                    <td>{trans.description}</td>
                    <td className="text-right">{trans.moneyOut.toFixed(2)}</td>
                    <td className="text-right">{trans.moneyIn.toFixed(2)}</td>
                    <td className="text-right">{trans.balance.toFixed(2)}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      <div
        className="w-100 px-3 py-1 text-white"
        style={{ backgroundColor: "#d3b489 " }}
      >
        <strong>Account No PRJ:00012IND022801 PATRICK CHERUIYOT TUM</strong>
      </div>

      <Row>
        <strong colspan="2">Account Type PREMGARDENS_UTAWALA</strong>
        <Col>
          <Table bordered hover responsive>
            <thead>
              <tr>
                <th>Trans Date</th>
                <th>Trans No</th>
                <th>Description</th>
                <th>Money Out</th>
                <th>Money In</th>
                <th>Balance</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td colSpan="5">
                  <strong>Balance B/F</strong>
                </td>
                <td className="text-right">{0.0}</td>
              </tr>
              {accountDetails.utawalaTransactions2.map((trans, index) => (
                <>
                  <tr key={index} colspan="6">
                    <td>{trans.date}</td>
                    <td>{trans.transNo}</td>
                    <td>{trans.description}</td>
                    <td className="text-right">{trans.moneyOut.toFixed(2)}</td>
                    <td className="text-right">{trans.moneyIn.toFixed(2)}</td>
                    <td className="text-right">{trans.balance.toFixed(2)}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      <div
        className="w-100 px-3 py-1 text-white"
        style={{ backgroundColor: "#000 " }}
      >
        <strong>Member Projects</strong>
      </div>
      <Row>
        <Col>
          <Table bordered hover responsive>
            <thead>
              <tr>
                <th>Percel ID</th>
                <th>Status</th>
                <th>Description</th>
                <th>Money Out</th>
                <th>Money In</th>
                <th>Balance</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td colSpan="5">
                  <strong>Balance B/F</strong>
                </td>
                <td className="text-right">{0.0}</td>
              </tr>
              {accountDetails.projects.map((trans, index) => (
                <>
                  <tr key={index} colspan="6">
                    <td>{trans.percelID}</td>
                    <td>{trans.status}</td>
                    <td>{trans.description}</td>
                    <td className="text-right">{trans.plotPrice.toFixed(2)}</td>
                    <td className="text-right">
                      {trans.amountPaid.toFixed(2)}
                    </td>
                    <td className="text-right">{trans.balance.toFixed(2)}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

     </div>
    </Container>
  );
};

export default AccountStatement;
