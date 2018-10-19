export const RECEIVE_LOGIN = "RECEIVE_LOGIN"; 
export const REMOVE_LOGIN = "REMOVE_LOGIN"; 

export const receiveLogin = (loginDemo) => ({
  type: RECEIVE_LOGIN, 
  loginDemo, 
})

export const removeLogin = () => ({
  type: REMOVE_LOGIN, 
})