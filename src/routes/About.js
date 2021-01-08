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
        image: '../img/aboutImg01.jpg'
    },
    {
        id: '2',
        title: '열심히 할수록 기회는 따른다.',
        desc: '운이 좋은 사람은 없다. 단지 운을 만들 뿐이다. 운을 만들기 위해서는 내가 좋아하는 일이나 내가 하고 싶은 일에 몰두하면 된다. 몰두 하다보면 길이 보이고 방향이 보이게 된다. 운이란 고된 노동과 노력을 통해 스스로 만들어 내는 것이다. 복권에 당첨되는 사람들은 금방 돈을 허비하게 된다. 단지 행운만 좋았기 때문이다. 운을 만든 사람은 돈을 날려먹거나 헛되게 쓰지 않는다. 열심히 할수록 운은 나에게 온다.',
        image: '../img/aboutImg02.jpg'
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