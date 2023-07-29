
import { useEffect, useState } from "react"
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap"
import ModalCustomer from "./componentes/ModalCustomer"
import TablaCustomer from "./componentes/TablaCustomer"

const App = () => {


    const [customers, setCustomers] = useState([])
    const [mostrarModal, setMostrarModal] = useState(false)
    const [editar, setEditar] = useState(null)

    const mostrarClientes = async () => {

        const response = await fetch("api/customer/Lista");

        if (response.ok) {
            const data = await response.json();
            setCustomers(data)
        }
        else
        {
            console.log("error en la carga de la lista")
        }

    }

    useEffect(() => {
        mostrarClientes()
    }, [])



    const guardarCustomer = async (customer) => {

        const response = await fetch("api/customer/Guardar", {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(customer)
        })

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarClientes();
        }
    }


    const editarCustomer = async (customer) => {

        const response = await fetch("api/customer/Editar", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(customer)
        })

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarClientes();
        }
    }



    const eliminarCustomer = async (codigo) => {

        var respuesta = window.confirm("Desea eliminar este cliente?")

        if (!respuesta) {
            return;
        }

        const response = await fetch("api/customer/Eliminar/" + codigo, {
            method: 'DELETE',
        })
           

        if (response.ok) {
            mostrarClientes();
        }
    }



    return (
        <Container>
            <Row className="mt-5">

                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h5>Lista de Clientes</h5>
                        </CardHeader>
                        <CardBody>
                            <Button size="sm" color="success"
                                onClick={() => setMostrarModal(!mostrarModal)}
                            >Nuevo Cliente
                            </Button>
                            <hr></hr>
                            <TablaCustomer
                                data={customers}
                                setEditar={setEditar}
                                mostrarModal={mostrarModal}
                                setMostrarModal={setMostrarModal}

                                eliminarCustomer={eliminarCustomer}
                            />
                        </CardBody>
                    </Card>
                </Col>

            </Row>

            <ModalCustomer
                mostrarModal={mostrarModal}
                setMostrarModal={setMostrarModal}
                guardarCustomer={guardarCustomer}

                editar={editar}
                setEditar={setEditar}
                editarCustomer={editarCustomer}
            />

        </Container>
    )

}

export default App;