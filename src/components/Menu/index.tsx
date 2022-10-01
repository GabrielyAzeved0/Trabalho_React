import { Link } from "react-router-dom";
import img from '../Img/camera.png'
import "./style.css";
export const Menu = () => {
    return (
        <>
            <header>
                <div className='imagem'>
                <Link to="/"><img src={img} alt="img"/></Link>
                </div>
                <nav className='menu'>
                    <ul>   
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/servicos">Serviços</Link></li>
                        <li><Link to="/contatos">Contatos</Link></li>
                    </ul>
                </nav>

            </header>

        </>
    )
};
