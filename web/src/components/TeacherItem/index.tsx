import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>
            <img src="https://avatars2.githubusercontent.com/u/25871372?s=460&u=38d81d3b472e2508948f3be4cf49f358a3f74582&v=4" alt="Lília Paula"/>
            <div>
                <strong>Lília Paula </strong>
                <span>Tecnologia</span>
            </div>
        </header>
        <p>
            Entusiasta das tecnologias e desenvolvimento.
            <br /><br />
            Skills: <br />
            PHP, JavaScript, ReactJS, HTML, CSS, SQL, Bootstrap. <br /><br />
            Estudando a stack: NodeJS + ReactJS + ReactNative.
            
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 77,00</strong>
            </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
        </footer>
    </article>        
    );
}

export default TeacherItem;