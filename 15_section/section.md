Section 15: Sending Http Requests (e.g. Connecting to a Database)

290. Module Introduction

291. How (Not) To Connect To a Database

292. Starting Project & Dummy Backed API
-preuzmemeo pocetne fajlove i instaliramo projekt sa komandom npm i
-u backend folderu instaliramo projekt sa komandom npm i

293. Preparing the App For Data Fetching
-pokrecemo backend sa komandom u terminalu node app.js
-u komponentu AvailablePlaces.jsx importujemo React Hook useState
-kreiramo state varijablu const [availabePlaces, setAvailablePlaces] = useState([])
-kreiramo objekt localStorage.getItem()
-importujemo komponentu Places.jsx
-objekt localStorage pohranimo u varijablu const places
-u return izjavi, komponenti Places dodajemo prop places
-u prop places proslijedujemo varijablu availabePlaces

294. How NOT to Send Http Requests (And Why It's Wrong)
-u kreiramo AvailablePlaces.jsx kreiramo funkciju fetch()
-u funkciju fetch proslijedujemo zahtjev 
-funkciju fetch dodajemo metodu .then()
-funkciji then() dodajemo parametar response
-funkciji fetch() dodajemo jos jednu metodu .then()
-funkciji then() dodajemo parametar resData

295. Sending HTTP Requests (GET Request) via useEffect
-u komponenti AvailablePlaces.jsx kreiramo funkciju useEffect
-u funkciju useEffect() dodajemo funkciju fetch()
-u komponenti Places.jsx, u return izjavi, img elementu u src atribut dodajemo dinamicki zahtjev za sliku

296. Using async/await
-u komponenti AvailablePlaces.jsx, u funkciji useEffect() kreiramo asinhronu funkciju fetchPlaces()
-u funkciji fetchPlaces() kreiramo varijable const response i const resData
-u funkciju fetchPlaces() dodajemo funkciju setAvailablePlaces(resData.places)
-u funkciji useEffect() pozivamo funkciju fetchPlaces()

297. Handling Loading States
-u komponenti AvailablePlaces.jsx kreiramo state varijable const [isFetching, setIsFetching] = useState(false)
-u funkciji useEffect(), u funkciju fetchPlaces() dodajemo funkciju setIsFetching(true)
-u funkciju fetchPlaces() dodajemo funkciju jos jednom kada dobijemo podatke setIsFetching(false)

298. Handling HTTP Errors
-u komponenti AvailablePlaces.jsx, u funkciju useEffect() dodajemo uslov if (!response.ok)
-u uslov if dodajemo metodu throw new Error objekt
-u funkciju fetchPlaces() dodajemo try - catch blokove koda
-kreiramo state varijablu const [error, setError] = useState()
-u blok koda catch (error) dodajemo funkciju setError(error)
-funkciju setAvailablePlaces(resData.places) premjestamo u blok koda try
-kreiramo komponentu Error.jsx
-u komponentu AvailablePlaces.jsx importujemo komponentu Error.jsx
-dodajemo uslov if (error)
-u uslov if dodajemo komponentu Modal.jsx
-komponenti Error dodajemo prop title, message
-u bloku koda catch (error) u funkciju setError dodajemo objekt { message: ... || ...}

299. Transforming Fetched Data
-u komponenti AvailablePlaces kreiramo objekt navigator
-objektu navigator dodajemo metode geolocation. ,.getCurrentPosition()
-importujemo loc.js fajl
-u funkciji getCurrentPosition() kreiramo anonimnu funkciju sa parametrom position
-u anonimnu funkciju dodajemo funkciju sortPlacesByDistance()
-vrijednost funkcije sortPlacesByDistance() pohranjujemo u varijablu const sortedPlaces
-u anonimnu funkciju dodajemo funkciju setAvailablePlaces(sortedPlaces)
-funkciju setIsFetching(false) premjestamo u anonimnu funkciju
-u blok koda catch(error) dodajemo funkciju setIsFetching(false)

300. Extracting Code & Improving Code Structure
-kreiramo http.js fajl
-u http.js fajlu kreiramo asinhronu funkciju fetchAvailablePlaces()
-premjestamo varijable response, resData, uslov if (!response.ok) u funkciju fetchAvailablePlaces() iz AvailablePlaces.jsx komponente
-u komponentu AvailablePlaces.jsx importujemo funkciju fetchAvailablePlaces iz http.js fajla
-u bloku koda try dodajemo funkciju fetchAvailablePlaces()
-ispred funkcije fetchAvailablePlaces() dodajemo kljucnu rijec await
-vrijednost funkcije fetchAvailablePlaces() pohranjujemo u varijablu const places

301. Sending Data with POST Requests
-u http.js fajlu kreiramo i eksportujemo asinhronu funkciju updateUserPlaces() sa parametrom places
-u funkciju updateUserPlaces() dodajemo funkciju fetch()
-u funkciju fetch() dodajemo link kao prvi argument, konfiguracijski objekt kao drugi argument
-ispred funkcije fetch() dodajemo kljucnu riject await
-vrijednost funkcije fetch() pohranjujemo u varijablu const response
-u funkciji updateUserPlaces() kreiramo varijablu const resData
-dodajemo uslov if (!response.ok)
-u uslov if dodajemo throw new Error()
-u komponentu App.jsx importujemo funkciju updateUserPlaces iz http.js fajla
-u funkciju handleSelectPlace() dodajemo funkciju updateUserPlaces()
-u funkciju updateUserPlaces() dodajemo niz [selectedPlace, ...userPlaces]
-ispred funkcije handleSelectPlace() dodajemo kljucnu rijec async
-ispred funkcije updateUserPlaces() dodajemo kljucnu rijec await
-u funkciju handleSelectPlace() dodajemo try - catch blokove koda

302. Using Optimistic Updating
-u komponenti App.jsx u bloku koda try dodajemo funkciju updateUserPlaces()
-u bloku koda catch (error) dodajemo funkciju setUserPlaces(userPlaces)
-kreiramo state varijablu const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState()
-u blok koda catch (error) dodajemo funkciju setErrorUpdatingPlaces({ message: ... || ... })
-importujemo komponente Modal.jsx i Error.jsx
-u return izjavu dodajemo komponenti Modal otvarajuci i zatvarajuci tag
-u komponentu Modal dodajemo komponentu Error
-komponenti Modal dodajemo prop open, onClose
-komponenti Error dodajemo prop title, message, onCofirm
-kreiramo funkciju handleError()
-u funkciju handleError() dodajemo funkciju setErrorUpdatingPlaces(null)
-u komponentu Modal dodajemo uslov { errorUpdatingPlaces && ... }

303. Deleting Data (via DELETE HTTP Requests)
-u komponenti App.jsx, u funkciji handleRemovePlace() dodajemo funkciju updateUserPlaces()
-u funkciju updateUserPlaces() dodajemo varijablu userPlaces
-varijabli userPlaces dodajemo metode .filter()
-ispred funkcije updateUserPlaces() dodajemo kljucnu rijec await
-dodajemo blokove koda try - catch
-u blok koda try dodajemo funkciju updateUserPlaces()
-u blok koda catch (error) dodajemo funkciju setUserPlaces(userPlaces)
-u blok koda catch (error) dodajemo funkciju setErrorUpdatingPlaces({ message: ... || ... })

304. Practice: Fetching Data
-u http.js fajlu kreiramo funkciju fetchUserPlaces()
-u komponentu App.jsx importujemo React Hook useEffect()
-kreiramo funkciju useEffect() sa dva argumenta, anonimna funkcija i niz 
-u anonimnoj funkciji kreiramo asinhronu funkciju fetchPlaces()
-u funkciju fetchPlaces() dodajemo funkciju await fetchUserPlaces()
-vrijednost funkcije fetchUserPlaces() pohranimo u varijablu const places
-dodajemo funkciju setUserPlaces(places)
-u funkciju fetchPlaces() dodajemo blokove koda try - catch
-kreiramo state varijable isFetching i error
-u funkciju fetchPlaces() dodajemo funkciju setIsFetching(true)
-nakon catch bloka koda dodajemo funkciju setIsFetching(false)
-u blok koda catch (error) dodajemo funkciju setError({ message: { ... ||... }})
-u return izjavi, komponenti Places dodajemo prop isLoading i loadingText
-u main element dodajemo uslov {error && ... }
-u main element dodajemo jos jedan uslov {!error && ... }
