import { IAppItem } from "@/types/AppType"




export const appsApi = async (): Promise< IAppItem[]> => {
    try {
        const res = await fetch('http://localhost:4000/apps')
        return res.json()
        
    } catch (error) {
        console.log(error)
        return []   
    }
    
}