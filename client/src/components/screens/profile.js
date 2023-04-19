import React,{useEffect,useState,useContext} from 'react';
import { UserContext } from '../../App';

const Profile = ()=>{
    const [mypic,setPic]=useState([])
    const {state,dispatch} = useContext(UserContext)
    useEffect(()=>{
        fetch('/mypost',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            setPic(result.mypost)
        })
    },[])
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
                    {state?state.name:"loading"}
                </h4>
                <div style={{display:"flex",justifyContent:"space-between",width:"110%"}}>
                    <h6>60 posts</h6>
                    <h6>650 followers</h6>
                    <h6>590 following</h6>
                </div>
                </div>
            </div>
            <div className='gallery'>
                {
                    mypic.map(item=>{
                        return(
                            <img key={item._id} className='item' src={item.photo} alt={item.title} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Profile;