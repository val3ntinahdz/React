const StaticComponent = () => {
    const items = [
        "Apple",
        "Banana",
        "Papaya",
        "Cherry",
    ]

    return (
        <ul>
            {
                items.map((item, idx) => {
                    return <li key={ idx }>{ item }</li> // .map always have to return something
                })
            }
        </ul>

    )
}

export default StaticComponent;