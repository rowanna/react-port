import React from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import './Animation.scss';

function Animation() {
    return (
        <>
            <Header color="gray" />
            <main id="main">
                <section id="youtubeCont">
                    <div className="container">
                        <Title text={['CSS','ANIMATION','CSS ANIMATION']} />

                        <div className="siteWrap">
                            <div className="site">
                                <div className="siteLeft">
                                    <h2>tail animation</h2>
                                </div>
                                <div className="siteRight">
                                    <iframe src="http://rowanna.dothome.co.kr/port/projects/ani/tail.html" frameborder="0" scrolling="no"></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="siteWrap">
                            <div className="site">
                                <div className="siteLeft">
                                    <h2>cube animation</h2>
                                </div>
                                <div className="siteRight">
                                    <iframe src="http://rowanna.dothome.co.kr/port/projects/ani/3dcube.html" frameborder="0" scrolling="no"></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="siteWrap">
                            <div className="site">
                                <div className="siteLeft">
                                    <h2>wave animation</h2>
                                </div>
                                <div className="siteRight">
                                    <iframe src="http://rowanna.dothome.co.kr/port/projects/ani/wave.html" frameborder="0" scrolling="no"></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="siteWrap">
                            <div className="site">
                                <div className="siteLeft">
                                    <h2>bar animation</h2>
                                </div>
                                <div className="siteRight">
                                    <iframe src="http://rowanna.dothome.co.kr/port/projects/ani/bar.html" frameborder="0" scrolling="no"></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="siteWrap">
                            <div className="site">
                                <div className="siteLeft">
                                    <h2>tail animation</h2>
                                </div>
                                <div className="siteRight">
                                    <iframe src="http://rowanna.dothome.co.kr/port/projects/ani/tail.html" frameborder="0" scrolling="no"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Animation;