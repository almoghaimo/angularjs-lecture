import React, {Component} from 'react';

class ReactHello extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    componentDidMount() {
        console.log("componentDidMount", this.props);
    }

    componentDidUpdate(prevProps, props) {
        console.log("almog prevProps: ", prevProps);
        console.log("almog props: ", props);
    }

    render() {
        const {message, onMessageChange} = this.props;

        return <div>
            React: <input type="text" value={message} onChange={(event) => onMessageChange(event.target.value)}/>
        </div>;
    }
}

export default ReactHello;
