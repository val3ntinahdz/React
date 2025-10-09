import { useEffect, useState } from "react";

const UserList = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setUserData(data))
        .catch((error) => console.error("Error fetching API: ", error));

    }, []) // The effect will only execute once

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

export default UserList; 