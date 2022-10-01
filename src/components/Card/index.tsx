import fotografo from '../Img/fotografo.png'
import "./style.css";
export const Card = () => {
    return (
        <>
        
            <div className="texto">
                <h1>SEJA BEM-VINDO</h1>
                <br />
                <h3>APAIXONADO POR FOTOGRAFIA</h3>
              
               <h5>Sempre fui apaixonado por fotografias, quando menor fazia câmeras de papelão e brincava<p> 
                de tirar fotos da fazenda da minha vó por não ter condição, não pude começar com câmeras profissionais no <p> no 
                começo de carreira, mas ao decorrer do tempo, consegui ganhei uma e comecei.</p></p></h5> 
                <br/>
                 <img src={fotografo} alt="fotografo" id='fotografo' />
                <br/><br/><br/>
                <h3>UM POUCO SOBRE MEU TRABLHO</h3>
                <h5>Começei aos 14 anos com minha primeira câmera digital, que ganhei de minha vó foi por ela <p>que arrumei meu primeiro trabalho, 
                 com o dinheiro eu comprei outras câmeras <p>e continue a carreira de fotógrafo 
                e estou até hoje com vários clientes. </p> </p></h5>
                <br />
            </div>
        </>
    )
};
