import Vinkki from "./Vinkki";

function Luetuimmat(props){
   
    return(
        <> 
            <hr/>
                <Vinkki tiedot = {props.luetuimmatUutiset[0]}/>
                <Vinkki tiedot = {props.luetuimmatUutiset[1]}/>
                <Vinkki tiedot = {props.luetuimmatUutiset[2]}/>
                <Vinkki tiedot = {props.luetuimmatUutiset[3]}/>
                <Vinkki tiedot = {props.luetuimmatUutiset[4]}/>
        </>
    );
}
export default Luetuimmat;