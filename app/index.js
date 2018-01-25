import * as React from 'react';
import {render} from 'react-dom';

class HelloWorld extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            msg : 'hello React app',
        }
    }

    render(){
        return <div>{this.state.msg}</div>;
    }
}

render(<HelloWorld />, document.getElementById('root'));