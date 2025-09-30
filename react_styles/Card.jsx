// import "./styles.css"
import styles from "./Card.module.sass";

const Card = () => {
    return (
        <div className={ styles.card }>
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