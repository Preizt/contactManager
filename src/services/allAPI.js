import commonAPI from "./commonAPI";


//to get the data given by the user and save it to the json-server
export const uploadData = async (contactDetail)=>{
    //requestBody ll nammal frontend ninn kittuna data (state)
    return await commonAPI("post","/contacts",contactDetail)
    //fe kittuna data nammal method + url + data ivda ann paranj kodukunne
    //priority kodukann vendi ann async await use cheythe.
}

//for getting the data to display it the fe
export const displayAllContact = async ()=>{
    return await commonAPI("get","/contacts","")
}
