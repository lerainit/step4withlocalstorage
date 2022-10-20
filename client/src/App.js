
import './App.scss';
import React, { useEffect } from 'react'
import Modal from './componentns/modal/modal'
import AppRoutes from './AppRoutes';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setProductsAC } from './store/products/actionCreator';
import { setCounterAC } from './store/likes/actionCreators'
import { setPostsAC } from './store/posts/actionCreators';
import { setUsersAC } from './store/users/actionCreators';
import { setBackgroundAC } from './store/cardBackground/actionCreators';
import { setSubscribersAC } from './store/subscribers/actionCreators';
import { setCommentsAC } from './store/comments/actionCreators';



const App = () => {
  const dispatch = useDispatch()
  const modal = useSelector(store => store.modal.value)
  const isLoadingProducts = useSelector(store => store.products.isLoading)
  const isLoadingUsers = useSelector(store => store.users.isLoading)
  const isLoadingPosts = useSelector(store => store.posts.isLoading)
  const isLoadingCounter = useSelector(store => store.counter.isLoading)
  const isLoadingBackground = useSelector(store => store.background.isLoading)
  const isLoadingSubscribers = useSelector(store => store.subscribers.isLoading)
const isLoadingComments = useSelector(store =>store.comments.isLoading)

  useEffect(() => {

    dispatch(setPostsAC())
    dispatch(setProductsAC())
    dispatch(setUsersAC())
    dispatch(setCounterAC())
    dispatch(setBackgroundAC())
    dispatch(setSubscribersAC())
    dispatch(setCommentsAC())
  }, [])

  if (isLoadingPosts || isLoadingUsers || isLoadingProducts || isLoadingCounter || isLoadingBackground || isLoadingSubscribers || isLoadingComments) {
    return (
      <>
        <h1>LOADING</h1>
      </>
    )
  }
  else {
    return (
      <>
        <div className='App'>


          <AppRoutes />

        </div>
        {modal &&
          <Modal ></Modal >}

      </>
    );
  }
}

export default App


