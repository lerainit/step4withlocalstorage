import { addComments,setComments,showComments } from "./actions";

const initialValue = {
    value:[],
    isLoading:true,
  
}


const commentsReducer = (state = initialValue,action) =>{

switch (action.type){
    case setComments: {
  
       return {value:action.payload,isLoading:false}
    }

case addComments: {
  
    let postArr = action.payload.comments
let userPosts = postArr[action.payload.userIndex]
let posts =userPosts.posts
let post = posts[action.payload.index]
let comments = post.comments

comments.push(action.payload.comment)

localStorage.setItem('products',JSON.stringify(postArr))

return {value:postArr,isLoading:false}}

case showComments:{
    let postArr = action.payload.comments
    let userPosts = postArr[action.payload.userIndex]
    let posts =userPosts.posts
    let post = posts[action.payload.index]
    let comments = post.comments

    comments.map(el =>  el.isVisible = true )

    localStorage.setItem('products',JSON.stringify(postArr))

    return {value:postArr,isLoading:false} 

}

default:{
    return state
}


}


}

export default commentsReducer 


//let postArr = JSON.parse(localStorage.getItem('counter'))
       //postArr.map((el,index) => el.posts[index].comments = el.posts[index].comments[0])
     //  console.log(postArr)
    //   localStorage.setItem('counter',JSON.stringify(postArr))