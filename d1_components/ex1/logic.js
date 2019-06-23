class MyFirstComponent extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                    <li>Fourth</li>
                </ul>
            </div>
        );
    }
}

function render() {
    ReactDOM.render(
    <MyFirstComponent/>,
    document.getElementById("root")
    );
}

render();

