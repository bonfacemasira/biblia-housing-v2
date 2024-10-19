import { LayoutOne } from "@/layouts";
import { Container, Row, Col, Button , Table} from "react-bootstrap";

import Link from "next/link";
import { useRouter } from "next/router";
import { reports } from "@/components/accountsTable/reports";
import { useRef } from "react";

function Report() {
  const router = useRouter();
  const { id } = router.query;

  const statementRef = useRef();

  const report = reports.find((r) => r.id === parseInt(id));

  if (!report) return <p>Report not found.</p>;





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


  return (
    <>
      <LayoutOne topbar={true}>
     
        <div className="liton__wishlist-area pb-70">
          <Container>
            <Row>
              <Col xs={12}>
             
         
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
              <strong>Account Number </strong> {report.accountNumber}
            </p>

            <p>
              <strong>Member Name </strong> {report.memberName}
            </p>
            <p>
              <strong>Postal Address </strong> {report.postalAdress}
            </p>
          </div>

          <div>
            <p>
              <strong>Statement Date </strong> {report.statementDate}
            </p>
            <p>
              <strong>Postal Period </strong> {report.statementPeriod}
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
              {report.transactions.map((trans, index) => (
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
              {report.transactions.map((trans, index) => (
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
              {report.transactions.map((trans, index) => (
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
              {report.utawalaTransactions.map((trans, index) => (
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
              {report.utawalaTransactions2.map((trans, index) => (
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
              {report.projects.map((trans, index) => (
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
    
              </Col>
            </Row>
          </Container>
        </div>
      </LayoutOne>
    </>
  );
}

export default Report;
