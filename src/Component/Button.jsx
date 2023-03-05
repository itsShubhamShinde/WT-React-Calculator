import React from 'react'
import './Button.css'

const Button = (props) => {
    const calculate = (e) => {
        props.setValue(props.value + e)
    }

    const clear = () => {
        props.setValue("")
        props.setDisplay("")
    }

    const result = () => {
        props.setDisplay(eval(props.value))
        console.log("result");
    }
    return (
        <div className='Button'>
            <div className='buttonUpperDiv'>
                <button className='Clearbut' onClick={() => {
                    clear()
                }}>AC</button>
                <button className='Symbolbut' onClick={(e) => {
                    calculate(e.target.value)
                }} value="/">/</button>

                <button className='Symbolbut' onClick={(e) => {
                    calculate(e.target.value)
                }} value="*">X</button>
                <button className='Numberbut' onClick={(e) => {
                    calculate(e.target.value)
                }} value="7">7</button>
                <button className='Numberbut' onClick={(e) => {
                    calculate(e.target.value)
                }} value="8">8</button>
                <button className='Numberbut' onClick={(e) => {
                    calculate(e.target.value)
                }} value="9">9</button>
                <button className='Symbolbut' onClick={(e) => {
                    calculate(e.target.value)
                }} value="-">-</button>
                <button className='Numberbut' onClick={(e) => {
                    calculate(e.target.value)
                }} value="4">4</button>
                <button className='Numberbut' onClick={(e) => {
                    calculate(e.target.value)
                }} value="5">5</button>
                <button className='Numberbut' onClick={(e) => {
                    calculate(e.target.value)
                }} value="6">6</button>
                <button className='Symbolbut' onClick={(e) => {
                    calculate(e.target.value)
                }} value="+">+</button>

            </div>



            <div className='buttonLowerDiv'>
                <div className='LowerDivLeft'>

                    <button className='Numberbut' onClick={(e) => {
                        calculate(e.target.value)
                    }} value="1" style={{ height: "50%", width: "33.33%" }}>1</button>
                    <button className='Numberbut' onClick={(e) => {
                        calculate(e.target.value)
                    }} value="2" style={{ height: "50%", width: "33.33%" }}>2</button>
                    <button className='Numberbut' onClick={(e) => {
                        calculate(e.target.value)
                    }} value="3" style={{ height: "50%", width: "33.33%" }}>3</button>
                    <button className='Numberbut' onClick={(e) => {
                        calculate(e.target.value)
                    }} value="0" style={{ height: "50%", width: "66.66%" }}>0</button>
                    <button className='Numberbut' onClick={(e) => {
                        calculate(e.target.value)
                    }} value="." style={{ height: "50%", width: "33.33%" }}>.</button>
                </div>

                <div className='LowerDivRight'>
                    <button className='Symbolbut' onClick={() => {
                        result()
                    }} style={{ height: "100%", width: "100%", backgroundColor: "#004466" }}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Button;