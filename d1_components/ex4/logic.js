class NavBar extends React.Component {
    render () {
        return(
            <nav className="navbar navbar-default">
                <div class="container-fluid">
                    <ul class="nav navbar-nav">
                        <li><a href="#">SERVICES</a></li>
                        <li><a href="#">WORK</a></li>
                        <li><a href="#">THE TEAM</a></li>
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
                        <div className="wrapper">
                            <img src="./images/layout.png" className="img-circle" width="200" height="200"></img>
                        </div>
                        <h4>USER INTERFACE DESIGN</h4>
                        <ul>
                            <li>Wireframing</li>
                            <li>Prototyping</li>
                            <li>Usability testing</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <div className="wrapper">
                            <img src="./images/idea.png" className="img-circle" width="200" height="200"></img>
                        </div>
                        <h4>CONCEPT AND IDEAS</h4>
                        <ul>
                            <li>Conceptualization</li>
                            <li>Digital branding</li>
                            <li>Product strategy</li>
                        </ul>
                        

                    </div>
                    <div className="col-md-4">
                        <div className="wrapper">
                            <img src="./images/email.png" className="img-circle" width="200" height="200"></img>
                        </div>
                        <h4>DESIGN AND BRANDING</h4>
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