import React from 'react';
import Header from '../components/Header';
import './Main.scss';

function Main(){
    return (
        <div id="wrap">
            <Header />
            <main id="main">
                <section id="mainCont">
                    <div className="mainTxet">
                        <div>BECOMING</div>
                        <div>WEB</div>
                        <div>PUBLISHER.</div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Main;