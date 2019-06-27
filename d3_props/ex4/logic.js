class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let style = {
            color: "gray",
            textAlign: "center"
        };

        return ( 
        <div id="myCarousel" style={style} className="bg well carousel slide" 
             data-ride="carousel">            
            <div className="item active" id={this.props.id}>
                <img src={this.props.icon} width="1" height="1"></img>
            </div>
            <h4 >{this.props.title}</h4>
            <p>{this.props.desc}</p>
            <br></br>
            <br></br>
            <br></br>
            {this.props.children}
        </div>
        )
    }
}

class App extends React.Component {
    render() {

        return (
            <div className="row text-center">
                <Card id="item1" icon="./images/Capture.PNG" title="Ready to Travel" 
                      desc="Choose your destination, plan your trip. Pick the best place for you holiday">
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>
                </Card>
                <Card id="item2" icon="./images/Capture.PNG" title="Select the Date" 
                      desc="Select the day. Pick your ticket. We give you the best price. We guarantee!">
                     <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0"></li>
                        <li data-target="#myCarousel" data-slide-to="1" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol> 
                </Card>
                <Card id="item3" icon="./images/Capture.PNG" title="Feels Like Home"
                      desc="Enjoy tour holidays! Don't forget to take a beer and take a photo!">
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2" className="active"></li>
                    </ol> 
                </Card>
            </div>
        )
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById("root")
);

