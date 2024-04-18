import logo_conveniente from './assets/conveniente.png';
import logo_luvia from './assets/lluvia-de-ideas.png';
import logo_co2 from './assets/co2-2.png';
import logo_ahorrar from './assets/ahorrar-dinero.png';

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
                <IconComponent photo={logo_conveniente} text="Ofrece un calor más cómodo y personalizable, ofrece un servicio más, premium." altext="find me now" />
                <IconComponent photo={logo_luvia} text="Tecnología de infrarrojo lejano, bajo voltaje y beneficioso para la salud." altext="find me now" />
                <IconComponent photo={logo_co2} text={<><span>¿Estas comprometido con el planeta?</span> <br/> <span>Reduce tu huella de carbono.</span></>} altext="find me now" />
                <IconComponent photo={logo_ahorrar} text="Ahorra evitando tener que pagar la sustitución de bombonas de butano o elevadas facturas de luz." altext="find me now" />
            </div>
        </div>
    )
}


