import { useState } from "react";
import '../css/spa.login.css';

/**
 * uncontrolled form
 * @returns 
 */
const SignInForm = ({setUser}) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        const user_input_name = event.target.user_input.value;
        event.target.user_input.value = "";
        console.log('input',user_input_name);
        setUser(user_input_name);
    };

   



    const renderForm = (
        <div>
            <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input name="user_input" />
                    <button type="submit">Sign In</button>
            </form>
        </div>

    );

    return (
        <div className="login-form">
            <div className="title">Sign In</div>
            {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        </div>
    )
};

export default SignInForm;