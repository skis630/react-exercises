class Factorial extends React.Component {
    calcFactorial(num) {
        let factorial = 1;
        for (let i = num; i >= 1; i--) {
            factorial = factorial * i;
        }

        return factorial;
    }

    render() {
        return this.calcFactorial(5);
    }
}

ReactDOM.render(
    <div>
        <h4>Factorial 5 is:</h4>
        <Factorial/>
    </div>,
    document.getElementById("root")
);