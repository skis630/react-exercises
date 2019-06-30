class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: "show"
        };
        this.toggleShow = this.toggleShow.bind(this);
    }

    toggleShow() {
        let newState = this.state.visibility === "hidden" ? "show" : "hidden";
        this.setState({
            visibility: newState
        });
    }

    render() {
        return (
            <div className="container">
                <button type="button" onClick={this.toggleShow}>show/hide</button>
                <div className={this.state.visibility}></div>
            </div>
        )
    }
}


ReactDOM.render(
    <Box />,
    document.getElementById("root")
);