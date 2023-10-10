import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'


const FetchApiAxiosUseEffectImagesKeyGitcardComponent = () => {
    let [state,setState]=useState([])
    console.log(state)
    useEffect(()=>{
        axios.get("https://api.github.com/users")
        .then(res=>setState(res.data))
    },[])
  return (
    // <>

    // {
    //     state.map((user)=>
    //     console.log(user.login),
    //     console.log(user.avatar_url)


    //     )
    // }
    // </>
    <>
    <h1 className='text-center py-5' >GITHUB USERS</h1>
    <div style={{display:"grid",gridTemplateColumns:"auto auto auto auto auto ",rowGap:"30px"}}>
        {
            state.map((user,i)=>{
               return <GitCard key={i} user={user}/>
            })
        }


    </div>
    
    
    </>
    
  )
}

export default FetchApiAxiosUseEffectImagesKeyGitcardComponent

export function GitCard(props){
    let{login,avatar_url}=props.user
    return(
        <div className='card text-center' style={{width:"14rem"}}>
        <img src={avatar_url} className='card-img-top' alt="" />
        <div className='card-body'>
            <h4 className='card-title' style={{textTransform:"uppercase"}}>{login}</h4>
        </div>

    </div>


    )
}

//export default GitCard // this produces Parsing error: Only one default export allowed per module.    