import React from 'react';

const profile = ()=>{
    return(
        <div style={{maxWidth:"550px",margin:"0px auto"}}>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"18px 0px",
                borderBottom:"1px solid grey"
            }}>
                <div>
                    <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                    src='https://storage.googleapis.com/kaggle-avatars/images/4949763-kg.jpg'
                    />
                </div>              
                <div>
                <h4>
                    saran kirthic
                </h4>
                <div style={{display:"flex",justifyContent:"space-between",width:"110%"}}>
                    <h6>60 posts</h6>
                    <h6>650 followers</h6>
                    <h6>590 following</h6>
                </div>
                </div>
            </div>
            <div className='gallery'>
                <img className='item' src='https://storage.googleapis.com/kaggle-avatars/images/4949763-kg.jpg' />
                <img className='item' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Uu-n9zXL4dken1UhtkiD9qVJN2gvhzOiyxejV67iqA&usqp=CAU&ec=48665701' />
                <img className='item' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrZxh-bPSXWaYi4PF2OJZarX0maFF-SRjR2ImRJEoz-A&usqp=CAU&ec=48665701' />
                <img className='item' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQayl5RDJXbkoSVzuzc_tExUFeEaeaCvn4cpmmlAxA2kA&usqp=CAU&ec=48665701' />
                <img className='item' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuxYHBWAXHFpNg5nJm4scfcXGAruJEmx_v-YrWmWA19g&usqp=CAU&ec=48665701' />
                <img className='item' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDbh-iGKI0C6VTLwLFdTJUXFFUWIBXkbmlPosYDk2Upw&usqp=CAU&ec=48665701' />
            </div>
        </div>
    )
}

export default profile;