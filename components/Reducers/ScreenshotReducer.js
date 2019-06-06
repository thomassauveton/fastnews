export default function(Screenshot = [], action){
    
    if(action.type === 'get'){
      return action.data
    } else {
      return Screenshot;
    }
  }
  