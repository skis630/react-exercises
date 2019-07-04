class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: this.props.isChecked
        };
        this.check = this.check.bind(this);
    }

    check() {
        this.setState({isChecked: !this.state.isChecked})
    }

    render() {
        return (
            <div>
                <input id={this.props.id} type="checkbox" checked={this.state.isChecked} onClick=
                       {this.check} />
                <label htmlFor={this.props.is}>{this.props.text}</label>
            </div>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: true
        }
    }

    render() {
        return (
            <div>
                <Checkbox id="check1" isChecked={false} text="I read the term of the app" />
                <Checkbox id="check2" isChecked={false} text="I accept the term of the app" />
                <Checkbox id="check3" isChecked={true} text="I want to get the weekly news letter" />
                <Checkbox id="check4" isChecked={true} text="I want to get adjusted" />
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);