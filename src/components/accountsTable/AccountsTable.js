import Link from "next/link";
import React, { useRef, useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { reports } from "./reports";
import Report from "../Report/Report";
import { useRouter } from "next/router";
import { FaEye } from "react-icons/fa";

const AccountTable = () => {
    const [viewReport, setViewReport] = useState(false);
    const [selectedReport, setSelectedReport] = useState(null); 
    const router = useRouter();
    const { id } = router.query;
    const statementRef = useRef();

    const handleDownloadPDF = (id) => {
        const reportToDownload = reports.find((report) => report.id === id);
        if (!reportToDownload) {
            return;
        }

        setSelectedReport(reportToDownload);
        setViewReport(false);

        if (typeof window !== "undefined") {
            import("html2pdf.js").then((html2pdf) => {
                const element = statementRef.current;
                html2pdf.default()
                    .from(element)
                    .set({
                        margin: 1,
                        filename: `account-statement-${id}.pdf`,
                        html2canvas: { scale: 2 },
                        jsPDF: { orientation: 'portrait' },
                    })
                    .save();
            });
        }
    };

    return (
        <Container>
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
                                <th>Download</th>
                                <th>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reports.map((trans, index) => (
                                <tr key={index} colSpan="6">
                                    <td>{trans.memberName}</td>
                                    <td>{trans.accountNumber}</td>
                                    <td colSpan={2}>{trans.statementDate}</td>
                                    <td className="text-right">
                                        <span
                                            type="button"
                                            onClick={() => handleDownloadPDF(trans.id)}
                                        >
                                            Download
                                        </span>
                                    </td>
                                    <td className="text-right">
                                        <span>
                                            <Link href={`/account-report/${trans.id}`}><FaEye /></Link>
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>

            <div style={{ position: 'absolute', left: '-9999px' }}>
                {selectedReport && (
                    <Report report={selectedReport} statementRef={statementRef} />
                )}
            </div>
        </Container>
    );
};

export default AccountTable;
