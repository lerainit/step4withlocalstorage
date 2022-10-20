import { incrementLikes,decrementLikes,setCounter } from "./actions";

export  const incrementLikesAC =(payload)=>({type:incrementLikes,payload})

export const decrementLikesAC =() =>({type:decrementLikes})
export const setCounterAC = () => async (dispatch) => {


        try {
            const {status,data} = await fetch('http://localhost:3001/posts').then(response =>response.json());

         
         if(status === 'success'){
                localStorage.setItem('counter',JSON.stringify(data))
               
               
                dispatch({ type:setCounter})
            
         }
    
        } catch (err) {
         
            console.log(err);
        }
  
    
    } 