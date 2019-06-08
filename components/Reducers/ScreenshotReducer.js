export default function(CardContent = [], action){
  // console.log("Action Reducer -->",action.data) 
    if(action.type === 'handleScreenShot'){
      var CardContentCopy = [...CardContent]
      CardContentCopy.push({
        screenshot :action.screenshot,
        title: action.title,
        description: action.description,
        photoUrl: action.photoUrl,
        urlToImage:action.urlToImage
      })
      // console.log(action.data)
      return CardContentCopy
    } else {
      return CardContent;
    }
  }
