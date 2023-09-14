function Vinkki(props){
    <>
        <a href={props.tiedot.linkki}>
        <h2>{props.tiedot.nro}, {props.tiedot.vinkki}</h2></a>
        <p>{props.tiedot.teksti}</p>

    </>
}

export default Vinkki;