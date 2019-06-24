function render(data) {
    let link = <a target="_blank" href={data.linkAddress} className="border">{"Go to " + data.linkText}</a>;
    let slider = <input type="range" min={data.min} max={data.max * 2} step="2" style={{display: "block"}}/>;
    let btn = <button type="button" id="click" style={{color: data.color, 
                      fontWeight: data["font-weight"]}}>{data.buttonText}</button>;

   ReactDOM.render(
    <div>
        {link}
        {slider}
        {btn}
    </div>,
    document.getElementById("root")
    ); 
}

var data = {
    linkAddress: "https://www.google.com/",
    linkText: "google",
    min: -5,
    max: 5,
    color: "maroon",
    "font-weight": "bold",
    buttonText: "click me"
};

render(data);


