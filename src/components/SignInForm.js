import { useState } from "react";
import '../css/spa.login.css';

const SignInForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
        console.log(event.target.username.value)
    }

    

    const renderForm = (

        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input name="username" />
                
                <button type="submit">Sign In</button>
                </div>
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