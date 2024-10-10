import { ImCross } from "react-icons/im";

function ModalContent({ id = "ModalItem", header, body, footer, handlePopup }) {
    return (
        <div className="modal" id={id}>
            <div className="modalContent">
                {header && <header className="header">
                    {header}
                    <div className="closeButton"><button onClick={handlePopup}><ImCross /></button></div>
                </header>}
                {body && <div className="ModalItemBody">
                    {body}
                </div>}
                {footer && <footer>{footer}</footer>}
            </div>
        </div>
    )
}

export default ModalContent