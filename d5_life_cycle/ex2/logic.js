class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity: 0,
            left: -1 * (parseInt(this.props.width) + 30) + "px",
        };
        this.show = this.show.bind(this);
    }

    componentWillMount() {
        let show = this.show;

        setTimeout(show, 1000);
    }

    show() {
        this.setState({
            opacity: 1
        });
    }

    render() {
        let style = {
            width: this.props.width,
            height: this.props.height,
            backgroundColor: "purple",
            border: "1px solid black",
            position: "relative",
            margin: "20px",
            left: this.state.left,
            opacity: this.state.opacity          
        }
        return <div style={style} className="box"></div>;
    }
}

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Box width="100px" height="100px"></Box>
                <Box width="200px" height="100px"></Box>
                <Box width="50px" height="50px"></Box>
            </div>
        )
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById("root")
);