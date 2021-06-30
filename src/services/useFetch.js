import axios from "axios"
import { useState, useEffect } from "react"
export default function useFetch(url) {
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(false)
    const [hasError, setHasError] = useState(false)
    useEffect(() => {
        setLoading(true)
        axios.get(url)
            .then((res) => {
                setResponse(res.data)
                setLoading(false)
            })
            .catch(() => {
                setHasError(true)
                setLoading(false)
            })
    }, [url])
    return [response, loading, hasError]
}