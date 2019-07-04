class Box extends React.Component {
    constructor(props) {
        super(props);       
    }

    handleClick(e) {
        this.props.handleClick(e);
    }

    componentWillMount() {
        console.log("Will I mount?");
    }

    componentDidMount() {
        console.log("Yes!");
    }

    render() {
        return (         
                <div className={this.props.box} onClick={e => this.handleClick(e)}>{this.props.children}</div>           
        )
    }
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            frame: "transparent"
        }
    }

    changeColor(e) {
        let newFrame = window.getComputedStyle(e.target, null).getPropertyValue("background-color");
        
        this.setState({
            frame: newFrame
        });
    }

    render() {
        let style = {
            backgroundColor: this.state.frame,
            border: "1px solid black",
            padding: "20px",
            width: "440px"
        }
        return (
            <div style={style} className="frame">
                <Box box="green" handleClick={e => this.changeColor(e)}>
                    <Box box="purple" handleClick={e => this.changeColor(e)} />
                    <Box box="purple" handleClick={e => this.changeColor(e)} />
                </Box>
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);

