class Progress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: this.props.progress
        }
        this.randIncrease = this.randIncrease.bind(this);
    }

    randIncrease() {
        let newProgress = this.state.progress + Math.floor(Math.random() * 5) + 1;

        if (newProgress <= 100) {
            this.setState({
            progress: newProgress
            });
        } 
        console.log("test");
    }

    componentDidMount() {
        let randIncrease = this.randIncrease;
        let increase = setInterval(randIncrease, 1000);
    }

    // componentDidUpdate() {
    //     if (this.state.progress === 100) {
    //         clearInterval(this.increase);
    //     }
    // }

    render() {
        let style = {
            backgroundColor: this.props.color,
            width: this.state.progress + "%"
        };

        return (
            <div className={"container text-center"}>
                <div className={"heading"}><h3>{this.props.task}</h3></div>
                <div className={"body"}>
                    <div className="circle">
                        <p>{this.state.progress + "%"}</p>
                    </div>
                    <div className={"progress"}>
                        <div className={"progress-bar"} role="progressbar" ariaValuenow={this.state.progress}
                            ariaValuemin="0" ariaValuemax="100" style={style}>
                            <span className={"sr-only"}>{this.state.progress}% Complete</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Progress task="General" progress={41} color="#88CDE6" />
                <Progress task="Uploading" progress={82} color="#EAAB5F" />
                <Progress task="Task Status" progress={75} color="#DC6E91" />
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);