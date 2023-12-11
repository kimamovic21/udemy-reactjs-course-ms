Section 11: Handling Side Effects & Working with the useEffect() Hook

195. Module Introduction
-preuzmemo starte fajlove i instaliramo Vite ReactJS projekt sa npm install

196. What's a "Side Effect"? A Thorough Example
-u komponenti App.jsx kreiramo objekt navigator
-objektu navigator dodajemo geolocation i getCurrentPosition()
-u funkciju getCurrentPosition() dodajemo callback funkciju
-callback funkciji dodajemo parametar objekt position
-importujemo funkciju sortPlacesByDistance 
-u callback funkciju dodajemo funkciju sortPlacesByDistance()
-importujemo niz AVAILABLE_PLACES iz data.js fajla
-funkciji sortPlacesByDistance() dodajemo tri argumenta AVAILABLE_PLACES, position.coords.latitute, position.coords.longitude
-rezultat funkcije sortPlacesByDistance() pohranimo u varijablu const sortedPlaces

197. A Potential Problem with Side Effects: An Infinite Loop
-u komponentu App.jsx importujemo React Hook useState()
-kreiramo state varijablu [availablePlaces, setAvailablePlaces] = useState([])
-u funkciju getCurrentPosition() dodajemo funkciju setAvailablePlaces(sortedPlaces)

198. Using useEffect for Handling (Some) Side Effects
-u komponentu App.jsx importujemo React Hook useEffect()
-u funkciji App() kreiramo funkciju useEffect()
-funkciji useEffect() dodajemo dva argumenta, callback funkciju i niz []
-u callback funkciju dodajemo funkciju navigator.geolocation.getCurrentPosition()
-u return izjavi, komponenti Places dodajemo prop fallbackText

199. Not All Side Effects Need useEffect
-u komponenti App.jsx, u funkciji handleSelectPlace(id) dodajemo objekt localStorage
-objektu localStorage dodajemo metodu .setItem()
-u funkciju handleSelectPlace(id) dodajemo metodu JSON.parse()
-rezultat funkcije JSON.parse() pohranjujemo u varijablu const storedIds
-dodajmo uslov if (storedIds.indexOf())

200. useEffect Not Needed: Another Example
-u komponenti App.jsx, u funkciji handleRemovePlace() kreiramo varijablu storedIds
-dodajemo objekt localStorage
-objektu localStorage dodajemo metodu .setItem()
-u metodu JSON.stringify() dodajemo varijablu storedIds
-varijabli storedIds dodajemo metodu .filter()
-u funkciji App kreiramo funkciju useEffect()
-u funkciji useEffect() kreiramo varijable const storedIds i sortedPlaces
-u funkciju useEffect() dodajemo funkciju setPickedPlaces(storedPlaces)

201. Preparing Another Use-Case For useEffect
-u komponenti Modal.jsx, u return izjavi elementu dialog dodajemo prop open
-u komponenti App.jsx kreiramo state varijablu [modalIsOpen, setModalIsOpen] = useState(false)

202. Using useEffect() for Syncing With Browser APIs
-u komponenti Modal.jsx dodajemo uslov if (open)
-u uslov if dodajemo dialog.current.showModal()
-dodajemo uslov else
-u uslov else dodajemo dialog.current.close()
-u komponentu Modal.jsx importujemo React Hook useEffect
-kreiramo funkciju useEffect()
-u funkciju useEffect() premjestamo uslov if - else

203. Understanding Effect Dependencies

204. Fixing a Small Bug

205. Preparing Another Problem That Can Be Fixed with useEffect
-u komponenti DeleteConfirmation kreiramo funkciju setTimeout
-u funkciju setTimeout() dodajemo funkciju onConfirm

206. Introducing useEffect's Cleanup Function
-u komponentu DeleteConfirmation.jsx importujemo React Hook useEffect
-u funkciji DeleteConfirmation() kreiramo funkciju useEffect()
-u funkciju useEffect() dodajemo funkciju setTimeout()
-u funkciju setTimeout() dodajemo funkciju onConfirm()
-u funkciju useEffect() dodajemo return izjavu
-u funkciji useEffect() kreiramo varijablu const timer()
-u return izjavu dodajemo funkciju clearTimeout(timer)

207. The Problem with Object & Function Dependencies

208. The useCallback Hook
-u komponentu App.jsx importujemo React Hook useCallback
-u funkciji App() kreiramo funkciju useCallback()
-funkciji useCallback() dodajemo dva argumenta
-prvi argument funkcije useCallback() je funkcija handleRemovePlace()
-drugi argument funkcije useCallback() je niz
-vrijednost funkcije useCallback() pohranjujemo u varijablu const handleRemovePlace

209. useEffect's Cleanup Function: Another Example
-u komponenti DeleteConfirmation.jsx, u return izjavi kreiramo HTML element progress
-kreiramo varijablu const TIMER = 3000
-kreiramo state varijablu const [remainingTime, setRemainingTime] = useState(TIMER)
-kreiramo funkciju setInterval()
-u funkciju setInterval() dodajemo funkciju setRemainingTime()
-u return izjavi progress elementu dodajemo atribut value, max
-u atribut value proslijedujemo varijablu remainingTime
-kreiramo funkciju useEffect()
-u funkciju useEffect() dodajemo funkciju setInterval()
-u funkciji useEffect(), u return izjavu dodajemo anonimnu Cleanup funkciju
-vrijednost funkcije setInterval() pohranjujemo u varijablu const interval
-u Cleanup funkciju dodajemo funkciju clearInterval(interval)

210. Optimizing State Updates
-kreiramo komponentu ProgressBar.jsx
-iz komponente DeleteConfirmation.jsx premjestamo kod useEffect() i state varijablu u komponentu ProgressBar.jsx
-funkciji ProgressBar() dodajemo parametar destruktuirani prop timer
-u komponentu DeleteConfirmation importujemo komponentu ProgressBar.jsx
-u return izjavi komponenti ProgressBar dodajemo prop timer
-u prop timer proslijedujemo varijablu TIMER
