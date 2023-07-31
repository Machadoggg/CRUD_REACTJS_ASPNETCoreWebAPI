
import { useEffect, useState } from "react"
import { Modal, Form, FormGroup, Input, Label, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap"
import SexoDropdown from "./SexoDropdown"
import TipoDocumentoDropdown from "./TipoDocumentoDropdown"

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

        setCustomer(modeloCustomer)
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
                {customer.codigo === 0 ? "Nuevo Cliente" : "Editar Cliente"}
            </ModalHeader>

            <ModalBody>
                <Form>

                    <div class="container">
                        <div class="row">
                            <div class="col-sm">
                                <FormGroup>
                                    <TipoDocumentoDropdown value={customer.tipoDocumento} onChange={(value) => setCustomer({ ...customer, tipoDocumento: value })} />
                                </FormGroup>
                            </div>
                            <div class="col-sm">
                                <FormGroup>
                                    <Label>Número Documento</Label>
                                    <Input name="numeroDocumento" onChange={(e) => actualizarDato(e)} value={customer.numeroDocumento} />
                                </FormGroup>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm">
                                <FormGroup>
                                    <Label>Nombres</Label>
                                    <Input name="nombres" onChange={(e) => actualizarDato(e)} value={customer.nombres} />
                                </FormGroup>
                            </div>
                            <div class="col-sm">
                                <FormGroup>
                                    <Label>Primer Apellido</Label>
                                    <Input name="apellido1" onChange={(e) => actualizarDato(e)} value={customer.apellido1} />
                                </FormGroup>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm">
                                <FormGroup>
                                    <Label>Segundo Apellido</Label>
                                    <Input name="apellido2" onChange={(e) => actualizarDato(e)} value={customer.apellido2} />
                                </FormGroup>
                            </div>
                            <div class="col-sm">
                                <FormGroup>
                                    <SexoDropdown value={customer.genero} onChange={(value) => setCustomer({ ...customer, genero: value })} />
                                </FormGroup>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm">
                                <FormGroup>
                                    <Label>Fecha Nacimiento</Label>
                                    <Input name="fechaNacimiento" onChange={(e) => actualizarDato(e)} value={customer.fechaNacimiento} />
                                </FormGroup>
                            </div>
                            <div class="col-sm">
                                <FormGroup>
                                    <Label>Direcciones</Label>
                                    <Input name="direcciones" onChange={(e) => actualizarDato(e)} value={customer.direcciones} />
                                </FormGroup>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm">
                                <FormGroup>
                                    <Label>Teléfonos</Label>
                                    <Input name="telefonos" onChange={(e) => actualizarDato(e)} value={customer.telefonos} />
                                </FormGroup>
                            </div>
                            <div class="col-sm">
                                <FormGroup>
                                    <Label>Emails</Label>
                                    <Input name="emails" onChange={(e) => actualizarDato(e)} value={customer.emails} />
                                </FormGroup>
                            </div>
                        </div>

                    </div>

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