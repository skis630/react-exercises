class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btnClicked: "none"
        }
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor(e) {
        let newColor = e.target.getAttribute("id");
        let newState = {
            btnClicked: newColor
        };

        this.setState(newState);
    }

    render() {
        return (
            <div>
                <button type="button" id="blue" onClick={e => this.changeColor(e)}>Blue</button>
                <button type="button" id="green" onClick={e => this.changeColor(e)}>Green</button>
                <button type="button" id="orange" onClick={e => this.changeColor(e)}>Orange</button>
                <div className="box" style={{backgroundColor: this.state.btnClicked}}></div>
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);