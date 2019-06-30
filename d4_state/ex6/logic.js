class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           count: Math.round(Math.random() * 10),
           isVisible: "visible" 
        };
        this.hide = this.hide.bind(this);
    }

    hide() {
        let newState = this.state.isVisible === "visible" ? "hidden" : "";

        this.setState({
            isVisible: newState
        });
    }

    render() {
        return (
            <div className="iconBar well navbar">
                <div className="container-fluid">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a><i style={{fontSize: "24px"}} className="fa">&#xf2be;</i></a></li>
                        <li><a><i className="glyphicon" style={{marginTop: "5px", marginLeft: "5px"}}>&#xe006;</i></a></li>
                        <li>
                            <a>
                                <i className="messages">
                                    <span onClick={this.hide} className={"bubble " + this.state.isVisible}>
                                        {this.state.count ? this.state.count : this.setState({isVisible: "hidden"})}
                                    </span> 
                                </i>
                            </a>
                        </li>
                    </ul>
                </div>                 
            </div>
        )
    }
} 


ReactDOM.render(
    <Notifications />,
    document.getElementById("root")
);