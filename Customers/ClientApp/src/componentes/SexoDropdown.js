

import React, { useState, useEffect } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

const SexoDropdown = ({ value, onChange }) => {
    const [generos, setGeneros] = useState([]);

    useEffect(() => {
        // Hacer la solicitud al servidor para obtener los géneros desde la base de datos
        //axios.get('/api/customer/ListaGeneros') // Asume que la ruta del servidor 
        //es:'/api/customer/ListaGeneros' y devuelve los géneros en un formato JSON
        axios.get('/api/customer/ListaGeneros')
        
            .then((response) => {
                setGeneros(response.data);
            })
            .catch((error) => {
                console.error('Error al obtener los géneros:', error);
            });
    }, []); // El segundo argumento vacío hace que esta llamada se realice solo una vez al cargar el componente

    return (
        <FormGroup>
            <Label>Género</Label>
            <Input
                type="select"
                name="genero"
                onChange={(e) => onChange(e.target.value)}
                value={value}
            >
                <option value="">Seleccionar</option>
                {generos.map((genero) => (
                    <option key={genero.id} value={genero.nombre}>
                        {genero.nombre}
                    </option>
                ))}
            </Input>
        </FormGroup>
    );
};

export default SexoDropdown;
