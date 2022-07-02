
export const isValidObjField = (obj)=>{
    // we convert the userInfo object to an array.
  // to check if the fileds have values, 
return Object.values(obj).every(value => value.trim())
}



export const updateError = (error, stateUpdater)=>{
 stateUpdater(error)
 setTimeout(() => {
  stateUpdater("")
 }, 2500);
}



export const isValidEmail = (value)=>{
    const regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regx.test(value)
}
