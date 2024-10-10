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
                <h2>Custom Popup Modal</h2>
                <button onClick={handlePopup} className='modalButton'>Open Modal</button>
                {showPopup && <ModalContent handlePopup={handlePopup} header={<div>This is Header</div>} body={<div>This is a <h3>Popup</h3></div>} footer={<div>This is Footer</div>} />}
            </div>
        </section>
    )
}

export default Modal