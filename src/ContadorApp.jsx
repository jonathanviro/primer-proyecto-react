import PropTypes from 'prop-types';
import { useState } from 'react';

export const ContadorApp = ({ value }) => {
    const [contador, setContador] = useState(value);

    const handleClick = () => {
        setContador(contador + 1)
    };

    return (
        <>
            <h1>Contador: </h1>
            <p>{contador}</p>
            <button onClick={handleClick}>Contador</button>
        </>
    );
};

ContadorApp.propTypes = {
    value: PropTypes.number,
};
