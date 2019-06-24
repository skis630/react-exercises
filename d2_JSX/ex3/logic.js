class ShowNumbers extends React.Component {
    constructor() {
        super();
        this.max = 100;
        this.showNums = this.showNums.bind(this);
    }

    showNums() {
        let num = Math.round(Math.random() * this.max);
        let txtNode = document.createTextNode(`${num} `);
        document.querySelector(".placeholder").appendChild(txtNode);
    }

    render() {
        return (
            <div>
                <h3>Numbers</h3>
                <button type="button" onClick={this.showNums}>Show Numbers</button>
                <div className="placeholder"></div>
            </div>
        )
    }
}

ReactDOM.render(<ShowNumbers/>, document.getElementById("root"));