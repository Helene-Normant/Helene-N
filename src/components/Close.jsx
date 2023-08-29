import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const Close = ({ onClose }) => {
    return (
        <button className='close-modal-button text-medium text-3xl' onClick={onClose}>
            <AiOutlineClose />
        </button>
    );
};

export default Close;