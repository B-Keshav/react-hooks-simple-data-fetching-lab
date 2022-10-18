import { useEffect, useState } from "react"

// create your App component here
function App(){
    const [isLoaded, setIsLoaded] = useState(false)
    const [image, setImage]= useState("")
    
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            console.log("use effect used")
            setImage(data.message)
            setIsLoaded(true)
        })
    },[])
    
    
    if(!isLoaded){
        return <p>Loading...</p>
    }

    return(
        <img src={image} alt="A Random Dog" />
    )

}
export default App