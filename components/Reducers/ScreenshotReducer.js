export default function(Screenshot = [], action){
  // console.log("Action Reducer -->",action.data) 
    if(action.type === 'get'){
      // console.log(action.data)
      return action.data
    } else {
      return Screenshot;
    }
  }
  