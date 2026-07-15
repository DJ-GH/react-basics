import React, { useState } from 'react'
import './Emoji.css'
import emojiPack from './emojiPack.json'

const Emoji = () => {
    const [inputValue, setInputValue] = useState('')
    const [foundEmoji, setFoundEmoji] = useState(null) 

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
        if (foundEmoji) setFoundEmoji(null)
    }

    const findemoji = (event) => {
        event.preventDefault()
        const formatted = inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase();
        const result = emojiPack.find(emoji => emoji.title === formatted)
        
        if (result) {
            setFoundEmoji(result)
        } else {
            setFoundEmoji(null)
        }
    }

    return (
        <div className='main-container'>
            <div className='emoji-container'>
                <div className='search-box'>
                    <form className='searchform' onSubmit={findemoji}>
                        <input className='searchitem' type='text' value={inputValue} placeholder='emoji name...' onChange={handleInputChange}/>
                        {!foundEmoji ? (
                            <button className='searchitem' type='submit'>Submit</button>
                        ) : (
                            <div className='searchitem'>{foundEmoji.symbol}</div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Emoji
