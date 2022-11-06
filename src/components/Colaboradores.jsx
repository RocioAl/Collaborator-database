import React, { useState } from 'react';
import { BaseColaboradores } from './BaseColaboradores';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

const Colaboradores = () => {
    const [name, setName] = useState('')
    const [listCollaborators, setListCollaborators] = useState(BaseColaboradores)
    const [email, setEmail] = useState('')
    const [filterCollaborators, setfilterCollaborators] = useState('');


    const valueName = (e) => {
        setName(e.target.value)
    }

    const valueEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleInput = (e) => {
        e.preventDefault()
        setListCollaborators([...listCollaborators, { nombre: name, correo: email }])
        setName("")
        setEmail("")
    }

    const search = (e) => {
        setfilterCollaborators(e.target.value)
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" className="mb-5">
                <Container fluid>
                    <Navbar.Brand href="#">Buscador de Colaboradores</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Busca un colaborador"
                                className="me-2"
                                aria-label="Search"
                                onChange={search}
                            />
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container fluid>
                <Form onSubmit={handleInput}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre del colaborador</Form.Label>
                        <Form.Control autoFocus type="text" placeholder="Ingresa el nombre del colaborador" onChange={valueName}
                            value={name} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Correo del colaborador</Form.Label>
                        <Form.Control type="email" placeholder="Ingresa correo del colaborador" onChange={valueEmail}
                            value={email} />
                    </Form.Group>

                    <Button className="mb-5" variant="primary" type="submit" size="lg" >
                        Agregar colaborador
                    </Button>
                </Form>
                <hr />
                <h1>Listado de colaboradores</h1>

                <ListGroup >
                    {listCollaborators
                        .filter(collaborator =>
                            collaborator.nombre.includes
                                (filterCollaborators))
                        .map(collaborator =>

                            <ListGroup.Item key={collaborator.id}>
                                {collaborator.nombre} - {collaborator.correo}
                            </ListGroup.Item>
                        )}
                </ListGroup>
            </Container>
        </div>
    )
}

export default Colaboradores