import React, { Component } from 'react';

class LifeCycleSample extends Component {

    state = {
        number:0, color:null,
    }

    myRef = null; // ref를 설정할 부분

    constructor(props){
        super(props);
        console.log('constructor');
    }
    // props로 받아 온 값을 state에 동기화 시키는 용도로 사용
    // 컴포넌트가 마운트될때와 업데이트 될때 호출된다.
    static getDerivedStateFromProps(nextProps, prevState){
        console.log('getDerivedStateFromProps');
        if(nextProps.color !== prevState.color){
            return {color:nextProps.color};
        }
        return null;
    }

    // 컴포넌트를 만들고 첫 렌더링을 다 마친후 실행.
    comoponentDidMount(){
        console.log('conmponentDidMount');
    }

    // 이것은 props 또는 state를 변경했을때, 리랜더링을 시작할지 여부를 지정하는 메서드
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate', nextProps, nextState);
        // 숫자의 마지막 자리가 4면 리렌더링 하지 않습니다.
        return nextState.number % 10 !== 4;
    }

    // 컴포넌트를 DOM에서 제거할 때 실행
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    handClick = () => {
        this.setState({number:this.state.number + 1});
    }

    // render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출 ex)스크롤바 위치 유지
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate');
        if(prevProps.color !== this.props.color){
            return this.myRef.style.color;
        }
        return null;
    }

    // 리렌더링을 완료한후 실행
    componentDidUpdate(prevProps, prevState, snapShot){
        console.log('componentDidUpdate',prevProps,prevState);
        if(snapShot){
            console.log('업데이트되기 직전 색상 : ', snapShot);
        }
    }

    render() {
        console.log('render');
        const style = {
            color:this.props.color
        };
        return (
            <div>
                {this.props.missing.value}
                <h1 style={style} ref={ref=>this.myRef=ref}>
                    {this.state.number}
                </h1>
                <p>color : {this.state.color}</p>
                <button onClick={this.handClick}>
                    더하기
                </button>
            </div>
        );
    }
}

export default LifeCycleSample;