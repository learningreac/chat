import HeadLogo from "./HeadLogo";
import HeadAcct from "./HeadAcct";



const Head = ({is_Login,login_user}) => {

    return (
        <div className="spa-shell-head">
            <HeadLogo />
            <HeadAcct is_Login={is_Login} login_user={login_user}/>
           
        </div>
    )
};

export default Head;

//import Search from "./HeadSearch";
// <Search />