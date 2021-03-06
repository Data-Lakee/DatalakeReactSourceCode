import React from 'react'
import './Error404.css'

function Error404() {
    return (
        <div id="pagenotfoundRoot">
        <div id="Error404Image">
            <svg width="500" viewBox="0 0 696 352" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path d="M194.5 194.5H134.75L194.5 116.25V194.5Z" />
                <path d="M478.75 194.5H538.5V116.25L478.75 194.5Z" />
                <path d="M298.6 140.68L306.88 152.2L307.36 153.16L307.9 152.2L316.12 140.68H322L310.42 156.4L322.06 172H316.18L307.9 160.54L307.36 159.64L306.88 160.54L298.6 172H292.72L304.36 156.4L292.78 140.68H298.6Z" />
                <path d="M387.88 152.2L379.6 140.68H373.78L385.36 156.4L373.72 172H379.6L387.88 160.54L388.36 159.64L388.9 160.54L397.18 172H403.06L391.42 156.4L403 140.68H397.12L388.9 152.2L388.36 153.16L387.88 152.2Z" />
                <path d="M362 216C362 225.389 355.508 233 347.5 233C339.492 233 333 225.389 333 216C333 206.611 339.492 199 347.5 199C355.508 199 362 206.611 362 216Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M696 0H0V352H696V0ZM192.25 214.5V256.75H214.25V214.5H236.25V194.5H214.25V82.25H199.25L112 195V214.5H192.25ZM536.25 256.75V214.5H456V195L543.25 82.25H558.25V194.5H580.25V214.5H558.25V256.75H536.25ZM430 176C430 221.287 393.287 258 348 258C302.713 258 266 221.287 266 176C266 130.713 302.713 94 348 94C393.287 94 430 130.713 430 176Z" />
            </svg>
        </div>
            <div id="Error404Message">
                That is an Error.<br/>
                We cannot find what you are searching for.<br/>
                <span>Go to <a href="/">Home</a></span>
            </div>

        </div>
    )
}

export default Error404
