import HeadLogo from "./HeadLogo";
import HeadAcct from "./HeadAcct";
import Search from "./HeadSearch";


const Head = () => {

    return (
        <div className="spa-shell-head">
            <HeadLogo />
            <HeadAcct />
            <Search />
        </div>
    )
};

export default Head;