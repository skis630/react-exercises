class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "transparent"
        }
    }

    changeBgColor(e) {
        let newColor = e.target.innerHTML;

        this.setState({
            color: newColor
        });
    }

    render() {
        let style = {
            backgroundColor: this.state.color,
            width: "100px",
            height: "100px", 
            border: "1px solid lightgray"
        }

        return (
            <div>
                <Button color="Blue" bg={e => this.changeBgColor(e)}></Button>
                <Button color="Green" bg={e => this.changeBgColor(e)}></Button>
                <Button color="Orange" bg={e => this.changeBgColor(e)}></Button>
                <div className="box" style={style}></div>
            </div>           
        )
    }
}

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(e) {
        this.props.bg(e);
    }

    render() {
        return (
            <button onClick={e => this.handleClick(e)}>{this.props.color}</button>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);