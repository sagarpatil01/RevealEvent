import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import AdminNav from "./AdminNav";

export default function OrganizerInfo() {
    const [alllogin, setAllLogin] = useState([]);

    useEffect(() => {
        fetch("https://localhost:7212/api/Organizers")
            .then(resp => resp.json())
            .then(log => setAllLogin(log));
    }, []);

    return (
        <div>
            <AdminNav />
            <Container fluid>
                <Row>
                    <h1>Organizer Info</h1>
                    <br />
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Company Name</th>
                                <th>Licence No.</th>
                                <th>Email</th>
                                <th>Contact No</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alllogin.map((alllog, i) => (
                                <tr key={i}>
                                    <td>{alllog.id}</td>
                                    <td>{alllog.companyName}</td>
                                    <td>{alllog.licenceNo}</td>
                                    <td>{alllog.email}</td>
                                    <td>{alllog.contactNo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Row>
            </Container>
        </div>
    );
}
