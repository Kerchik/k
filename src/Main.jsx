import React,{useState} from "react";


const Main = (props) => {
    //let [val,setVal] = useState("");
    let [val1,setVal1] = useState("");
	let k = 1;
    let func = (e) => {
        /* fetch("http://data.fixer.io/api/latest?access_key=1599f02926d1be3d3760c2d172b49e7c&symbols=USD")
        .then(data => {
            console.log(data);
            console.log(data.text()
            .then(data2 => {
                console.log(data2);
            }));
        }) */

        //setVal(e.target.value)
		let data = e.target.value;
        setVal1(data);
		fetch("http://data.fixer.io/api/latest?access_key=1599f02926d1be3d3760c2d172b49e7c&symbols=USD")
        .then(data => {
            //console.log(data);
            data.text()
            .then(data2 => {
                let kek = data2;
                let json = JSON.parse(data2);
                console.log(json.rates.USD);
                setVal1(json.rates.USD);
            });
        })
        //console.log(val1);
        //func1();
        //setVal(val1);
        

    }
    let func1 = () => {
        /* fetch("http://data.fixer.io/api/latest?access_key=1599f02926d1be3d3760c2d172b49e7c&symbols=USD")
        .then(data => {
            //console.log(data);
            data.text()
            .then(data2 => {
                let kek = data2;
                let json = JSON.parse(data2);
                console.log(json.rates.USD);
                setVal(val1 * json.rates.USD);
            });
        }) */
        //setVal(val1 * 1.10);
    }
    return (
        <div>
            <input value={val1} onChange={func}></input>
            <p>{val1}</p>
        </div>
    )
}

export default Main;