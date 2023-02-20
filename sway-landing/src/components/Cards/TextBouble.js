import './TextBouble.css'

function TextBouble(props){
    return (
        <div className="textBoubleDiv" style={{backgroundColor: props.dark?'black':"#f5f5f5", color: props.dark?'white':'black',fontFamily:props.dark?'McLaren':'Raleway'}}>
            {props.text}
        </div>
    )
}
export default TextBouble