import "../css/image-section.css"
import workImg from "../images/work-1.jpg"
export function ImageSection() {
    return (
        <>
            <div className="section-img1">
                <div className="img-div">
                    <img src={workImg} alt="" width="400px" height="700px" />
                    <div className="line"></div>
                </div>
                <div className="v">
                    <h5>EXTERIOR {12 / 7 / 2020}</h5>
                    <h1>Geometric Building</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                        blind texts. Separated they live in Bookmarksgrove.</p><br /> <br />
                    <a href="index.html">VIEW PORTFOLIO</a>
                </div>

            </div>
            <div className="section-img2">
                <div className="v">
                    <h5>FURNITURE {12 / 7 / 2020}</h5>
                    <h1>Twin Office</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                        blind texts. Separated they live in Bookmarksgrove.</p><br /> <br />
                    <a href="index.html">VIEW PORTFOLIO</a>
                </div>
                <div className="img-div">
                    <img src={workImg} alt="" width="400px" height="700px" />
                    <div className="line"></div>
                </div>

            </div>
            <div className="section-img3">
                <div className="img-div">
                    <img src={workImg} alt="" width="400px" height="700px" />
                    <div className="line"></div>
                </div>

                <div className="v">
                    <h5>Building {12 / 7 / 2020}</h5>
                    <h1>Cultural Complex Centre</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                        blind texts. Separated they live in Bookmarksgrove.</p><br /> <br />
                    <a href="index.html">VIEW PORTFOLIO</a>
                </div>

            </div>
            <div className="section-img4">
                <div className="v">
                    <h5>EXTERIOR {12 / 7 / 2020}</h5>
                    <h1>Cultural Complex Centre</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                        blind texts. Separated they live in Bookmarksgrove.</p><br /> <br />
                    <a href="index.html">VIEW PORTFOLIO</a>
                </div>
                <div className="img-div">
                    <img src={workImg} alt="" width="400px" height="700px" />
                    <div className="line"></div>
                </div>

            </div>
            <div className="section-img5">
                <div className="img-div">
                    <img src={workImg} alt="" width="400px" height="700px" />
                    <div className="line"></div>
                </div>
                <div className="v">
                    <h5>EXTERIOR {12 / 7 / 2020}</h5>
                    <h1>Twin Office</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                        blind texts. Separated they live in Bookmarksgrove.</p><br /> <br />
                    <a href="index.html">VIEW PORTFOLIO</a>
                </div>
            </div>
        </>
    )
}