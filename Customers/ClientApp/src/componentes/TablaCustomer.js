
import { Table, Button } from "reactstrap"

const TablaCustomer = ({ data }) => {

    return (

        <Table striped responsive bordered>
            <thead>
                <tr>
                    <th>Tipo Documento</th>
                    <th>Número Documento</th>
                    <th>Nombres</th>
                    <th>Primer Apellido</th>
                    <th>Segundo Apellido</th>
                    <th>Género</th>
                    {/*<th>Fecha Nacimiento</th>*/}
                    {/*<th>Direcciones</th>*/}
                    {/*<th>Teléfonos</th>*/}
                    {/*<th>Emails</th>*/}
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    (data.length < 1) ? (
                        <tr>
                            <td colSpan="4">Sin Registros</td>
                        </tr>    
                    ) : (
                            data.map((item) => (
                                <tr key={item.codigo}>
                                    <td>{item.tipoDocumento}</td>
                                    <td>{item.numeroDocumento}</td>
                                    <td>{item.nombres}</td>
                                    <td>{item.apellido1}</td>
                                    <td>{item.apellido2}</td>
                                    <td>{item.genero}</td>
                                    {/*<td>{item.fechaNacimiento}</td>*/}
                                    {/*<td>{item.direcciones}</td>*/}
                                    {/*<td>{item.telefonos}</td>*/}
                                    {/*<td>{item.emails}</td>*/}
                                    <td>
                                        <Button color="primary" size="sm" className="me-2">Editar</Button>
                                        <Button color="danger" size="sm">Eliminar</Button>
                                    </td>

                                </tr>
                            ))
                        )
                }
            </tbody>
        </Table>

    )

}

export default TablaCustomer;