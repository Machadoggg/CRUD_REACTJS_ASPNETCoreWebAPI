
/*import { Button } from "bootstrap"*/
import { useEffect, useState } from "react"
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap"
import TablaCustomer from "./componentes/TablaCustomer"

const App = () => {


    const [customers, setCustomers] = useState([])

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

    return (
        <Container>
            <Row className="mt-5">

                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h5>Lista de Clientes</h5>
                        </CardHeader>
                        <CardBody>
                            <Button size="sm" color="success">Nuevo Cliente</Button>
                            <hr></hr>
                            <TablaCustomer data={customers} />
                        </CardBody>
                    </Card>
                </Col>

            </Row>
        </Container>
    )

}

export default App;