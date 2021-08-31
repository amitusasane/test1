import responseFromApi from "./sampleObject.js";
import _ from "lodash";


/* Transform the object */
const transformTheLocObj = (dataObj)=>{
    let locationObj = new Object();
    for(let i=0;i<dataObj.dashboard.components.length;i++){
        const prefix = dataObj.dashboard.components[i].location.substr(0,2);
        const location = dataObj.dashboard.components[i].location;    
        if(!(prefix in locationObj)){ // if key dosen't exist
        locationObj[prefix]= {};
        locationObj[prefix][location] = dataObj.dashboard.components[i];
        }else{ //insert in existing key object
        locationObj[prefix][location] = dataObj.dashboard.components[i];
        }
    }
    return locationObj;
}
//-----------------------------------------------------------------------------------
/* Check if object empty */
const isEmpty =(obj)=>{
 return (obj && Object.keys(obj).length === 0 && obj.constructor === Object);
}
//-----------------------------------------------------------------------------------
/* Delete the locations from locationObject  */
const removeLocations = (locations,locObj) => {
    const cloneObj = _.cloneDeep(locObj);
    if(isEmpty(cloneObj)) { 
        console.log('Location Object is empty!!'); 
        return;
        }
    for(let i=0; i<locations.length;i++){
        const prefix = locations[i].substr(0,2);
        const location  = locations[i];
        if(!!cloneObj[prefix] && !isEmpty(cloneObj[prefix])) {
            if(!isEmpty(cloneObj[prefix][location])){
                delete cloneObj[prefix][location];
               if(isEmpty(cloneObj[prefix])) delete cloneObj[prefix];
            }
        }        
    }
    return cloneObj;
 }
//-----------------------------------------------------------------------------------

//Task 1.a 
const transformedObj = transformTheLocObj(responseFromApi.data);
console.log("**************** After transformation -transformedObj ********************** =>",transformedObj);

//Task 1.b
const updatedLocObj = removeLocations(['AGAAA','OVLHP','OVLHP','AV102'],transformedObj);
console.log("************************ After deletion - updated location obj ******************************** =>",updatedLocObj);

console.log("************************ Unmuted transformedObj ******************************** =>",transformedObj);
export default transformTheLocObj;
