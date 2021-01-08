import React from 'react';
import Header from '../components/Header';
import './Contact.scss'


function Contact(){
    return (
        <div>
            <Header />
            <main id="main">
                <section id="contactCont">
                    <div className="container">
                        <h1 className="contactText" aria-label="You are already doing well">
                            <span aria-hidden="true">thank you</span>
                            <span aria-hidden="true">for visiting.</span>
                        </h1>
                    </div>
                </section>
            </main>
            
            <footer id="contactFooter" role="contentinfo">
                <address className="contactInfo">
                    <div>
                        <span>email</span>
                        <span><a href="mailto:rowankimna@gmail.com">rowankimna@gmail.com</a></span>
                    </div>
                    <div>
                        <span>mobile</span>
                        <span>+82 10-8399-4972</span>
                    </div>
                </address>
            </footer>
        </div>
    )
}

export default Contact;