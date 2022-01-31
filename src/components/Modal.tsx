interface ModalProps {
    show: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
const Modal: React.FC<ModalProps> = (props) => {
    if (!props.show) return null
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-md mx-auto rounded shadow-lg p-6 relative">
                <button onClick={props.onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                    <i className="fas fa-times text-2xl"></i>
                </button>
                {props.children}
            </div>
        </div>
    )
}

export default Modal;