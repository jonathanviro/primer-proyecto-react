import { useState } from 'react';

export const AgregarTarea = ({ addTarea }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault()
        addTarea(inputValue);
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                tye="text"
                placeholder="Ingrese tarea nueva"
                value={inputValue}
                onChange={onInputChange} />
        </form>
    );
};
