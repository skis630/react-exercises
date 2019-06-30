class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: ""
        }
        this.disable = this.disable.bind(this);
    }

    disable() {
        let status = this.state.disabled ? "" : "disabled";

        this.setState({disabled: status});
    }

    render() {
        return (
            <button type="button" onClick={this.disable} className={this.state.disabled}>{this.props.color}</button>
        );
    }
}

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container">
                <div className="header"></div>
                <div className="buttons">
                    <Button color="blue" />
                    <Button color="purple" />
                    <Button color="green" />
                    <Button color="red" />
                    <Button color="pink" />
                </div>
            </div>
        )
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById("root")
);