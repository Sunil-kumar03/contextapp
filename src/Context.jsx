import React,{createContext} from "react";

//init context
const DataContext = createContext();

//context provider component
function DataProvider(props){
    const data ={}
    return(
        <DataContext.Provider value={data}>
            {props.children}
        </DataContext.Provider>
    )
}
export default DataProvider