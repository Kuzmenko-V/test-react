import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
const modalRoot = document.querySelector('#modal-root')

class Modal extends Component {
    
    componentDidMount() {
        window.addEventListener('keydown', this.keyDowmModal);
    };
    componentWillUnmount() {
        window.removeEventListener('keydown', this.keyDowmModal);
    };
    keyDowmModal = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    };
    clickFoOverlay = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    };
    render() {
        return createPortal(
            <div className="Overlay" onClick={this.clickFoOverlay}>
                <div className="Modal">
                    {this.props.children}
                </div>
            </div>
            ,
            modalRoot
        );
    }
}

 Modal.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func
};

export default Modal;
