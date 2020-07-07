import React from 'react';
import {CSSTransition,TransitionGroup} from 'react-transition-group'

const Resultado = (props) =>{
    
    const resultado = props.resultado;
    const nodeRef = React.useRef(null);
    const mensaje = (!resultado)? 'Elije Marca, Año y Tipo de Seguro' : 'El total es $'

    return (
        <div className="gran-total">
            {mensaje}
            <TransitionGroup component="span" className="resultado">
                <CSSTransition nodeRef={nodeRef} classNames="resultado" key={resultado} timeout={{ enter:500, exit:500} }>
                    <span ref={nodeRef}>{resultado}</span>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}

export default Resultado;