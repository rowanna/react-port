import React from 'react';
import Header from '../components/Header';
import './About.scss';


function AboutText({title, image, desc}){
    return (
        <div>
            <div className="aiLeft">
               <img src={image} alt={title} />
            </div>
            <div className="aiRight">
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
            
        </div>
    )
}


const aboutMe = [
    {
        id: '1',
        title: 'Becoming Web Publisher',
        desc: '꾸준함과 견고함의 힘을 믿는, 퍼블리셔가 되고 싶은 나원지입니다. 튼튼한 벽돌로 빈틈없이 견고하게 지어진 집은 위기 상황이 와도 무너지지 않으며 굳건히 자신의 자리를 지킵니다. 저 또한 늘 그랬듯이 꾸준히 새로운 기술과 지식을 습득하고 견고하게 쌓아온 기본기를 활용하여 나날이 발전해가는 웹 분야에서 한 부분에 기여하고 싶습니다.',
        image: 'https://rowanna.github.io/react-port/public/img/aboutImg01.jpg'
    },
    {
        id: '2',
        title: 'React site',
        desc: '해당 사이트는 리액트로 만들어진 사이트입니다. 뿐만 아니라 scss를 활용하여 가독성을 고려한 style sheet를 작성하였습니다. ',
        image: 'https://rowanna.github.io/react-port/public/img/aboutImg02.jpg'
    }
];



function About(){
    return (
        <div id="wrap">
            <Header color="gray" />
            <main id="main">
                <section id="aboutCont">
                    <div className="container">
                        <h1 className="contTitle" aria-label="About me">
                            <span aria-hidden="true">About</span>
                            <span aria-hidden="true">AND . . .</span>
                        </h1>

                        <section className="aboutImg">
                            {aboutMe.map((txt) => (
                                <AboutText number={txt.id} key={txt.id} title={txt.title} image={txt.image} desc={txt.desc} />
                            ))}
                        </section>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default About;