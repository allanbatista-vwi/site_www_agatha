import './Templates.css';
import { Button } from 'reactstrap';

function ButtonsHome() {
    return (
        <div>
            <h1>
                Em que posso te ajudar?
            </h1>
            <p>
                <button className='cliente'>
                    Estou em busca de procedimentos
                </button>
            </p>
            <p>
                <button className='profissional'>
                    Sou profissional da área
                </button>
            </p>
        </div>
    );
}

export default ButtonsHome;