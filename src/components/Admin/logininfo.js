import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import AdminNav from "./AdminNav";

export default function LoginInfo() {
    const [alllogin, setAllLogin] = useState([]);

    useEffect(() => {
        fetch("https://localhost:7212/api/Logins")
            .then(resp => resp.json())
            .then(log => setAllLogin(log));
    }, []);

    return (
        <div>
            <AdminNav />
            <Container fluid>
                <Row>
                    <h1>Login Info</h1>
                    <br />
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Username</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alllogin.map((alllog, i) => (
                                <tr key={i}>
                                    <td>{alllog.id}</td>
                                    <td>{alllog.username}</td>
                                    <td>{alllog.password}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Row>
            </Container>
        </div>
    );
}
