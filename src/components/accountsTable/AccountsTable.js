import Link from "next/link";
import React, { useRef } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { reports } from "./reports";

const AccountTable = () => {



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
              {reports.map((trans, index) => (
                <tr key={index} colspan="6">
                  <td>{trans.memberName}</td>
                  <td>{trans.accountNumber}</td>
                  <td colSpan={2}>{trans.statementDate}</td>
              
                  <td className="text-right"><span type="button" >download</span></td>
                  <td className="text-right"><span className=""><Link href={`/account-report/${trans.id}`}>view</Link></span></td>
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
