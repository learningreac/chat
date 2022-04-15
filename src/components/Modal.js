import SignInForm from "./SignInForm";

const Modal = ({setUser}) => {
    return (
        <div className="spa-shell-modal" >
            <SignInForm setUser={setUser}/>
        </div>
    )
};

export default Modal;

//style={{display:'none'}}