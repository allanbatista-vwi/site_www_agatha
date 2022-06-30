import './App.css';
import ButtonsHome from './templates/ButtonsHome/ButtonsHome';
import HomeAgatha from './templates/HomeAgatha/HomeAgatha';
import Header from './templates/navBar/Header';


function App() {
    return (
            <div className='container-flex bg-padrao'>
                <div>
                    <ButtonsHome/>
                </div>
                <div>
                    <HomeAgatha/>
                </div>
            </div>
    );
}

export default App;
 