import React from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import './Script.scss'

function Youtube() {
    return (
        <>
            <Header color="gray" />
            <main id="main">
                <section id="youtubeCont">
                    <div className="container">
                        <Title text={['script', 'works', 'script works']} />

                        <div className="siteWrap">
                            <div className="site">
                                <div className="siteLeft">
                                    <h2>Image Slide</h2>
                                </div>
                                <div className="siteRight">
                                    <iframe src="http://rowanna.dothome.co.kr/port/projects/imageSlide/imageSlideJS01.html" frameborder="0" scrolling="no"></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="siteWrap">
                            <div className="site">
                                <div className="siteLeft">
                                    <h2>Parallax</h2>
                                </div>
                                <div className="siteRight">
                                    <iframe src="http://rowanna.dothome.co.kr/port/projects/parallaxEffect/parallax01.html" frameborder="0" scrolling="no"></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="siteWrap">
                            <div className="site">
                                <div className="siteLeft">
                                    <h2>Mouse Effect</h2>
                                </div>
                                <div className="siteRight">
                                    <iframe src="http://rowanna.dothome.co.kr/port/projects/mouseEffect/mouseeffect-ex.html" frameborder="0" scrolling="no"></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="siteWrap">
                            <div className="site">
                                <div className="siteLeft">
                                    <h2>Chrome App</h2>
                                </div>
                                <div className="siteRight">
                                    <iframe src="http://rowanna.dothome.co.kr/port/projects/chromeApp/index.html" frameborder="0" scrolling="no"></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="siteWrap">
                            <div className="site">
                                <div className="siteLeft">
                                    <h2>Paint tool</h2>
                                </div>
                                <div className="siteRight">
                                    <iframe src="http://rowanna.dothome.co.kr/port/projects/paintJS/index.html" frameborder="0" scrolling="no"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Youtube;