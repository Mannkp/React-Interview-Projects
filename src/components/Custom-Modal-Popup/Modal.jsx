import ModalContent from './ModalContent';
import './style.css';
import { useCallback, useState } from "react"

const Modal = () => {

    const [showPopup, setShowPopup] = useState(false);

    const handlePopup = useCallback(() => {
        setShowPopup(!showPopup);
    }, [showPopup]);

    return (
        <section className='customModal'>
            <div>
                <button onClick={handlePopup}>Open Modal</button>
                {showPopup && <ModalContent body={<div>This is a <h3>Popup</h3></div>} />}
            </div>
        </section>
    )
}

export default Modal