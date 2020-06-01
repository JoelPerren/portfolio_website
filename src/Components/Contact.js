import React, { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
        document.title = `Joel Perren · Contact`;
    });

    return (
        <main>
            <h2>Get in <span className="orange">Contact</span></h2>
            <p>Send me an email at joel.perren at gmail.com</p>
            <p>
                I'm also on
                <span class="inline-link bold"> <a href="//linkedin.com/in/joelperren">LinkedIn</a> </span> 
                and
                <span class="inline-link bold"> <a href="//github.com/JoelPerren">Github</a></span>.
            </p>
            <p>
                Special thanks to
                <span class="inline-link bold"> <a href="//material.io">material.io</a> </span>
                for some the icons used in this site.
            </p>
        </main>
    );
}

export default Contact;