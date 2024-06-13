import "../css/next_section.css";
import about from "../images/about.jpg";

export function NextSection() {
    return (
        <div className="next-section">
            <h2>ArchLab</h2>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
                paradisematic country, in which roasted parts of sentences fly into your mouth. <br /><br /><br />
                On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been
                rewritten a thousand times and everything that was left from its origin would be the word "and" and the
                Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could
                convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with
                Longe and Parole and dragged her into their agency, where they abused her for their.</p>
            <img className="img1" src={about} width="400px" height="600px" />
            <div className="img2">
                <h3>Be Part Of Your Business</h3>
                <h2>Request A Quote</h2>
                <input type="text" placeholder="First Name" />
                <hr />
                <input type="text" placeholder="Last Name" />
                <hr />
                <input type="text" placeholder=" Select Your Service" />
                <hr />
                <input type="text" placeholder="Phone" />
                <hr />
                <input type="text" placeholder=" Message" />
                <hr />
                <button>Request A Quote</button>
                <hr />
            </div>
        </div>
    )
}