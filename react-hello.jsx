import React, {Component} from 'react';

class ReactHello extends Component {
    constructor(props) {
        super(props);
        console.log("-------constructor--------");
        console.log(props);
    }

    componentDidMount() {
        console.log("------componentDidMount-------");
        console.log(this.props);
    }

    componentDidUpdate(prevProps) {
        console.log("------componentDidUpdate-------");
        console.log(this.props);
    }

    render() {
        const {message, onMessageChange} = this.props;

        return <div>
            React: <input type="text" value={message} onChange={(event) => onMessageChange(event.target.value)}/>
        </div>;
    }
}

export default ReactHello;
