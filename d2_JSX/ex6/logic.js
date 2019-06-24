
class Calculator extends React.Component {
    buildTemplate(customHeading, resultId, inputId, calculate) {
        return (
            <div className="container">
                <h4>Calculate {customHeading}</h4>
                <label htmlFor={inputId}>Enter Number: </label>
                <input onBlur={calculate} type="number" id={inputId}/>
                <p id={resultId}>Result: </p>
            </div>
        )
    }

    render() {
        let square = this.buildTemplate("Squared Number", "result1", "num1", function(e) {
            let input = e.target.value;
            let result = input ** 2;
            document.getElementById("result1").innerHTML = "Result: " + result;
        });
        let sqrt = this.buildTemplate("Squared Root", "result2", "num2", function(e) {
            let input = e.target.value;
            let result = Math.sqrt(input);
            document.getElementById("result2").innerHTML = "Result: " + result;
        });
        let sigma = this.buildTemplate("Sigma", "result3", "num3", function(e) {
            let input = parseInt(e.target.value);
            let result = (input * (input + 1)) / 2;
            document.getElementById("result3").innerHTML = "Result: " + result;
        });
        let max = this.buildTemplate("Highest between Squared and Sigma", "result4", "num4", function(e) {
            let input = parseInt(e.target.value);
            let sigma = (input * (input + 1)) / 2;
            let squared = input ** 2;
            let result = Math.max(sigma, squared);
            document.getElementById("result4").innerHTML = "Result: " + result;
        });

        return (
            <div>
                {square}
                {sqrt}
                {sigma}
                {max}
            </div>
        )
    }
}

// class Calculate extends React.Component {
//     render() {
//         return (
//             <div className="container">
//                 <h4></h4>
//             </div>
//         )
//     }
// }


ReactDOM.render(
    <Calculator/>,
    document.getElementById("root")
);