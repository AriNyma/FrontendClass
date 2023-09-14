import Luetuimmat from "./Luetuimmat";

function Uutissivu(props) {
    return(
        <>
            <h1>Uutissivu</h1>
            <Luetuimmat luetuimmatUutiset={props.uutiset}/>
        </>
    )
}

export default Uutissivu;