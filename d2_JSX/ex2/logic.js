class RandomTitle extends React.Component {
    render() {
        let num = Math.floor(Math.random() * 10) + 1;
        let title = null;

        if (num > 5) {
            title = <h1>You Won!</h1>;
        } else {
            title = <h3>You lost</h3>;
        }

        return title;
    }
}

ReactDOM.render(<RandomTitle/>, document.getElementById("root"));