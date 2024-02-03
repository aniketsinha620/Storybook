import React from 'react'
import "./forms.css"

import Input from './Input'
import { Button } from '../Pages/Button'
export default function forms() {
    return (
        <div className='formContainer'>
            <div className='main-forms'>
                <div className="login-form">
                    <h2>XYZ</h2>
                    <p>Welcome Onboard</p>
                    <form>
                        <Input place="Your Name" icon="true" />
                        <Input place="Company Name" icon="true" />
                        <Input place="Select Industry" icon="true" />
                        <h3 > Select Number of Locations</h3>
                        <div className='form-btn'>

                            <Button size="medium" label="1-10" />
                            <Button size="medium" label="10-50" />
                            <Button size="medium" label="50-150" />
                            <Button size="medium" label="150+" />
                        </div>

                        <Button size="large" label="continue" />
                    </form>
                </div>
            </div>
        </div>
    )
}
