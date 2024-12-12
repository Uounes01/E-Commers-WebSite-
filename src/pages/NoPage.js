import React from 'react'

const NoPage = () => {
    return (
        <div>
            <div className="mainbox">
                <div className='inside_mainbox'>
                    <div className="err">4</div>
                    <div className="err">0</div>
                    <div className="err">4</div>
                </div>
                <div className="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<p>Let's go <a href="/">home</a> and try from there.</p></div>
            </div>
        </div>
    )
}

export default NoPage