import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import AdminNav from "./AdminNav";

export default function ArtistInfo() {
    const [alllogin, setAllLogin] = useState([]);

    useEffect(() => {
        fetch("https://localhost:7212/api/Artists")
            .then(resp => resp.json())
            .then(log => setAllLogin(log));
    }, []);

    return (
        <div>
            <AdminNav />
            <Container fluid>
                <Row>
                    <h1>Artist Info</h1>
                    <br />
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Contact No</th>
                                <th>Social Media 1</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alllogin.map((alllog, i) => (
                                <tr key={i}>
                                    <td>{alllog.id}</td>
                                    <td>{alllog.firstName}</td>
                                    <td>{alllog.lastName}</td>
                                    <td>{alllog.email}</td>
                                    <td>{alllog.contactNo}</td>
                                    <td>{alllog.socialMedia1}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Row>
            </Container>
        </div>
    );
}
