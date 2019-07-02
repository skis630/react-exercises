class App extends React.Component {
    constructor() {
        super();
        this.state = {
            checked: 1,
            disabled: true
        };
        this.increment = this.increment.bind(this);
        this.totalCheckedRequired = 2;
    }

    increment() {
        if (this.state.checked < this.totalCheckedRequired) {
            this.setState({
            checked: this.state.checked + 1
            });
        }
        
        this.enable();
    }

    enable() {
        if (this.state.checked === this.totalCheckedRequired) {
            this.setState({
                disabled: false
            });
        }
    }

    render() {
        return (
            <div>
                <h4>Terms of Use</h4>
                <p>bla bla</p>
                <Checkbox id="check1" checkCount={this.increment}>I have read the conditions</Checkbox>
                <Checkbox id="check2" checkCount={this.increment}>I accept all the terms</Checkbox>
                <button type="button" disabled={this.state.disabled}>Next</button>
            </div>
        )
    }
}

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.props.checkCount();
    }

    render() {
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.children}</label>
                <input id={this.props.id} type="checkbox" onChange={this.handleChange} />
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);