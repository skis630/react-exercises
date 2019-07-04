class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           color: "transparent",
           borderRadius: "0px" 
        }
        this.getRandomColor = this.getRandomColor.bind(this);
        this.changeBg = this.changeBg.bind(this);
        this.transformShape = this.transformShape.bind(this);
    }

    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

    changeBg() {
        let newColor = this.getRandomColor();
        
        this.setState({
            color: newColor
        });
    }

    transformShape() {
        this.setState({
            borderRadius: "50%"
        });
    }

    componentDidMount() {
        let changeBg = this.changeBg;
        let transformShape = this.transformShape;
        let flash = setInterval(changeBg, 1000);
        let clearBox = () => {
            clearInterval(flash);
            ReactDOM.unmountComponentAtNode(document.getElementById("root"));
        }
        setTimeout(transformShape, 6000);
        setTimeout(clearBox, 11000);
    }

    

    render() {
        let style = {
            backgroundColor: this.state.color,
            border: "1px solid black",
            width: "100px",
            height: "100px",
            borderRadius: this.state.borderRadius
        }

        return <div id="box" style={style}></div>;
    }
}


ReactDOM.render(
    <Box />,
    document.getElementById("root")
);