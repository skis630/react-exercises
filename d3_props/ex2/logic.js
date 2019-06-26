class Box extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={this.props.color}>
                <h4>{this.props.label}</h4>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Box color="green" label="fresh" />
                <Box color="blue" label="calm" />
                <Box color="pink" label="adventurous" />
                <Box color="purple" label="happy" />
            </div>
            
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);