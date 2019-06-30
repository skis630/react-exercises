class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.count
        };
        this.increase = this.increase.bind(this);
    }

    increase() {
        let newState = {
            count: this.state.count + 1
        };
        this.setState(newState);
    }

    render() {
        return (
            <div>
                <button onClick={this.increase}>Increment</button>
                <span>{this.state.count}</span>
            </div>
            
        );
        
    }
}


ReactDOM.render(
    <Counter count={0} />,
    document.getElementById("root")
);