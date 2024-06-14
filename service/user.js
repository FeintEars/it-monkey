
import {
    databaseCreateUser,
    databaseReadUser,
    databaseUpdateUser,
    databaseDeleteUser
  } from '../database/user.js'
  
  
  function serviceCreateUser(FirstName, LastName, age) {
    return databaseCreateUser(FirstName, LastName, age);
  }
  
 
  function serviceReadUser(id) {
    return databaseReadUser(id);
  }
  
 
  function serviceUpdateUser(id, FirstName, LastName, age) {
    
  
    return databaseUpdateUser(id, FirstName, LastName, age);
  }
  
 
  function serviceDeleteUser(id) {
    return databaseDeleteUser(id);
  }
  
  
  
 
  
  export {
    serviceCreateUser,
    serviceReadUser,
    serviceUpdateUser,
    serviceDeleteUser
  };