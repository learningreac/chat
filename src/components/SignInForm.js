import { useState } from "react";
import '../css/spa.login.css';

/**
 * uncontrolled form
 * @returns 
 */

const Notification = ({ islogin, setIsLongin }) => {
    if (islogin === false) return null;
    setTimeout(() => {
        setIsLongin(false);//////
    }, 5000)
    return (
        <div>User is successfully logged in</div>
    )
};



const RenderForm = ({ handleSubmit }) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input name="user_input" />
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}
const SignInForm = ({ is_Login, set_Is_Longin, set_User }) => {

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        const user_input_name = event.target.user_input.value;
        event.target.user_input.value = "";
        set_User(user_input_name);
        set_Is_Longin(true);
    };


    if (is_Login === true) return null;

    return (
        <div className="login-form">
            <div className="title">Sign In</div>
            <RenderForm handleSubmit={handleSubmit} />
            <p style={{"font-style": "italic"}}>Example: try 'Mike' or 'Betty'</p>
        </div>
    )
};

export default SignInForm;

//<Notification islogin={islogin} setIsLongin = {setIsSubmitted} />