import Link from "next/link";
import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

const AccountTable = () => {
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


  };


  

  return (
    <Container>
     
      {/* Transaction Table */}
      <Row className="mb-4">
        <Col>
          <div
            className="w-100 px-3 py-1 text-white"
            style={{ backgroundColor: "#d3b489 " }}
          >
            <strong>Statement or Reports</strong>
          </div>

          <Table bordered hover responsive>
            <thead>
              <tr>
                <th>Trans Date</th>
                <th>Trans No</th>
                <th colSpan={2}>Description</th>
               
                <th>download</th>
                <th>view</th>
              </tr>
            </thead>
            <tbody>
              {accountDetails.transactions.map((trans, index) => (
                <tr key={index} colspan="6">
                  <td>{trans.date}</td>
                  <td>{trans.transNo}</td>
                  <td colSpan={2}>{trans.description}</td>
              
                  <td className="text-right"><span className="">download</span></td>
                  <td className="text-right"><span className="">view</span></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      
      
    </Container>
  );
};

export default AccountTable;
