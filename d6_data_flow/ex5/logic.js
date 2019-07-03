class App extends React.Component {
    constructor() {
        super();
        this.state = {
            option1: "bread knife",
            option2: "grater",
            option3: "colander"
        }
    }

    loadSubCategory(e) {
        let category = e.target.value;

        switch(category) {
            case "furnitures":
                this.setState({
                    option1: "stool",
                    option2: "couch",
                    option3: "futon"
                });
                break;
                case "cars": {
                    this.setState({
                        option1: "volvo",
                        option2: "mazda",
                        option3: "subaru"
                });
                break;
                }
                case "kitchen tools": {
                    this.setState({
                        option1: "bread knife",
                        option2: "grater",
                        option3: "colander"
                    });
                }
        }

    }

    render() {
        return (
            <div>
                <Category id="category" category={e => this.loadSubCategory(e)} option1=
                             "kitchen tools" option2="furnitures" option3="cars">Category</Category>
                <Category id="sub-category" option1={this.state.option1} option2=
                          {this.state.option2} option3={this.state.option3}>Sub category</Category>
            </div>
        )
    }
}

class Category extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange(e) {
        this.props.category(e)
    }

    render() {
        let option1 = this.props.option1;
        let option2 = this.props.option2;
        let option3 = this.props.option3;
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.children}</label><br></br><br></br>
                <select id={this.props.id} onChange={e => this.handleChange(e)}>
                    <option value={option1}>{option1}</option>
                    <option value={option2}>{option2}</option>
                    <option value={option3}>{option3}</option>
                </select>
                <br></br><br></br>
            </div>
            
        )
        
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);