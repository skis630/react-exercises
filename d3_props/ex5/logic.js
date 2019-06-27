class Stripe extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={this.props.gp}>{this.props.children}</div>;
    }
}

class Service extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="item">
                <Icon icon={this.props.icon} />
                <Desc desc={this.props.img} />
            </div>
        );
    }
}

class Icon extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={this.props.icon}></div>;
    }
}

class Desc extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img src={this.props.desc} />
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Stripe gp="navbar navbar-default">
                    <div class="container-fluid">
                        <ul class="nav navbar-nav">
                            <li><a href="#"><img src="./images/navbar.PNG" /></a></li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="#"><img src="./images/icon.PNG" width="40" heigh="40"/></a></li>
                        </ul>
                    </div>
                </Stripe>
                <Stripe gp="row main text-center">
                    <img src="./images/main.PNG" className="img-responsive"/>
                </Stripe>
                <Stripe gp="row text-center">
                    <Service icon="item1 text-center" img="./images/ui.PNG" />
                    <Service icon="item2 text-center" img="./images/concept.PNG" />
                    <Service icon="item3 text-center" img="./images/design.PNG"></Service>
                </Stripe>
                <Stripe gp="footer"></Stripe>
            </div>           
        );
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById("root")
);