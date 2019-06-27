class ColorSelector extends React.Component {
    constructor(props) {
        super(props);
        this.setColor = this.setColor.bind(this);
    }

    setColor() {
        let selectedTxt = $(`select#${this.props.id} option:selected`).text();
        let selectedColor = $(`select#${this.props.id} option:selected`).val();

        $(`h2#${this.props.target} span`).text(selectedTxt).css("color", selectedColor);
    }

    render() {
        return (
            <div className="container" >
                <select name="color" onChange={this.setColor} id={this.props.id}>
                    <option value="#00BFFF" >Sky blue</option>
                    <option value="	#FFD700">Royal yellow</option>
                    <option value="#FF69B4">Mellow pink</option>
                </select>

                <h2 id={this.props.target}>your {this.props.type} will be <span></span></h2>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="content">
                <ColorSelector type="shirt" id="shirt" target="shirtTitle" />
                <ColorSelector type="dress" id="dress" target="dressTarget" />
            </div>
        )
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById("root")
);