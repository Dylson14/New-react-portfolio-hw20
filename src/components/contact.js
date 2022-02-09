import React from "react";
import '../Contact.css';

export default function Contact() {
    return (
        <div className="landing-grid">
                <div class="inner contact top-padding">
                <div class="contact-form">
                    <form id="contact-us" method="post" action="#">
                        <div class="col-xs-6 wow animated slideInLeft" data-wow-delay=".5s">
                            <input type="text" name="name" id="name" required="required" class="form" placeholder="Name" />
                            <input type="email" name="mail" id="mail" required="required" class="form" placeholder="Email" />
                            <input type="text" name="subject" id="subject" required="required" class="form" placeholder="Subject" />
                        </div>
                        <div class="col-xs-6 wow animated slideInRight" data-wow-delay=".5s">
                            <textarea name="message" id="message" class="form textarea"  placeholder="Message"></textarea>
                        </div>
                        <div class="relative fullwidth col-xs-12">
                            
                            <button type="submit" id="submit" name="submit" class="form-btn semibold">Send Message</button> 
                        </div>
                        <div class="clear"></div>
                    </form>

                    <div class="mail-message-area">
                        <div class="alert gray-bg mail-message not-visible-message">
                            <strong>Thank You !</strong> Your email has been delivered.
                        </div>
                    </div>

                </div>
            </div>


        </div>
    
        )
}