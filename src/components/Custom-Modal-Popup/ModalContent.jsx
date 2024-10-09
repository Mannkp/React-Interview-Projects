
function ModalContent({ id = "ModalItem", header, body, footer }) {
    return (
        <div className="modal" id={id}>
            {header && <header>{header}</header>}
            {body && <div className="ModalItemBody">{body}</div>}
            {footer && <footer>{footer}</footer>}
        </div>
    )
}

export default ModalContent