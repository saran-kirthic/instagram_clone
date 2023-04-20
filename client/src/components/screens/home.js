import React,{useState,useEffect, useContext} from 'react';

import { UserContext } from '../../App';

const Home = ()=>{
    const [data,setData]= useState([])
    const {state,dispatch}=useContext(UserContext)
    useEffect(()=>{
        fetch('/allpost',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            setData(result.posts)
        })
    },[])

    const likePost=(id)=>{
        fetch('/likes',{
            method: "put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId:id
            })
        }).then(res=>res.json())
        .then(result=>{
            const newData=data.map(item=>{
                if(item._id==result._id){
                    return result
                }else{
                    return item
                }
            })
            setData(newData)
        })
    }

    const unlikePost=(id)=>{
        fetch('/unlikes',{
            method: "put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId:id
            })
        }).then(res=>res.json())
        .then(result=>{
            const newData=data.map(item=>{
                if(item._id==result._id){
                    return result
                }else{
                    return item
                }
            })
            setData(newData)
        })
    }

    const makeComment=(text,postId)=>{
        fetch('/comments',{
            method: "put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId,
                text
            })
        }).then(res=>res.json())
        .then(result=>{
            const newData=data.map(item=>{
                if(item._id==result._id){
                    return result
                }else{
                    return item
                }
            })
            setData(newData)
        })
    }

    return(
        <div className='home'>
            {
                data.map(item=>{
                    return(
                        <div key={item._id} className='card home-card'>
                            <h5>{item.postedBy.name}</h5>
                            <div className='card-image'>
                                <img src={item.photo}/>
                                </div>
                <div className='card-content'>
                 {item.likes.includes(state._id)?<i className="material-icons" style={{color:"red"}} onClick={()=>{unlikePost(item._id)}}>favorite</i>:<i className="material-icons" style={{color:"red"}} onClick={()=>{likePost(item._id)}}>favorite_border</i>}                           
                   <h6>{item.likes.length} likes</h6>
                    <h6><b>{item.title}</b></h6>
                    <p>{item.body}</p>
                    {
                        item.comments.map(record=>{
                            return(
                                <h6 key={record._id}><span style={{fontWeight:"500"}}><b>{record.postedBy.name}</b></span> {record.text}</h6>
                            )
                        })
                    }
                    <form onSubmit={(e)=>{
                        e.preventDefault()
                        makeComment(e.target[0].value,item._id)
                    }}>
                        <input type='text' placeholder='add a comment' />
                    </form>

                </div>
            </div>
                    )
                })
            }
            
        </div>
    )
}

export default Home;