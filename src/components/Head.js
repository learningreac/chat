import HeadLogo from "./HeadLogo";
import HeadAcct from "./HeadAcct";



const Head = ({login_user}) => {

    return (
        <div className="spa-shell-head">
            <HeadLogo />
            <HeadAcct login_user={login_user}/>
           
        </div>
    )
};

export default Head;

//import Search from "./HeadSearch";
// <Search />