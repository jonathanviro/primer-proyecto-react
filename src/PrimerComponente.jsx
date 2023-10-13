import './PrimerComponente.css'

const string = 'Esto es un texto';
const number = 12345;
const array = ['Curso de react', 3, 1.5252];
const boolean = true;
const funcion = () => 1 + 1;
const objeto = { nombre: 'Jonathan', edad: 26 };
const fecha = new Date();

export const PrimerComponente = () => {
    return (
        <>
            <h1>Tipos variables</h1>
            <h4>Tipo String</h4>
            <p>{string}</p>
            <h4>Tipo number</h4>
            <p>{number}</p>
            <h4>Tipo array</h4>
            <p>{array}</p>
        </>
    );
};
