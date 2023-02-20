import './ShortDescriptionTag.css'
function ShortDescriptionTag(props)
{
    return(
        <div className="sdDiv">
            {props.text}
        </div>
    )
}

export default ShortDescriptionTag