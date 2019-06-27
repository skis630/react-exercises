class Box extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.size}></div>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">{this.props.children}</div>
        )
    }
}

ReactDOM.render(
    <App>
            <Box size="xs"></Box>
            <Box size="sm"></Box>
            <Box size="md"></Box>
            <Box size="sm"></Box>
            <Box size="xs"></Box>
            <Box size="lg"></Box>    
    </App>,
    document.getElementById("root")
);