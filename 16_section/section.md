Section 16: Building Custom React Hooks

319. Module Introduction & Starting Project

320. Revisting the "Rules of Hooks" & Why To Use Hooks

321. Creating a Custom Hook
-u folderu src kreiramo folder hooks
-u folderu hooks kreiramo useFetch.js fajl
-u useFetch.js fajlu kreiramo funkciju useFetch() sa parametrom fetchFn
-u funkciju useFetch() dodajemo funkciju useEffect()

322. Custom Hook: Managing State & Returning State Values
-u useFetch.js fajl importujemo React Hook useState i useEffect
-kreiramo state varijable isFetching, error, fetchedData
-u funkciji useEffect() kreiramo asinhronu funkciju fetchData()
-u return izjavu dodajemo objekt
-u objekt dodajemo state varijable kao kljuceve
-eksportujemo funkciju useFetch(fetchFn)
-u komponentu App.jsx imporutjemo funkciju useFetch iz useFetch.js fajla
-kreiramo funkciju useFetch() sa parametrom fetchUserPlaces
-rezultat funkcije useFetch() pohranjujemo u varijable destruktuirani objekt

323. Exposing Nested Functions From The Custom Hook¸

324. Using a Custom Hook in Multiple Components
-u komponentu AvailablePlaces.jsx importujemo funkciju useFetch
-u funkciji AvailablePlaces() kreiramo funkciju useFetch()
-funkciji useFetch() dodajemo argumente fetchAvailablePlaces i []
-vrijednost funkcije useFetch() pohranjujemo u varijable destruktuirani objekt isFetching, error, fetchedData, setFetchedData
-preimenujemo fetchedData u availablePlaces
-preimenujemo setFetchedData u setAvailablePlaces

325. Creating Flexible Custom Hooks
-u komponenti AvailablePlaces.jsx kreiramo funkciju fetchSortedPlaces()
-u funkciji fetchSortedPlaces() kreiramo varijablu const places
-kreiramo new Promise()
