import yap from '../images/yap.png'
import company from '../images/company.png'
import {Link} from "react-router-dom";

const Navcontent = () => {
    return (
        <div>
            <div class="navcontent">
                <div id="navflex">
                    <div id="logoholder" class="animate__animated animate__slow animate__slideInLeft">
                        <img src={company}/>
                    </div>
                    <div id="navtext" class="animate__animated animate__slow animate__zoomIn animate__delay-1s">
                        <p>For all your Taxation and Accounting Needs</p>
                        <Link to="contact">
                            <button type="button" class="btn btn-primary btn-lg"><a href="#form">Contact Us</a></button>
                        </Link>
                    </div>
                </div>
                <div>
                    <img class="navbottomimage" src={yap} />
                </div>
            </div>
            <div>
            <div class="testimonals">
                <h1>Testimonials</h1>
            </div>
            <div class="reviews">
                <div class="tworeviews">
                    <div class="reviewcards">
                        <p>
                            "I found EAIZEY Consulting Inc. last year, I was looking for a new tax preparer. The
                            process was easy, I got my refund in less than two weeks. I would recommend this company. My
                            process was great."
                        </p>
                        <h2>-L. Singh</h2>
                    </div>
                    <div class="reviewcards">
                        <p>
                            "Elizabeth has been doing my personal returns since 2017 before the company's name change. My
                            experience has always been pleasant, and my returns done correctly with out issues. I have
                            recommended her to many, and they have been no complaints."
                        </p>
                        <h2>-S. Williams</h2>
                    </div>
                </div>
                <div class="tworeviews">
                    <div class="reviewcards">
                        <p>
                            "Two years, I have been getting my personal tax returns done by this company. I would highly
                            recommend this company."
                        </p>
                        <h2>-D. Benjamin</h2>
                    </div>
                    <div class="reviewcards">
                        <p>
                            "I love Eaizey Consulting Inc. last year was the first year my taxes were prepared by her. I got my
                            refund early. I recommend this company."
                        </p>
                        <h2>-S. Mickeney</h2>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Navcontent
