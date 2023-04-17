import React from 'react';

const home = ()=>{
    return(
        <div className='home'>
            <div className='card home-card'>
                <h5>kiara advani</h5>
                <div className='card-image'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRiELLk961uRQFb1Wbm1MzMX99ji1UEmg2aq7Vla9nhQ&usqp=CAU&ec=48665701'/>
                </div>
                <div className='card-content'>
                <i className="material-icons" style={{color:"red"}}>favorite</i>
                    <h6>title</h6>
                    <p>this is amazing</p>
                    <input type='text' placeholder='add a comment' />

                </div>
            </div>
            <div className='card home-card'>
                <h5>saran kirthic</h5>
                <div className='card-image'>
                    <img src='https://storage.googleapis.com/kaggle-avatars/images/4949763-kg.jpg'/>
                </div>
                <div className='card-content'>
                <i className="material-icons" style={{color:"red"}}>favorite</i>
                    <h6>title</h6>
                    <p>this is amazing</p>
                    <input type='text' placeholder='add a comment' />

                </div>
            </div>
            <div className='card home-card'>
                <h5>lily thomson</h5>
                <div className='card-image'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkfzUwHwdLCcL8sLGs5AnXcrco71Hqi4UXVZQMwPhTOw&usqp=CAU&ec=48665701'/>
                </div>
                <div className='card-content'>
                <i className="material-icons" style={{color:"red"}}>favorite</i>
                    <h6>title</h6>
                    <p>this is amazing</p>
                    <input type='text' placeholder='add a comment' />

                </div>
            </div>
            <div className='card home-card'>
                <h5>lily thomson</h5>
                <div className='card-image'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTctnIKIki_bYuXcYJ7ylygls1Uhepdw_wYz5mX2DAd3w&usqp=CAU&ec=48665701'/>
                </div>
                <div className='card-content'>
                <i className="material-icons" style={{color:"red"}}>favorite</i>
                    <h6>title</h6>
                    <p>this is amazing</p>
                    <input type='text' placeholder='add a comment' />

                </div>
                
            </div>
        </div>
    )
}

export default home;