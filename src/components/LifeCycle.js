import React from 'react';

class Test extends React.Component{

    componentDidMount(){
        setTimeout(function(){alert("hello")}, 2000)
    }
    render(){
        return (<div></div>)
    }
}

export default Test;