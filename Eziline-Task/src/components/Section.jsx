import "../css/section.css";
import chain from "../images/chain.png"
import couple from "../images/couple.png"
import budget from "../images/budget.png"
import home from "../images/home.png"


export function Section() {
    return (
        <div className="section">
            <div className="a">
                <img src={chain} width="55px" height="55px" />
                <h2>Design Process</h2>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
            <div className="b">
                <img src={couple} width="55px" height="55px" />
                <h2>Supervision</h2>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
            <div className="c">
                <img src={budget} width="55px" height="55px" />
                <h2>Budget Planning</h2>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
            <div className="d">
                <img src={home} width="55px" height="55px" />
                <h2>Build a Home </h2>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
        </div>
    )
}