import "../css/slide-section.css"
import person1 from "../images/person_1.jpg";
import person2 from "../images/person_2.jpg";
import person3 from "../images/person_3.jpg";

export function SlideSection(){
    return (
        <div className="slide-section">

        <div className="project-text">
            <div></div>
            <div>TESTIMONIAL</div>
            <div></div>
        </div>
        <h2>Happy Clients</h2>

        <div className="carousal-slider">

            <div className="carousal-wraper">

                <div className="carousal">
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                        live the blind texts.</p>
                    <div className="carousal-title-wraper">
                        <img src={person2} alt=""/>
                        <div className="carousal-text">
                            <p className="title">Rogger Scott</p>
                            <p className="description">Marketting Manager</p>
                        </div>
                    </div>
                </div>

                <div className="carousal">
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                        there
                        live the blind texts.</p>
                    <div className="carousal-title-wraper">
                        <img src={person3} alt=""/>
                        <div className="carousal-text">
                            <p className="title">Rogger Scott</p>
                            <p className="description">Marketting Manager</p>
                        </div>
                    </div>
                </div>

                <div className="carousal">
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                        there
                        live the blind texts.</p>
                    <div className="carousal-title-wraper">
                        <img src={person1} alt=""/>
                        <div className="carousal-text">
                            <p className="title">Rogger Scott</p>
                            <p className="description">Marketting Manager</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="carousal-wraper">

                <div className="carousal">
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                        live the blind texts.</p>
                    <div className="carousal-title-wraper">
                        <img src={person1} alt=""/>
                        <div className="carousal-text">
                            <p className="title">Rogger Scott</p>
                            <p className="description">Marketting Manager</p>
                        </div>
                    </div>
                </div>

                <div className="carousal">
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                        there
                        live the blind texts.</p>
                    <div className="carousal-title-wraper">
                        <img src={person2} alt=""/>
                        <div className="carousal-text">
                            <p className="title">Rogger Scott</p>
                            <p className="description">Marketting Manager</p>
                        </div>
                    </div>
                </div>

                <div className="carousal">
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                        there
                        live the blind texts.</p>
                    <div className="carousal-title-wraper">
                        <img src={person3} alt=""/>
                        <div className="carousal-text">
                            <p className="title">Rogger Scott</p>
                            <p className="description">Marketting Manager</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>

    )
}