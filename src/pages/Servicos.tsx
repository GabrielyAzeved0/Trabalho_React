import React from "react";
import { Link } from "react-router-dom";
import img1 from "../components/Img/1.jpg"
import img2 from "../components/Img/2.jpg"
import img3 from "../components/Img/3.jpg"
import img4 from "../components/Img/4.jpg"
import img5 from "../components/Img/5.jpg"
import img6 from "../components/Img/6.jpg"
import img7 from "../components/Img/7.jpg"
import img8 from "../components/Img/8.jpg"
import img9 from "../components/Img/9.jpg"
import img10 from "../components/Img/10.jpg"
import seta from "../components/Img/seta.png"


import "./style.css";

export const Servico = () => {
    return (
        <> <div className="parteum">
            <h2>Casamentos</h2>
            <img src={img1} alt="1" id="um" />
            <img src={img2} alt="2" id="dois" /> 
            <img src={img3} alt="3" id="tres" />
            <img src={img4} alt="4" id="quatro" />
            <img src={img5} alt="5" id="cinco" />
        </div>
            <br /><br /><br />
            <div className="partedois">
                <h2>Aniversários</h2>
                <img src={img6} alt="6" id="seis" />
                <img src={img7} alt="7" id="sete" />
                <img src={img8} alt="8" id="oito" />
                <img src={img9} alt="9" id="nove" />
                <img src={img10} alt="10" id="dez" />
            </div>
        <div className="avançar">
        <Link to="/Contatos"><img src={seta} alt="seta" /></Link>
            
        </div>
            
        </>
    );
};