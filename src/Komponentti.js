import { faker } from '@faker-js/faker'
//fakerjs.dev, josta voidaan luoda väliaikaista tietoa silloin kuin oikeaa backend tietoa ei ole

function Komponentti(props){
    console.log(props.nro);
    const randomName = faker.person.fullName();
    const randomPhrase = faker.hacker.phrase();

    return(
        <>
            <h1 style={{color: props.väri, backgroundColor: props.back}}>{props.nro}. {randomName}</h1>
            <p className={props.luokka}>{randomPhrase}</p>
        </>
    );
}

export default Komponentti;