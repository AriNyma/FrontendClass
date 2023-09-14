import Vinkki from "./Vinkki";

function Luetuimmat(props){
   
    return(
        <> 
            <h1>Luetuimmat</h1>
            <hr/>{props.luetuimmatUutiset.map(x => <Vinkki tiedot={x}/>)}
        </>
    );
}
export default Luetuimmat;