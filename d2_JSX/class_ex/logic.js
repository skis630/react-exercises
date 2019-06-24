class Hello extends React.Component {
    greet() {
        let greeting = document.createElement("p");
        greeting.innerText = "Hello World!" 
        document.getElementById("root").append(greeting);
    }
    
    render() {
        let btn = <button type="button" onClick={this.greet}>Click me!</button>;

        return btn;
    }
}

ReactDOM.render(<Hello/>, document.getElementById("root"));