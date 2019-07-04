class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: true
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange() {
        this.setState({
            isChecked: !this.state.isChecked,
            isProgramming: !this.state.isProgramming
        });
        this.props.handleChange();
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.isProgramming) {
            this.setState({
                isChecked: false
            });
        }
    }

    render() {
        return (
            <div>
                <h4>{this.props.question}</h4>
                <label htmlFor={this.props.id1}>Yes</label>
                <input id={this.props.id1} type="radio" value="y" 
                       checked={this.state.isChecked} onChange={this.onChange} disabled=
                               {this.props.isDisabled}/>
                <label htmlFor={this.props.id2}>No</label>
                <input id={this.props.id2} type="radio" value="n" 
                       checked={!this.state.isChecked} onChange={this.onChange}/>
            </div>
        )
    }
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isProgramming: true
        };
        this.automateNoAns = this.automateNoAns.bind(this);
    }

    automateNoAns() {
        this.setState({
            isProgramming: !this.state.isProgramming
        });
    }

    render() {
        return (
            <div>
                <Question question="Have you programmed before?" id1="q1y" id2="q1n" handleChange=
                          {this.automateNoAns} isProgramming={this.state.isProgramming? true : false}/>
                <Question question="Have you programmed in Java?" id1="q2y" id2="q2n"  
                          isDisabled={this.state.isProgramming? false : true}/>
                <Question question="Have you programmed in Python?" id1="q3y" id2="q3n" 
                          isDisabled={this.state.isProgramming? false : true} />
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);