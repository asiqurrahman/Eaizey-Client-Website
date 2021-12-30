import unnamed from '../images/unnamed.png'
import notary from '../images/notary.jpeg'
const Services = () => {
    return (
        <div>
            <div class="services" id="services">
                <h1> OUR SERVICES</h1>
            </div>

            <div class="maincontent">
                <div class="textcontent">
                    <div id="innercontent" class="first">
                        <h2 class="text-secondary">New Business set-up</h2>
                        <hr />
                        <div>
                            <p>We can help you choose the type of business based on your intentions. You can operate as a Sole
                                - Proprietor, Partnership, Limited Liability Company, Corporation  &amp; S Corporation. As well as,
                                registration with IRS and other statutory compliance.</p>
                        </div>
                    </div>

                    <div id="innercontent" class="innercontent2 second">
                        <h1>Bookkeeping &amp; Accounting services</h1>
                        <hr />
                        <h2 class="text-secondary">Bookkeeping is an essential part of any business and with this service, we can help with the
                            preparation of:-</h2>
                        <div class="innercontent2list">
                            <p>1. Preparation of vendors invoice</p>
                            <p>2. Payments to Vendors</p>
                            <p>3. Entries for cash &amp; ACH transfers</p>
                            <p>4. Billing Customers</p>
                            <p>5. Assistance with the use of Accounting software of your choice or recommended for example QuickBooks.</p>
                            <p>6. Reconciliation of credit and Bank statements</p>
                            <p>7. Preparation of Financial Statements</p>
                        
                        </div>
                    </div>

                    <div id="innercontent" class="third">
                        <h1>Business tax returns</h1>
                        <h2 class="text-secondary">Based on the information provided we can prepare:-</h2>
                        <hr />
                        <div>
                            <p>1. Schedule C</p>
                            <p>2. Schedule E</p>
                            <p>3. Partnership Tax Return</p>
                            <p>4. Corporation Tax Return</p>
                            <p>5. S Corporation Tax Return</p>
                        </div>
                    </div>

                    <div id="innercontent" class="innercontent2 fourth">
                        <h1>Non-Profit Tax Return</h1>
                        <hr />
                        <h2 class="text-secondary">As a tax-exempt organization,  you should file a return of organization exempt from income
                            tax.  Your return is for information purposes.</h2>
                    </div>
                    <div id="innercontent" class="fifth">
                        <h1>Sales Tax</h1>
                        <hr />
                        <h2 class="text-secondary">If your business is registered for sales and tax purposes in New York State, you are required to
                            file sales and use tax returns.</h2>
                    </div>
                    <div id="innercontent" class="sixth">
                        <h1>Additional Services Provided </h1>  
                        <hr />
                        <div class="additionalservices">
                            <div class="addtext">
                                <h4>1. Notary Services</h4>
                                <img class="notaryimg" src={notary} />
                                <h4>2. <span>ITIN Application</span> By IRS Certified Acceptance Agent</h4>
                                <img class="notaryimg" src={unnamed} />
                            </div>
                            <div class="addimages">
                                <img class="notaryimg2" src={unnamed} />
                                <img class="notaryimg2" src={notary} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
