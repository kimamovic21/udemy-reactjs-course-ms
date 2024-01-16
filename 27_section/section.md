Section 27: Testing React Apps (Unit Tests)

583. Module Introduction

584. What & Why ?

585. Understanding Different Kinds of Tests

586. What To Test & How To Test

587. Understanding the Technical Setup & Involved Tools

588. Running a First Test
-u terminal ukucamo komandu npm test

589. Writing Our First Test
-kreiramo folder components
-u folderu components kreiramo komponentu Greeting.js
-u komponentu App.js importujemo komponentu Greeting.js
-kreiramo Greeting.test.js fajl
-u Greeting.test.js fajlu kreiramo funkciju test()
-prvi argument funkcije test() je naziv testa
-drugi argument funkcije test() je anonimna funkcija
-Pisanje testova - tri "A" (Arrange, Act, Assert)
-u Greeting.test.js fajl importujemo komponentu Greeting.js
-importujemo funkciju render
-u anonimnu funkciju dodajemo funkciju render()
-u funkciju render() dodajemo komponentu Greeting
-importujemo funkciju screen
-u anonimnu funkciju dodajemo funkciju screen
-funkciji screen() dodajemo funkciju .getByText()
-u funkciju getByText() dodajemo string
-vrijednost funkcije screen() pohranjujemo u varijablu const helloWorldElement
-u anonimnu funkciju dodajemo funkciju expect()
-u funkciju expect() dodajemo varijablu helloWorldElement
-funkciji expect() dodajemo funkciju toBeInTheDocument()

590. Grouping Tests Together With Test Suites
-u Greeting.test.js fajl dodajemo funkciju describe()
-prvi argument funkcije describe() je string
-drugi argument funkcije describe() je anonimna funkcija
-u anonimnu funkciju dodajemo funkciju test()

591. Testing User Interaction & State
-u komponentu Greeting.js kreiramo state varijablu const [changedText, setChangedText] = useState(false)
-kreiramo funkciju changeTextHandler()
-u funkciju changeTextHandler() dodajemo funkciju setChangedText(true)
-u return izjavu dodajemo uslov {!changedText && <p>...</p>}
-dodajemo uslov {changedText && <p>...</p>}
-button elementu dodajemo dogadaj onClick
-u dogadaj onClick proslijedujemo funkciju changeTextHandler
-u Greeting.test.js fajl dodajemo jos dvije funkcije test()
-u prvoj funkciji, prvi argument je tekst da se dio teksta renderuje ako dugme nije kliknuto
-u drugi argument, u anonimnu funkciju dodajemo funkciju render(<Greeting />)
-kreiramo varijablu const outputElement
-dodajemo funkciju expect(outputElement)
-u drugoj funkciji, prvi argument je tekst da se dio dio teksta renderuje ako je dugme kliknuto
-u drugi argument, u anonimnu funkciju dodajemo funkciju render (<Greeting />)
-importujemo objekt userEvent
-u anonimnu funkciju dodajemo objekt userEvent
-objektu userEvent dodajemo funkciji .click()
-kreiramo varijablu const buttonElement
-u funkciju click() dodajemo varijablu
-kreiramo varijblu const outputElement
-dodajemo funkciju expect(outputElement)
-funkciji expect() dodajemo funkciju toBeInTheDocument()
-kreiramo cetvrtu funkciju test()
-prvi argument je tekst da se renderuje dio teksta ako je dugme kliknuto
-u anonimnu funkciju dodajemo funkciju render()
-kreiramo varijablu const buttonElement
-kreiramo varijblu const outputElement
-varijbli screen dodajemo funkciju queryByText
-u funkciji queryByText() dodajemo u prvi argument string 
-u drugi argument dodajemo objekt exact: false
-funkciji expect() dodajemo funkciju toBeNull()

592. Testing Connected Components
-kreiramo komponentu Output.js
-funkciji Output dodajemo parametar props
-u return izjavu dodajemo props.children
-u komponentu Greeting.js importujemo komponentu Output.js
-u uslove !changedText i changedText dodajemo komponentu Output sa otvorenim i zatvorenim tagom

593. Testing Asynchronous Code
-kreiramo komponentu Async.js
-kreiramo Async.test.js fajl
-u Async.test.js fajlu kreiramo funkciju describe()
-importujemo funkcije render, screen
-prvi argument funkcije describe() je string
-drugi argument funkcije describe() je anonimna funkcija
-u anonimnu funkciju dodajemo funkciju test()
-prvi argument funkcije test je string da se post renderuje ako je zahtjev uspjesan
-drugi argument funkcije test() je anonimna funkcija
-u anonimnu funkciju dodajemo funkciju render()
-u anonimnu funkciju dodajemo funkciju screen()
-funkciji screen() dodajemo funkciju findAllByRole()
-vrijednost funkcije screen pohranjujemo u varijablu const listItemElements
-dodajemo funkciju expect()
-u funkciju expect() dodajemo varijablu listItemElements
-funkciji expect() dodajemo funkciju .not.toHaveLength(0)
-u funkciji test(), anonimnoj funkciji dodajemo kljucnu rijec async
-ispred funkcije screen() dodajemo kljucnu rijec await

594. Working With Mocks
-u Async.test.js fajlu, u funkciju test() dodajemo window.fetch = jest.fn()
-dodajemo window.fetch.mockResolvedValueOnce()
-u funkciju mockResolvedValueOnce() dodajemo objekt
-u objekt dodajemo vrijednost json
-u vrijednost json dodajemo asinhronu anonimnu funkciju

595. Summary & Further Resources
