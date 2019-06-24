class Hello extends React.Component {
    constructor() {
        super();
        this.counter = 0;
        this.displayMessage = this.displayMessage.bind(this);
    }

    greet() {
        let greeting = document.createElement("p");
        greeting.innerText = "Hello World!" 
        document.getElementById("root").append(greeting);
    }

    displayMessage() {
        this.counter++;
        let message = `Hello ${this.counter}`;
        document.querySelector('.message').innerHTML = message;
        }        
    
    render() {
        let placeholder = document.createElement("p");
        placeholder.setAttribute("class", "message");
        document.getElementById("root").appendChild(placeholder);
        let btn = <button type="button" onClick={this.displayMessage}>Click me!</button>;

        return btn;
    }
}

ReactDOM.render(<Hello/>, document.getElementById("root"));