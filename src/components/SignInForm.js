import { useState } from "react";
import '../css/spa.login.css';

/**
 * uncontrolled form
 * @returns 
 */

 const Notification = ({ isSubmitted, setIsSubmitted }) => {
    if (isSubmitted === false) return null;
    setTimeout(() => {
        setIsSubmitted(false);
    }, 5000)
    return (
        <div>User is successfully logged in</div>
    )
};



const RenderForm = ({handleSubmit}) => {
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
const SignInForm = ({ setUser }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        const user_input_name = event.target.user_input.value;
        event.target.user_input.value = "";
        setUser(user_input_name);
        setIsSubmitted(true);
    };

  
       

    return (
        <div className="login-form">
            <div className="title">Sign In</div>
            <Notification isSubmitted={isSubmitted} />
            <RenderForm handleSubmit={handleSubmit}/>
        </div>
    )
};

export default SignInForm;