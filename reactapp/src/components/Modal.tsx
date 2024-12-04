import classes from './Modal.module.css';
function Modal({children}){
    return(
        <>
        <div className={classes.backdrop} onClick={children.onClose}/>

        
        <dialog className={classes.modal}>{children}</dialog>
        </>
    );
}
export default Modal;