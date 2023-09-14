import Testi2 from "./components/Testi2";

function TestComponent() {
    const linkki = "https://www.google.fi";
    const className1 = "App-link";
    return (
        //jsx syntaksia voidaan käyttää täällä sisällä <div> -> <>
        <>
            {/*Testi2 tuodaan toisesta kansiosta ja react päivittää polun automaattisesti*/}
            <Testi2/>
            <a
            className={className1}
            href={linkki} //huom aaltosulkeiset
            target="_blank"
            rel="noopener noreferrer"
            >
                Learn React
            </a>
        </>
    );
}

export default TestComponent;