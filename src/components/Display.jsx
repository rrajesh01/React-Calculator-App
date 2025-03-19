import styles from "./Display.module.css"

function Display( {displayValue}){
    return(
        <>
        <div>
            <input className={styles.display} type="text" value={displayValue} readOnly></input>
        </div>
        </>
    );
}

export default Display;