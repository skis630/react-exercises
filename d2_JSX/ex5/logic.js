class NavBar extends React.Component {
    constructor() {
        super();
        this.toggleFontWt = this.toggleFontWt.bind(this);
    }
    toggleFontWt(e) {
        let target = e.target;
        let otherLinks = document.querySelectorAll(".nav li a");

        for (let elem = 0; elem < otherLinks.length; elem++) {
            otherLinks[elem].style.removeProperty("font-weight");
        }
        target.style.fontWeight = "bold";
    }

    render () {
        return(
            <nav className="navbar navbar-default">
                <div class="container-fluid">
                    <ul class="nav navbar-nav">
                        <li onClick={this.toggleFontWt}><a href="#">SERVICES</a></li>
                        <li onClick={this.toggleFontWt}><a href="#">WORK</a></li>
                        <li onClick={this.toggleFontWt}><a href="#">THE TEAM</a></li>
                    </ul>

                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#"><i class="material-icons">&#xe32c;</i></a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

class Content extends React.Component {
    constructor() {
        super();
        this.toggleBg = this.toggleBg.bind(this);
        this.border = this.border.bind(this);
    }

    toggleBg(e) {
        let target = e.target;
        let currentColor = target.style.backgroundColor;
        if (currentColor !== "red") {
            target.style.backgroundColor = "red";
        } else {
            target.style.removeProperty("background-color");
        }
    }

    border(e) {
        let elem = e.target;
        elem.style.border = "2px solid white";
        setTimeout(function() {
            elem.style.removeProperty("border");
        }, 1000);
    }

    render() {
        return (
            <div className="content container">
                <div className="row text-center">
                    <h1>SERVICES</h1>
                    <p>
                       Our vision is simple. We want to create websites and applications with both high
                       quality design and easy-to-access content. The finished product will be totally
                       unique and represent awsomeness.
                    </p>
                </div>
                <div className="row container text-center">
                    <div className="col-md-4">
                        <div className="wrapper" onMouseOver={this.toggleBg} onMouseOut={this.toggleBg}>
                            <img src="./images/layout.png" className="img-circle" width="200" height="200"></img>
                        </div>
                        <h4 onMouseOver={this.border}>USER INTERFACE DESIGN</h4>
                        <ul>
                            <li>Wireframing</li>
                            <li>Prototyping</li>
                            <li>Usability testing</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <div className="wrapper" onMouseOver={this.toggleBg} onMouseOut={this.toggleBg}>
                            <img src="./images/idea.png" className="img-circle" width="200" height="200"></img>
                        </div>
                        <h4 onMouseOver={this.border}>CONCEPT AND IDEAS</h4>
                        <ul>
                            <li>Conceptualization</li>
                            <li>Digital branding</li>
                            <li>Product strategy</li>
                        </ul>
                        

                    </div>
                    <div className="col-md-4">
                        <div className="wrapper" onMouseOver={this.toggleBg} onMouseOut={this.toggleBg}>
                            <img src="./images/email.png" className="img-circle" width="200" height="200"></img>
                        </div>
                        <h4 onMouseOver={this.border}>DESIGN AND BRANDING</h4>
                        <ul>
                            <li>Interaction Design</li>
                            <li>Graphic Design</li>
                            <li>Identity Design</li>
                        </ul>
                    </div>
                </div>                
            </div>
        );
    }
}

class Footer extends React.Component {
    render() {
        return (
            <footer></footer>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <NavBar/>
                <Content/>
                <Footer/>
            </div>
        )
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById("root")
);