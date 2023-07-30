

import React, { useState, useEffect } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

const TipoDocumentoDropdown = ({ value, onChange }) => {
    const [tipoDocumento, setTipoDocumento] = useState([]);

    useEffect(() => {
        axios.get('/api/customer/ListaTipoDocumento')

            .then((response) => {
                setTipoDocumento(response.data);
            })
            .catch((error) => {
                console.error('Error al obtener Tipo de Documento:', error);
            });
    }, []);

    return (
        <FormGroup>
            <Label>Tipo Documento</Label>
            <Input
                type="select"
                name="tipoDocumento"
                onChange={(e) => onChange(e.target.value)}
                value={value}
            >
                <option value="">Seleccionar</option>
                {tipoDocumento.map((tipoDocumento) => (
                    <option key={tipoDocumento.id} value={tipoDocumento.nombre}>
                        {tipoDocumento.nombre}
                    </option>
                ))}
            </Input>
        </FormGroup>
    );
};

export default TipoDocumentoDropdown;
