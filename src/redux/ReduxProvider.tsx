"use client"
import { store } from "@/redux/store"
import { Provider as ReactRedexProvider } from "react-redux" 


export default function ReduxProvider({children}:{children:React.ReactNode}){
    return(
        <ReactRedexProvider store={store}>
        {children}
        </ReactRedexProvider>
    )
}