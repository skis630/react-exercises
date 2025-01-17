let url = 'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?' + 
           'auto=compress&cs=tinysrgb&dpr=1&w=500';

class PropApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let visible = {
            visibility: this.props.isVisible
        }
        return (
            <div style={{display: "inline-block"}}>
                <h3>{this.props.isVisible}</h3>
                <img src={url} style={visible}></img>
            </div>
        )
    }
}

class StateApp extends React.Component {
    constructor() {
        super();
        this.state = {
            isVisible: "visible"
        };
        this.toggleShow = this.toggleShow.bind(this);
    }

    toggleShow() {
        let newState = this.state.isVisible === "visible" ? "hidden" : "visible";

        this.setState({
            isVisible: newState
        });
    }

    render() {
        return (
            <div>
                <h3>Click the photo to show/hide it</h3>
                <img src={url} onClick={this.toggleShow} className={this.state.isVisible}></img>
            </div>
        )
    }
}


ReactDOM.render(
    <div>
        <h1>isVisible as a prop</h1>
        <PropApp isVisible="hidden" />
        <PropApp isVisible="visible" />
        <h1>isVisible as a state</h1>
        <StateApp />    
    </div>,
    document.getElementById("root")
);