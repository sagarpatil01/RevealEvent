import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import AdminNav from "./AdminNav";

export default function EventInfo() {
    const [alllogin, setAllLogin] = useState([]);

    useEffect(() => {
        fetch("https://localhost:7212/api/Events")
            .then(resp => resp.json())
            .then(log => setAllLogin(log));
    }, []);

    return (
        <div>
            <AdminNav />
            <Container fluid>
                <Row>
                    <h1>Event Info</h1>
                    <br />
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Event Name</th>
                                <th>Description</th>
                                <th>Event Date</th>
                                <th>Duration</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alllogin.map((alllog, i) => (
                                <tr key={i}>
                                    <td>{alllog.id}</td>
                                    <td>{alllog.eventName}</td>
                                    <td>{alllog.description}</td>
                                    <td>{alllog.eventDate}</td>
                                    <td>{alllog.duration}</td>
                                    <td>{alllog.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Row>
            </Container>
        </div>
    );
}
