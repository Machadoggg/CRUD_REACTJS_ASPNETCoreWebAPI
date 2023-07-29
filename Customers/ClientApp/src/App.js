
/*import { Button } from "bootstrap"*/
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap"
import TablaCustomer from "./componentes/TablaCustomer"

const App = () => {

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
                            <TablaCustomer/>
                        </CardBody>
                    </Card>
                </Col>

            </Row>
        </Container>
    )

}

export default App;