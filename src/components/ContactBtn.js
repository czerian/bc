import React, { useState } from 'react'
import Modal from "react-animated-modal";
import { Contact } from "./";

const ContactBtn = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
        <Modal
            visible={showModal}
            closemodal={() => setShowModal(false)}
            type="zoomIn"
        >
            <Contact/>
        </Modal>

        <div className="ContactBtn" onClick={() => setShowModal(true)}>
            <button>Say Hello | Contact Me</button>
        </div>
        </>
    )
}

export default ContactBtn
