import "../css/footer.css";

export function Footer(){
    return (
        <div className="ft-color">
        <div className="footer">
            <div className="footer-section">
                <h4 className="heading-2">ArchLab.</h4>
                <p>Far far away, behind the word mountains, far from the countries.</p>
                <ul className="list">
                    <li className="ftco-animate fadeInUp ftco-animated"><a href="#"><span className="fa fa-twitter"></span></a>
                    </li>
                    <li className="ftco-animate fadeInUp ftco-animated"><a href="#"><span className="fa fa-facebook"></span></a>
                    </li>
                    <li className="ftco-animate fadeInUp ftco-animated"><a href="#"><span
                                className="fa fa-instagram"></span></a>
                    </li>
                </ul>
            </div>
            <div className="footer2-section">
                <h4 className="heading-2">Community</h4>
                <ul className="list">
                    <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Projects</a></li>
                    <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Team</a></li>
                    <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Reviews</a></li>
                    <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>FAQs</a></li>
                </ul>
            </div>
            <div className="footer2-section">
                <h4 className="heading-2">About us</h4>
                <ul className="list">
                    <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Our Story</a></li>
                    <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Meet The Team</a></li>
                    <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Careers</a></li>
                </ul>
            </div>
            <div className="footer2-section">
                <h4 className="heading-2">Company</h4>
                <ul className="list">
                    <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>About Us</a></li>
                    <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Press</a></li>
                    <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Contact</a></li>
                    <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Careers</a></li>

                </ul>
            </div>
            <div className="footer2-section">
                <h4 className="heading-2">Have a Questions?</h4>
                <ul className="list">
                    <li><span className="icon fa fa-map"></span> <span className="text">203 Fake St. Mountain
                            <br/>View, San
                            Francisco, California, USA</span></li>
                    <li><a href="#"><span className="icon fa fa-phone"></span><span className="text">+2 392 3929
                                210</span></a>
                    </li>
                    <li><a href="#"><span className="icon fa fa-envelope "></span><span
                                className="text">info@yourdomain.com</span></a></li>
                </ul>
            </div>
            <div>
            </div>
        </div>
        <div className="row">
            <p>
                <span>Copyright ©</span>
                <span> All rights reserved | This template is made with</span>
                <i className="fa fa-heart" aria-hidden="true"></i>
                <a href="https://colorlib.com" target="_blank"> by Colorlib</a>
            </p>
        </div>
    </div>
    )
}