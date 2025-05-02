import React from "react";
import ReactDOM from 'react-dom';
import './Modal.css';
import { CSSTransition } from "react-transition-group";

import Backdrop from './Backdrop';

const ModalOVerlay = props => {
    const content = (
    <div 
    className = {`modal ${props.className}`} 
    style={props.style}>
        <header className = {`modal__header ${props.headerClass}`}>
            <h2>{props.header}</h2>
        </header>
        <form onSubmit = {props.onSubmit?props.onSubmit:event => event.preventDefault()}>
        {/* Basically using a conditional statement to bind onSubmit to props.onSubmit function
        And if there's no onSubmit function, just bind it to event.preventDefault which prevents default behavior */}
            <div className = {`modal__content ${props.ContentClass}`}>
                {props.children}
            </div>
            
            <footer className = {`modal__content ${props.footerClass}`}>
                {props.footer}
            </footer>
        </form>
    </div>

        
    );
    return ReactDOM.createPortal(content,document.getElementById('modal-hook'));
};

const Modal = props => {
    return <React.Fragment>
        {/* BackDrop is used so that when I click off anywhere where there is not a dropdown, it shud close */}
        {props.show && <Backdrop onClick = {props.onCancel}/>}
        <CSSTransition 
        in = {props.show}
        mountOnEnter={true}
        unmountOnExit={true}
        timeout={200}
        classNames="modal"
        >
            {/*  {...props} basically passes all props passed to parents ot this child*/}
            <ModalOVerlay {...props}/>
        </CSSTransition>
    </React.Fragment>
};


export default Modal;