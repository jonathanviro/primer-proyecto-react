import { useState } from 'react';
import { AgregarTarea } from './components/AgregarTarea';

const Item = ({ nombre, visto }) => {
    return (
        <li>
            {nombre} {visto ? '✅' : '❌'}
        </li>
    );
};

export const ListadoApp = () => {
    let listadoSecciones = [
        { id: 1, nombre: 'Instalaciones', visto: true },
        { id: 2, nombre: 'Uso de Vite', visto: true },
        { id: 3, nombre: 'Componentes', visto: true },
        { id: 4, nombre: 'Variables en JSX', visto: true },
        { id: 5, nombre: 'Pprops', visto: true },
        { id: 6, nombre: 'Eventos', visto: true },
        { id: 7, nombre: 'useState', visto: true },
        { id: 8, nombre: 'Redux', visto: false },
        { id: 9, nombre: 'cusntomHooks', visto: false },
    ];

    const [arreglo, setArreglo] = useState(listadoSecciones);

    const onAgregarTarea = (val) => {
        if (!val) return 
        
        const tarea = {
            id: arreglo.length + 1 ,
            nombre: val.trim(),
            visto: false,
        };

        setArreglo([...arreglo, tarea]);
    };

    return (
        <>
            <h1>Listado de Temas del Curso</h1>
            <AgregarTarea addTarea={onAgregarTarea} />
            <ol>
                {arreglo.map((item) => (
                    <Item key={item.id} nombre={item.nombre} visto={item.visto}></Item>
                ))}
            </ol>
        </>
    );
};
