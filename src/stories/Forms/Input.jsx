import React from 'react'

export default function Input(props) {
    return (
        <div>
            <div className="mui-textfield">
                <input className='form-input' type="text" id="name" name="name" placeholder={props.place} required />
                <br />
            
            </div>
        </div>
    )
}
