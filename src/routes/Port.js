import React from 'react';
import axios from 'axios';
import PortData from './PortData';
import Header from '../components/Header';
import Title from '../components/Title';
import Footer from '../components/Footer';
import Loading from '../components/Loading';


class Port extends React.Component {
    state = {
        isLoading: true,
        ports : []  //포트폴리오 내용이 저장될 곳
    }


    getPorts = async () => {
        const {
            data : {
                data: { ports }, //데이터 안의 ports를 가져옴
            },
        } = await axios.get("https://webstoryboy.github.io/dothome1/portfolio.json"); //데이터 가져옴
        
        this.setState({ ports, isLoading : false });
        
        
        //console.log(ports.data.data.ports);

    }

    componentDidMount(){
        setTimeout(() => {
            //this.setState({ isLoading: false });
            this.getPorts();
        },3000); //임의로 로딩시간 설정
    }

    render() {
        const { isLoading, ports } = this.state;
        return (
            <div id="wrap">
                <Header />
                {isLoading ? (
                    <Loading />
                ) : (
                    <>
                    <main id="main">
                        <section id="portCont">
                            <div className="container">
                                <div>
                                    <Title text={['Portfolio','site','Portfolio site']} />
                                </div>
                                
                                <div className="portCont">
                                    {ports.map(info => (
                                        <PortData
                                            key={info.id}
                                            id={info.id}
                                            link={info.link}
                                            image={info.image}
                                            title={info.title}
                                            category={info.category}
                                        />
                                    ))}
                                </div>
                            </div>
                        </section>
                    </main>
                    <Footer />
                    </>
                )}
                
            </div>
        )
    }
}


export default Port;