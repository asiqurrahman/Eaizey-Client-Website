import { motion } from "framer-motion"

const Contact = () => {
    return (
        <motion.div className="contactholder"
        initial={{opacity: 0, translateY: -300}} 
        animate={{opacity: 1, translateY: 0}} 
        transition={{duration: .5}}
        >
            <div class="form" id="form">
                <div class="forminner">
                    <div class="formheader">
                        <h2>Contact Us</h2>
                    </div>
                    <div class="formcontent">
                        <form action="https://formspree.io/f/mbjqvqzo" method="POST" id="my-form">
                            <div class="contactname">
                                <div class="form-group">
                                    <label for="firstName">First Name</label>
                                    <br />
                                    <input type="text" id="firstName" name="First Name" placeholder="First Name" required />
                                </div>
                                <div class="form-group">
                                    <label for="latsName">Last Name</label>
                                    <br />
                                    <input type="text" id="lastName" name="Last Name" placeholder="Last Name" required />
                                </div>
                            </div>
                            <div class="contactinfo">
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <br />
                                    <input type="email" id="email" name="Email" placeholder="Email" required />
                                </div>
        
                                <div class="form-group">
                                    <label for="Company Name:">Company Name:</label>
                                    <br />
                                    <input type="text" id="lastName" name="Company Name"  placeholder="Company Name" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="massage">Reason For Inquiry:</label>
                                <br />
                                <textarea name="massage" id="massage" cols="30" rows="10" required></textarea>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Contact
