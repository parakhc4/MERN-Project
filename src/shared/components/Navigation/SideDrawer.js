import React from 'react';
import ReactDOM from 'react-dom';
import {CSSTransition} from 'react-transition-group';


import './SideDrawer.css';


const SideDrawer = props =>{
     const content = 

   //   
     <CSSTransition 
     in = {props.show} //show has been passed from SideDrawer to props where we passed drawerIsOpen inside it
     timeout={200} 
     classNames="slide-in-left" 
     mountOnEnter = {true}
     unmountOnExit = {true} >
         <aside className="side-drawer" onClick={props.onClick}>
            {props.children}
         </aside>
     </CSSTransition>
     return ReactDOM.createPortal(content,document.getElementById('drawer-hook'));

};

export default SideDrawer;