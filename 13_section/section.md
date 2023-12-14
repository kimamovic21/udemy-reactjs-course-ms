Section 13: A Look Behind The Scemes of React & Optimization Techniques

267. Module Introduction
-preuzmemo starter fajlove i instaliramo Vite ReactJS projekt sa npm install

268. React Builds A Component Tree / How React Works Behind The Scenes

269. Analyzinh Component Function Executions via React's DevTools Profiler

270. Avoiding Component Function Executions with memo()
-u komponentu Counter.jsx, importujemo funkciju memo
-funkciju Counter dodajemo u funkciju memo
-vrijednost funkcije memo pohranjujemo u varijablu const Counter

271. Avoiding Component Function Executions with Clever Structuring
-u folderu Counter kreiramo komponentu ConfigureCounter.jsx
-u komponentu App.jsx importujemo komponentu ConfigureCounter.jsx
-kreiramo funkciju handleSetCount sa parametrom newCount
-u return izjavi komponenti ConfigureCounter dodajemo prop onSet
-u prop onSet proslijedujemo funkciju handleSetCount
-u komponenti ConfigureCounter, funkciji ConfigureCounter dodajemo parametar destruktuirani prop onSet
-kreiramo state varijablu const [enteredNumber, setEnteredNumber] = useState(0)
-kreiramo funkcije handleChange() i handleSetClick()
-u funkciju handleSetClick() dodajemo funkcije onSet(enteredNumber) i setEnteredNumber(0)
-u funkciju handleChange() dodajemo funkciju setEnteredNumber()
-importujemo funkciju log iz log.js fajla

272. Understanding the useCallback() Hook
-u komponentu Counter.jsx importujemo React Hook useCallback
-kreiramo funkciju useCallback()
-u funkciju useCallback dodajemo funkciju handleDecrement()
-vrijednost funkcije useCallback() pohranjujemo u varijablu const handleDecrement
-uradimo isti postupak za funkciju handleIncrement

273. Understanding the useMemo() Hook
-u komponentu Counter.jsx importujemo React Hook useMemo
-u funkciji Counter.jsx kreiramo funkciju useMemo()
-vrijednost funkcije useMemo() pohranjujemo u varijablu const initialCountIsPrime

274. React Uses A Virtual DOM - Time to Explore It!

275. Why Keys Matter When Managing State!
-kreiramo komponentu CounterHistory
-u komponentu Counter.jsx importujemo komponentu CounterHistory.jsx
-u return izjavi komponenti CounterHistory dodajemo prop history
-u prop history proslijedujemo varijablu couterChanges

276. More Reasons For Why Keys Matter

277. Using Keys For Resetting Components
-u komponentu Counter importujemo React Hook useEffect
-kreiramo funkciju useEffect()
-u funkciju useEffect() dodajemo funkciju setCounterChanges()
-u komponenti App.jsx, u return izjavi komponenti Counter dodajemo prop key

278. State Scheduling & Batching
-u komponenti App.jsx, u funkciji handleSetCount() dodajemo funkciju setChosenCount()

279. Optimizing React with MillionJS
-otvorimo web stranicu https://million.dev/
-instaliramo Paket Million
-u terminal ukucamo komandu npm install million
-editujemo vite.config.js fajl
