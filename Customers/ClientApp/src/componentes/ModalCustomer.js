
import { useEffect, useState } from "react"
import { Modal, Form, FormGroup, Input, Label, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap"

/*Modelo de inicio para formulario*/
const modeloCustomer = {
    codigo: 0,
    tipoDocumento: "",
    numeroDocumento: "",
    nombres: "",
    apellido1: "",
    apellido2: "",
    genero: "",
    fechaNacimiento: "",
    direcciones: "",
    telefonos: "",
    emails: ""
}

const ModalCustomer = ({ mostrarModal, setMostrarModal, guardarCustomer, editar, setEditar, editarCustomer}) => {

    /*control de este modelo*/
    /*(useState) para controlar el estado de este modelo*/ 
    /*var para poder acceder al valor se llama (customer)*/
    /*función para poder actualizar el estado de este modelo se llama(setCustomer)*/
    const [customer, setCustomer] = useState(modeloCustomer);


    /*Metodo para poder actualizar cada una de las propiedades de este modelo*/
    const actualizarDato = (e) => {

        console.log(e.target.name + " : " + e.target.value)
        /*Actualizar Modelo*/
        setCustomer(
            {
                /*Rescatar todos los valores uetiene la variable customer*/
                ...customer,
                /*Actualizar solo la propiedad que vamos a indicarle*/
                /*la propiedad que esta modificando va a actualizar ese valor que esta escribiendo*/ 
                [e.target.name]: e.target.value

            }
        )
    }


    /*Logica para guardar en base de datos*/
    /*Funcion enviarDatos*/
    const enviarDatos = () => {

        if (customer.codigo === 0) {
            guardarCustomer(customer)
        }
        else
        {
            editarCustomer(customer)        
        }
    }


    useEffect(() => {
        if (editar != null) {
            setCustomer(editar)
        }
        else
        {
            setCustomer(modeloCustomer)
        }
    }, [editar])



    const cerrarModal = () => {
        setMostrarModal(!mostrarModal)
        setEditar(null)
    }



    return (

        <Modal isOpen={mostrarModal}>

            <ModalHeader>
                {customer.codigo === 0 ? "Nuevo Contacto" : "Editar Contacto"}
            </ModalHeader>

            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Tipo Documento</Label>
                        <Input name="tipoDocumento" onChange={(e) => actualizarDato(e)} value={customer.tipoDocumento} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Número Documento</Label>
                        <Input name="numeroDocumento" onChange={(e) => actualizarDato(e)} value={customer.numeroDocumento} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Nombres</Label>
                        <Input name="nombres" onChange={(e) => actualizarDato(e)} value={customer.nombres} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Primer Apellido</Label>
                        <Input name="apellido1" onChange={(e) => actualizarDato(e)} value={customer.apellido1} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Segundo Apellido</Label>
                        <Input name="apellido2" onChange={(e) => actualizarDato(e)} value={customer.apellido2} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Género</Label>
                        <Input name="genero" onChange={(e) => actualizarDato(e)} value={customer.genero} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Fecha Nacimiento</Label>
                        <Input name="fechaNacimiento" onChange={(e) => actualizarDato(e)} value={customer.fechaNacimiento} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Direcciones</Label>
                        <Input name="direcciones" onChange={(e) => actualizarDato(e)} value={customer.direcciones} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Teléfonos</Label>
                        <Input name="telefonos" onChange={(e) => actualizarDato(e)} value={customer.telefonos} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Emails</Label>
                        <Input name="emails" onChange={(e) => actualizarDato(e)} value={customer.emails} />
                    </FormGroup>
                </Form>
            </ModalBody>

            <ModalFooter>
                <Button color="primary" size="sm" onClick={enviarDatos}>Guardar</Button>
                <Button color="danger" size="sm" onClick={cerrarModal}>Cerrar</Button>
            </ModalFooter>

        </Modal>

    )


}

export default ModalCustomer;