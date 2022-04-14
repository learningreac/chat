const HeadAcct = ({ login_user }) => {
    if (!login_user) {
        return <div className="spa-shell-head-acct"> Sign In</div>
    }
    return (
        <div className="spa-shell-head-acct"> {login_user}</div>
    )
};

export default HeadAcct;