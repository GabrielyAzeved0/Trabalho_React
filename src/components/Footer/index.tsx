import "./style.css";
import insta from '../Img/insta.png'
import whats from '../Img/whats.png'
import facebook from '../Img/facebook.png'
export const Footer = () => {
    return (
        <>
            <div className='form'>
                <form id='formulario'> 
                
                    <fieldset>
                       <h2>Para mais informações:</h2>
                       <br />
                        <label>
                            <span> Nome </span>
                            <input id='botao' type="text" />
                        </label>
                        <br /> <br />
                        <label>
                            <span> Email </span>
                            <input id='botao' type="text" />
                        </label>
                        <br /><br />
                        <span> Mensagem: </span>
                        <br />
                        <textarea name="msg" id="msg" >  </textarea>
                        <br />
                        <button type="button" id="enviar" >Enviar</button>
                    </fieldset>
                    
                </form>
            </div>
            <footer>
                <img src={insta} alt="insta" width="35" />
                <img src={whats} alt="insta" width="35" />
                <img src={facebook} alt="insta" width="35" />
            </footer>
        </>
    )
};
