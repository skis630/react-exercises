class Quiz extends React.Component {
    render() {
        return(
            <div className="quiz">
                <QuizTitle/>
                <Q1/>
                <Q2/>
            </div>
        );
    }
}

class QuizTitle extends React.Component {
    render() {
        return(<h1>How Do You Like Front End?</h1>);
    }
}

class Q1 extends React.Component {
    render() {
        return(
            <div className="q1">
                <Q1Title/>
                <Q1Input/>
            </div>
        )
    }
}

class Q1Title extends React.Component {
    render() {
        return(<h4>How much you love front end?</h4>);
    }
}

class Q1Input extends React.Component {
    render() {
        return(<input type="range" min="0" max="2" step="1"/>);
    }
}

class Q2 extends React.Component {
    render() {
        return(
            <div className="q2">
                <Q2Title/>
                <Q2Input/>
            </div>
        );
    }
}

class Q2Title extends React.Component {
    render() {
        return(<h4>What is your favourite front end feature/topic?</h4>);
    }
}

class Q2Input extends React.Component {
    render() {
        return(<input type="text"/>)
    }
}


ReactDOM.render(
    <Quiz/>,
    document.getElementById("root")
);