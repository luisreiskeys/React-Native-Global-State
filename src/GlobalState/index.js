export const gState = {
    Counters:{
        secondLevelCounter:0,
        SecondLevelCounters:{
            thirdLevelCounter:0
        }
    },
    firstLevelCounter:0,
}

export const changObjState = (obj,fields,value) =>{
    let state = obj; 
    let arr = []; 
    let x = state;
    if(fields.length > 1){
        for (let i=0;i<fields.length;i++){
            if(i==(fields.length-1)){
                arr[i-1] = {...arr[i-1],[fields[fields.length-1]]:value}
            }else{
                arr[i] = x[fields[i]]
                x = arr[i]
            }
        }
        for(let j=(fields.length-2);j>=0;j--){
            if(j > 0){
                arr[j-1] = {...arr[j-1],[fields[j]]:arr[j]}        
            }
        }
        state = {...state,[fields[0]]:arr[0]}
        return state
    }else{ 
        state = {...state,[fields[0]]:value}
        return state
    }
}