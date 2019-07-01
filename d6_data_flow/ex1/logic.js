class App extends React.Component {
    constructor() {
        super();
        this.state = {
            username: null
        }
        this.changeUsername = this.changeUsername.bind(this);
    }

    changeUsername(e) {
        let newUSername = 
        this.setState({
            username: e.target.value
        });
    }

    render() {
        return (
            <div>
                <Input handleChange={e => this.changeUsername(e)}></Input>
                <p>{this.state.username}</p>
            </div>
        )
    }
}

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.updateUSername = this.updateUSername.bind(this);
        this.state = {
            value: null
        }
    }

    updateUSername(e) {
        this.props.handleChange(e);
    }

    render() {
        return (
            <div>
                <label htmlFor="username">Select a username</label>
                <input type="text" id="username" onChange={e => this.updateUSername(e)} />
            </div>
            
        )
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById("root")
);