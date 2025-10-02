// import "./styles.css"
import styles from "./Card.module.sass";

const Card = () => {
    // Another way of applying styles in React is the "inline" method (similar to Tailwind)
    // Nonetheless, the syntax could end up being messy or too large
    // One best practice is saving the styles in an object and calling it in the style= property
    const textStyles = {
        color: "red",
        fontSize: "2rem",
        textAlign: "center",
    }

    // One disadvantage of this way of defining styles is scalability, 
    // since in larger applications it wouldn't be advisable to have a single variable with a large number of classes in the same component. 
    // Furthermore, pseudo-classes would no longer be possible.

    // One solution to this problem is the use of modules (separate files) and 
    // CSS preprocessors that speed up development, since there are usually many components in a React app.


    return (

        <div style={textStyles}>
            <div className={ styles.secondary_card }>
                <p className={ styles.quote }> 
                    We used to look up at the sky and wonder at our place in the stars. 
                    Now we just look down, and worry about our place in the dirt.
                </p>

                <div className={ styles.gradient }></div>
            </div>

            <h3>Interestellar</h3>
        </div>
    )
}

export default Card;