Section 8: Debugging React Apps

139. Module Introduction & Starting Project

140. Repetition: Managing User Input with State(Two-Way-Binding)
-u komponenti Player.jsx kreiramo state varijablu const [enteredPlayerName, setEnteredPlayerName] = useState('')
-kreiramo funkciju handleChange sa parametrom event
-u funkciju handleChange() dodajemo funkciju setEnteredPlayerName()
-input elementu dodajemo dogadaj onChange
-u dogadaj onChange proslijedujemo vrijednost funkcije handleChange
-input elementu dodajemo prop value
-u prop value proslijedujemo varijalbu enteredPlayerName
-kreiramo state varijablu const [submitted, setSubmitted] = useState(false)
-kreiramo funkciju handleClick()
-u funkciju handleClick proslijedujemo funkciju setSubmitted(true)
-button elementu dodajemo dogadaj onClick
-u dogadaj onClick proslijedujemo funkciju handleClick
-u h2 element dodajemo ternarni uslov {submitted ? ... : ...}
-u funkciju handleChange() dodajemo funkciju setSubmitted(false)

141. Repetiton: Fragments

142. Introducing Refs: Connecting & Accessing HTML Elements via Refs
-u komponentu Player.jsx importujemo React Hook useRef
-kreiramo funkciju useRef()
-vrijednost funkcije useRef() pohranimo u varijablu const playerName
-input elementu dodajemo prop ref
-u prop ref proslijedujemo varijablu playerName
-u funkciju handleClick() dodajemo varijablu playerName
-varijabli playerName dodajemo metode .current.value
-u funkciju handleClick() dodajemo metodu setEnteredPlayerName
-u h2 element dodajemo uslov enteredPlayerName

Coding Exercise 22: Accessing DOM Elements with "refs"

143. Manipulating the DOM via Refs

144. Refs vs State Values

145. Adding Challenges to the Demo Project
-kreiramo komponentu TimerChallenge.jsx
-funkciji TimerChallenge dodajemo parametar destruktuirani prop title, targetTime
-u return izjavu dodajemo uslov ternarni operator {targetTime > 1 ? ... : ...}
-u komponentu App.jsx importujemo komponentu TimerChallenge
-komponentama TimerChallenge dodajemo prop title, targetTime

146. Settings Timers & Managing State
-u komponenti TimerChallenge.jsx kreiramo funkciju handleStart()
-u funkciju handleStart() kreiramo funkciju setTimeout()
-kreiramo state varijablu const [timerExpired, setTimerExpired] = useState(false)
-u funkciju setTimeout() dodajemo funkciju setTimerExpired(true)
-u return izjavu dodajemo uslov {timerExpired && ...}
-button elementu dodajemo dogadaj onClick
-u onClick dogadaj proslijedujemo funkciju handleStart
-kreiramo state varijablu const [timerStarted, setTimerStarted] = useState(false)
-u funkciju handleStart() dodajemo funkciju setTimerStarted(true)
-u button element dodajemo ternarni uslov {timerStarted ? ... : ...}
-p elementu dodajemo className
-u className dodajemo dinamicku klasu ternarni uslov {timerStarted ? ... : ...}
-u p element dodajemo ternarni uslov {timerStarted ? ... : ...}
-kreiramo funkciju handleStop()

147. Using Refs for More Than "DOM Element Connections"
-u komponenti TimerChallenge.jsx, u funkciji handleStop() dodajemo funkciju clearTimeout()
-kreiramo varijablu let timer
-u button element dodajemo dogadaj onClick
-u dogadaj onClick dodajemo uslov ternarni operator {timerStarted ? ... : ...}
-u komponentu TimerChallenge.jsx importujemo React Hook useRef
-kreiramo funkciju useRef()
-vrijednost funkcije useRef() pohranimo u varijablu const timer
-u funkciju handleStart() dodajemo varijablu timer.current
-u funkciju handleStop() dodajemo funkciju clearTimeout(timer.current)
-input elementu dodajemo prop ref

Coding Exercise 23: Managing Other Values with Refs

148. Adding a Modal Component
-kreiramo komponentu ResultModal.jsx
-u funkciju ResultModal dodajemo parametre destruktuirane prop result, targetTime
-u komponentu TimerChallenge.jsx importujemo komponentu ResultModal.jsx
-u return izjavu dodjaemo uslov {timerExpired && ...}

149. Forwarding Refs to Cusom Components
-u komponenti TimerChallenge.jsx kreiramo varijablu const dialog
-u return izjavi komponenti ResultModal dodajemo prop ref
-u prop ref proslijedujemo varijablu dialog
-u komponenti ResultModal.jsx, funkciji ResultModal dodajemo parametar destruktuirani prop ref
-dialog element dodajemo prop ref
-u funkciju TimerChallenge.jsx, u funkciju handleStart() dodajemo dialog.current.showModal()
-u komponentu ResultModal.jsx importujemo funkciju forwardRef
-funkciju ResultModal stavljamo u funkciju forwardRef()
-kreiramo varijablu const ResultModal
-funkciji ResultModal dodajemo parameter ref

Coding Exercise 24: Forwarding Refs

150. Exposing Component APIs via the useImperativeHandle Hook
-u komponentu ResultModal.jsx importujemo useImperativeHandle React Hook
-kreiramo funkciju useImperativeHandle() sa dva argumenta
-prvi argument je ref, a drugi anonimna funkcija
-importujemo React Hook useRef
-kreiramo varijablu const dialog

Coding Exercise 25: Exposing Component APIs

151. More Examples: When To Use Refs & State
-u komponenti TimerChallenge.jsx u funkciju handleStart() dodajemo funkciju setInterval()
-kreiramo state varijablu [timeRemaining, setTimeRemaining] = useState()
-kreiramo varijablu const timerIsActice
-dodajemo uslov if (timeRemaining <=0)
-u uslov if dodajemo funkciju clearInterval()
-u uslov if dodajemo dialog.current.open()
-u funkciju handleStop() dodajemo dialog.current.open()

152. Sharing State Across Components
-u komponenti TimerChallenge.jsx, u return izjavi komponenti ResultModal dodajemo prop remainingTime
-u prop remainingTime proslijedujemo varijablu timeRemaining
-u komponenti ResultModal.jsx, funkciji ResultModal dodajemo parametar destruktuirani prop timeRemaining
-kreiramo varijablu const userLost
-u return izjavu dodajemo uslov {userLost && ...}
-kreiramo varijablu const formattedRemainingTime
-u komponenti TimerChallenge.jsx kreiramo funkciju handleReset()
-u funkciju handleReset() dodajemo funkciju setTimeRemaining()
-u return izjavi komponenti ResultModal dodajemo prop onReset
-u prop onReset proslijedujemo funkciju handleReset
-u komponenti ResultModal.jsx, form elementu dodajemo dogadaj onSubmit
-u dogadaj onSubmit proslijedujemo prop onReset

153. Enhancing the Demo App "Result Modal"
-u komponenti ResultModal.jsx kreiramo varijablu const score
-u return izjavu dodajemo uslov {!userLost && ...}

154. Closing the Modal via the ESC (Escape) Key

155. Introducing & Understanding "Portals"
-u komponentu ResultModal.jsx importujemo fucnkiju createPortal iz react-dom
-u return izjavu dodajemo funkciju createPortal() sa dva argumenta
-prvi argument je jsx kod, a drugi argument HTML element koji postoji u index.html fajlu

Coding Exercise 26: Working with Portals
