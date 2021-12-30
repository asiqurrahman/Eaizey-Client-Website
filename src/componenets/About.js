import { motion } from "framer-motion"

const About = () => {
    return (
        <motion.div className="aboutcontainer"
        initial={{opacity: 0, translateX: -300}} 
        animate={{opacity: 1, translateX: 0}} 
        transition={{duration: .5}}
        >
            <div class="about" id="about">
                <div class="aboutheader">
                    <h1>ABOUT</h1>
                </div>
                <div class="abouttext">
                    <p>Eaizey Consulting Inc was formed to provide excellent &amp; professional services to various
                        industries and individuals.
                        We aim to help reduce tax liabilities for individuals and business by diligent preparation of
                        income tax returns. Bookkeeping &amp; Accounting services for businesses and Non-profit entities.</p>
                </div>
            </div>
        </motion.div>
    )
}

export default About
