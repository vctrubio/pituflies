import conveniente from './assets/conveniente.png';

const IconComponent = ({photo, text, altext}) => {
    return (
        <div className="icon-component">
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1em'}}>
            <img src={photo} 
            alt ={altext} 
            style={{width: "100px", height: "100px"}}
            />
            </div>
            <div className="icon-description">{text}</div>
        </div>
    )
}

export const IconDescription = () => {

    return (
        <div className="icon-d">
            <div className="icon-d-top">AQUI VA UN TEXTO GRANDE</div>
            <div className="icon-d-bottom">
                <IconComponent photo={conveniente} text="2 Ofrece un calor más cómodo y personalizable, ofrece un servicio más, premium." altext="find me now" />
                <IconComponent photo="src/assets/lluvia-de-ideas.png" text="Tecnología de infrarrojo lejano, bajo voltaje y beneficioso para la salud." altext="find me now" />
                <IconComponent photo="src/assets/co2-2.png"   text={<><span>¿Estas comprometido con el planeta?</span> <br/> <span>Reduce tu huella de carbono.</span></>} altext="find me now" />
                <IconComponent photo="src/assets/ahorrar-dinero.png" text="Ahorra evitando tener que pagar la sustitución de bombonas de butano o elevadas facturas de luz." altext="find me now" />
            </div>
        </div>
    )
}


