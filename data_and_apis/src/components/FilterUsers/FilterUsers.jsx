import { useEffect, useState } from "react";

const FilterUsers = () => {
    // state to handle filter results fetched from API
    const [ filterResults, setFilterResults ] = useState([]);
    const [ word, setWord ] = useState("");
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);


    useEffect(() => {
        // fetch the results 
        const filterData = async () => {
            setIsLoading(true);
            
            try {

                // Fetch word from API filter results
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${word}`)
                // console.log(response);
                // console.log("word: ", word);
                
                const data = await response.json();
                console.log(data);
                
                if (word) {
                    setFilterResults(data);
                } else {
                    setFilterResults([]);
                }
                
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false)
            }
        }

        filterData();
    }, [word]);

    if (isLoading) {
        return <p>Loading...</p> 
    }

    if (error) {
        return <p>Error: { error.message }</p>
    }
    
    // create an input to filter results
    // return filtered data and search input
    const handleKeyup = (event) => {
        event.preventDefault();
        
        // handle keyup logic here
        setWord(event.target.value);
        console.log("New typed char:", event.target.value);
        // e.g., setWord(event.target.value);
    };

    return (
        <>
            <div className="p-5">
                {/* add on keyup listener to input element */}
                <input className="bg-red-500 text-white p-10 rounded-xl font-bold border focus:border-green-400" 
                        // onChange is the standard event for inputs from REACT
                        onChange={handleKeyup} 
                        placeholder="Search for a post!"
                        value={ word || "" } />

                {
                    filterResults.map((result) => {
                       return <li key={ result.id }>{ result.title }</li>
                    })
                }
            </div>
        </>
    )
    
}

export default FilterUsers; 