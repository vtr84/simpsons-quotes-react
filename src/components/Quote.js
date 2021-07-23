import './Quote.css'

const Quote = ({quote}) => {
    
    return (
        <div className={quote.characterDirection === 'Right' ? 'quote-display right' : 'quote-display'}>
            <div className='img-div'>
                <img src={quote.image} alt={quote.character} className='img'/>
            </div>
            <div className='quote-div'>
                <p className='quote-text'>{quote.quote}</p>
                <p className='quote-character'>{quote.character}</p>
            </div>
        </div>
    )
}


export default Quote