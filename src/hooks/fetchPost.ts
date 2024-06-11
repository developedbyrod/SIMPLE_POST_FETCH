import {useState, useEffect} from "react"
import { IPost } from "../interfaces"



export function fetchPost(url : string){
    
    const [data, setData] = useState<IPost[] | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>('')

    useEffect(() => {
        const fetchData = async () => {
            
            try{
                const response = await fetch(url)

                if(!response.ok){
                    throw new Error(`HTTP Error: ${response.status}`)
                }

                const data  = await response.json()
                setData(data)
                
            }catch(err: unknown){
                if (err instanceof Error) {
                    setError(err.message)
                }else{
                    setError('An error was occured.')
                }
            }finally{
                setLoading(false)
            }
        }

        fetchData()
    },[url])
    return {data, loading, error}
}
