import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import AdminNav from "./AdminNav";

export default function CustomerLogin() {
    const [alllogin, setAlllogin] = useState([]);

    useEffect(() => {
        fetch("https://localhost:7212/api/Customers")
            .then(resp => resp.json())
            .then(log => setAlllogin(log));
    }, []);

    return (
        <div>
            <AdminNav />
            <Container fluid>
                <Row>
                    <h1>Customers Info</h1>
                    <br />
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Birth Date</th>
                                <th>Identity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alllogin.map((alllog, i) => (
                                <tr key={i}>
                                    <td>{alllog.id}</td>
                                    <td>{alllog.firstName}</td>
                                    <td>{alllog.lastName}</td>
                                    <td>{alllog.email}</td>
                                    <td>{alllog.birthdate}</td>
                                    <td>{alllog.identity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Row>
            </Container>
        </div>
    );
}
