const HeadAcct = ({is_Login, login_user }) => {
    if (is_Login===false) {
        return <div className="spa-shell-head-acct" onClick={f=>f}>Please Sign In</div>
    }
    return (
        <div className="spa-shell-head-acct"> {login_user}</div>
    )
};

export default HeadAcct;