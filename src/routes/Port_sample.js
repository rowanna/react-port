import React from 'react';


class Port extends React.Component {
    constructor(props){
        super(props);
        console.log("constructor()");
    }


    state = { //변수 설정 
        count : 0,
    }

    add = () => {
        //console.log("add");
        //this.state.count = 1;
        //this.setState({ count:1 });
        //this.setState({count : this.state.count + 1});
        this.setState( current => ({
            count : current.count + 1
        }));
    }

    minus = () => {
        //console.log("minus");
        //this.state.count = -1;
        //this.setState({ count:-1 });
        //this.setState({count : this.state.count - 1});
        this.setState( current => ({
            count : current.count - 1
        }));
    }

    componentDidMount(){
        console.log("componentDidMount()");
    }

    // componentDidMount : 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메서드 , 로딩이 된 후 실행되는 메서드


    componentDidUpdate(){
        console.log("componentDidUpdate()");
    }
    //화면이 업데이트가 되면 실행되는 함수

    componentWillUnmount(){
        console.log("componentWillUnmount()");
    }
    //컴포넌트가 죽을 때 실행되는 함수 입니다. 
    


    render(){
        console.log("render()");
        return (
            <div>
                <h1>portfolio {this.state.count}</h1>
                <button onClick={this.add}>add</button>
                <button onClick={this.minus}>minus</button>
            </div>
        )
    }
}


export default Port;