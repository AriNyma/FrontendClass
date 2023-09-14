import Luetuimmat from "./Luetuimmat";

function Uutissivu(props) {
    return(
        <>
            <h>Uutissivu</h>
            <Luetuimmat luetuimmatUutiset={props.uutiset}/>
        </>
    )
}

export default Uutissivu;