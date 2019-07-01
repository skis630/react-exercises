class Counter extends React .Component {
    constructor(props) {
       super(props);
       this.increase = this.increase.bind(this);
       this.state = {
            count: 0 
       }
    }

    increase() {
        this.setState({
        count: this.state.count + 1 
        });   
    }

    render() {
        return (
            <div>
                <Clicker handleClick={this.increase}></Clicker> 
                <Label>{this.state.count}</Label>  
            </div>
        )
    }

}

class Clicker extends React.Component {
    constructor(props) {
        super(props);
        this.increment = this.increment.bind(this);
    }

    increment() {
        this.props.handleClick();
    }

    render() {
        return <button onClick={this.increment}>increment</button>;
    }
}

class Label extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <span>{this.props.children}</span>;
    }
}


ReactDOM.render(
    <Counter />,
    document.getElementById("root")
);