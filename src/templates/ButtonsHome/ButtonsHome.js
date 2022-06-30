import './Templates.css';
import { Button } from 'reactstrap';

function ButtonsHome() {
    return (
        <div className='mobile'>
            <h1>
                Em que posso te ajudar?
            </h1>
            <div className='mb-2'>
                <button className='cliente'>
                    Estou em busca de procedimentos
                </button>
            </div>
            <p>
                <button className='profissional'>
                    Sou profissional da área
                </button>
            </p>
        </div>
    );
}

export default ButtonsHome;