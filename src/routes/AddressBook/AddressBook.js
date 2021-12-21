import React from 'react'
import { NavLink, Outlet } from "react-router-dom";
import { ListGroupItem, ListGroup, Col, Row } from "react-bootstrap";

export const AddressBook = () => {
    const addresses = [
        {
            id: 1,
            addressName: 'Polna 1, Wrocław'
        },
        {
            id: 2,
            addressName: 'Wrocławska 2, Warszawa'
        }
    ];

    const navLinks = addresses.map(address => {
        return <ListGroupItem key={address.id}>
            <NavLink to={`/address/${address.id}`} key={address.id}>{address.addressName}</NavLink>
        </ListGroupItem>
    });

    const shouldDisplayNav = navLinks && navLinks.length ? <ListGroup>{navLinks}</ListGroup> : <p>There are no addresses.</p>;

    return addresses ? <Row>
        <Col sm="3">
            {shouldDisplayNav}
        </Col>
        <Col sm="9">
            <Outlet/>
        </Col>
    </Row> : <Row>
        <p>There are no addresses.</p>
    </Row>
}

export default AddressBook;
