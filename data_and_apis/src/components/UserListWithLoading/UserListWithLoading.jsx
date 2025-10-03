import { useEffect, useState } from "react";
// useState: creates state variables that trigger re-renders when updated. They store info when a component changes
// useEffect: runs side effects like API calls after the component renders.

const UserListWithLoading = () => {
    // State to handle users data
    const [userData, setUserData] = useState([]);
    // State to handle page loading
    const [isLoading, setIsLoading] = useState(false);
    // State to handle errors
    const [error, setError] = useState(null);

    // this code will run after the component first mounts
    useEffect(() => {
        setIsLoading(true); // we set setIsLoading to true before fetch process starts
        
        const fetchUsers = async () => {
            try {
                const response  = await fetch("https://jsonplaceholder.typicode.com/users")
                if (!response.ok) { throw new Error ("Error obtaining data") }
                
                const data = await response.json();
                // updates state, triggering a re-render
                setUserData(data);

            } catch (error) {
                setError(error);

            } finally {
                setIsLoading(false);
            }
        }

        fetchUsers();
    }, []) // The effect will only execute once


    if (isLoading) {
        return <p>Loading...</p> 
    }

    if (error) {
        return <p>Error: { error.message }</p>
    }

    return (
        <div>
            <h2>Users list</h2>
            <ul>
                {
                    userData.map((user) => {
                        return <li key={ user.id }>{ user.name } - { user.address.city }</li> // .map always have to return something
                    })
                }
            </ul>
        </div>
    )
}

export default UserListWithLoading
; 