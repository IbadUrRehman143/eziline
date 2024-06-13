import "../css/card3-section.css";
import work1 from "../images/work-1.jpg";
import work2 from "../images/work-2.jpg";
import work3 from "../images/work-3.jpg";
import work4 from "../images/work-4.jpg";


export function SecondCardSection(){
    return (
        <div className="second-card-section">
        <div className="project-text">
            <div></div>
            <div>PRICING</div>
            <div></div>
        </div>
        <h2>PRICE & PLAN</h2>

        <div className="card3-section">
            <div>
                <img src={work1} alt="" width="300px" height="180px"/>
                <ul>
                    <li><i className="fas fa-check-circle"></i>Planning Solution</li>
                    <li><i className="fas fa-check-circle"></i>10 Construction Drawings</li>
                    <li><i className="fas fa-check-circle"></i>Selection Materials</li>
                    <li><i className="fas fa-check-circle"></i>Unlimited Revision</li>
                </ul>
                <div className="price">
                    <span className="left">
                        <sup>$</sup>
                        <span className="number">78</span>
                        <sub>/mos</sub>
                    </span>
                    <a href="#" className="btn">Get Started</a>
                </div>
            </div>
            <div>
                <img src={work2} alt="" width="300px" height="180px"/>
                <ul>
                    <li><i className="fas fa-check-circle"></i>Planning Solution</li>
                    <li><i className="fas fa-check-circle"></i>10 Construction Drawings</li>
                    <li><i className="fas fa-check-circle"></i>Selection Materials</li>
                    <li><i className="fas fa-check-circle"></i>Unlimited Revision</li>
                </ul>
                <div className="price">
                    <span className="left">
                        <sup>$</sup>
                        <span className="number">78</span>
                        <sub>/mos</sub>
                    </span>
                    <a href="#" className="btn">Get Started</a>
                </div>
            </div>
            <div>
                <img src={work3} alt="" width="300px" height="180px"/>
                <ul>
                    <li><i className="fas fa-check-circle"></i>Planning Solution</li>
                    <li><i className="fas fa-check-circle"></i>10 Construction Drawings</li>
                    <li><i className="fas fa-check-circle"></i>Selection Materials</li>
                    <li><i className="fas fa-check-circle"></i>Unlimited Revision</li>
                </ul>
                <div className="price">
                    <span className="left">
                        <sup>$</sup>
                        <span className="number">78</span>
                        <sub>/mos</sub>
                    </span>
                    <a href="#" className="btn">Get Started</a>
                </div>
            </div>
        </div>
        <div className="third-card-section">

            <div className="project-text">
                <div></div>
                <div>BLOGS</div>
                <div></div>
            </div>
            <h2>Recent Blogs</h2>
        </div>
        <div className="card4-section">
            <div>
                <img src={work1} alt="" width="250px" height="250px"/>
                <div className="meta mb-3 display">
                    <div><a href="#">June 01, 2020</a></div>
                    <div><a href="#">Admin</a></div>
                    <div><a href="#" className="meta-chat"><span className="fa fa-comment"></span> 3</a></div>
                </div>
                <h3 className="heading"><a href="#">Make Peace With Your <br/>Broken Pieces</a></h3>

            </div>
            <div>
                <img src={work2} alt="" width="250px" height="250px"/>
                <div className="meta mb-3 display">
                    <div><a href="#">June 01, 2020</a></div>
                    <div><a href="#">Admin</a></div>
                    <div><a href="#" className="meta-chat"><span className="fa fa-comment"></span> 3</a></div>
                </div>
                <h3 className="heading"><a href="#">Make Peace With Your <br/> Broken Pieces</a></h3>
            </div>
            <div>
                <img src={work3} alt="" width="250px" height="250px"/>
                <div className="meta mb-3 display">
                    <div><a href="#">June 01, 2020</a></div>
                    <div><a href="#">Admin</a></div>
                    <div><a href="#" className="meta-chat"><span className="fa fa-comment"></span> 3</a></div>
                </div>
                <h3 className="heading"><a href="#">Make Peace With Your <br/>Broken Pieces</a></h3>
            </div>
            <div>
                <img src={work4} alt="" width="250px" height="250px"/>
                <div className="meta mb-3 display">
                    <div><a href="#">June 01, 2020</a></div>
                    <div><a href="#">Admin</a></div>
                    <div><a href="#" className="meta-chat"><span className="fa fa-comment"></span> 3</a></div>
                </div>
                <h3 className="heading"><a href="#">Make Peace With Your <br/> Broken Pieces</a></h3>
            </div>
        </div>

    </div>
    )
}