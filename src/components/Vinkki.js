function Vinkki(props){
    return (
        <div>
            <a href={props.tiedot.linkki} target="blank">
            
                <h2>{props.tiedot.nro}, {props.tiedot.vinkki}</h2>
                <p><span>{props.tiedot.teksti}</span></p>
            </a>
        </div>
    );
}

export default Vinkki;