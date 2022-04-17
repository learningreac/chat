import SignInForm from "./SignInForm";

const Modal = ({is_Login,set_Is_Longin,set_User}) => {
    return (
        <div className="spa-shell-modal" >
            <SignInForm is_Login={is_Login} set_Is_Longin={set_Is_Longin} set_User={set_User}/>
        </div>
    )
};

export default Modal;

//style={{display:'none'}}