import React from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import './Site.scss';




function Site() {
    return (
        <div id="wrap">
            <Header color="gray" />
            <main id="main">
                <section id="referCont">
                    <div className="container">
                        <div>
                            <Title text={['my', 'web site', 'my web site']} />
                        </div>

                    </div>
                </section>
            </main>
        </div>
    )
}


export default Site;