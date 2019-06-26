class Box extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.box}>{this.props.children}</div>
        )
    }
}


ReactDOM.render(
    <Box box="green">
        <Box box="blue">
            <Box box="pink">
                <Box box="purple"/>
                <Box box="purple"/>
            </Box>
        </Box>
    </Box>,
    document.getElementById("root")
);