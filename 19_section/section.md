React - The Complete Guide  (18_section)
Diving into Redux (An Alternative To The Context API)

402. Module Introduction

403. Another Look at State in React Apps

404. Redux vs React Context

405. How Redux Works

406. MUST READ: Redux createStore() is (not) deprecated

407. Exploring The Core Redux Concepts
-kreiramo redux-demo.js fajl
-npm i redux
-u redux-demo.js fajlu kreiramo redux i store varijable
-kreiramo counterReducer funkciju sa state i action parametrima
-kreiramo counterSubscriber funkciju
-dodajemo store.subscribe(counterSubscriber)
-dodajemo store.dispatch()

408. More Redux Basics
-vise Redux osnova
-u counterReducer funkciju dodajemo if uslov

409. Preparing a new Project
-pripremanje novog foldera
-kopiramo pocetne fajlove
-npm i react redux

410. Creating a Redux Store for React
-kreiranje redux radnje za react
-kreiramo store folder i unutar njega kreiramo store.js fajl
-u index.js fajlu kreiramo funkciju createStore()
-importujemo funkciju createStore iz redux-a
-kreiramo counterReducer() funkciju sa dva parametra state i action
-u funkciju counterReducer() dodajemo dva uslova if
-dodajemo return store
-vrijednost funkcije createStore(counterReducer) pohranjujemo u varijablu const store
-eksportujemo varijablu store kao default

411. Providing the Store
-snadbijevanje store
-u index.js fajl importujemo Provider komponentu
-importujemo varijablu store 
-u root.render() dodajemo komponentu Provider sa otvorenim i zatvorenim tagom
-Provider komponenti dodajemo prop Store
-u prop store proslijedujemo varijablu store

412. Using Redux Data in React Components
-koristenje redux podataka u react komponentama
-u Counter.jsx komponentu importujemo useSelector React hook
-kreiramo funkciju useSelector()
-u funkciju useSelector() dodajemo anonimnu funkciju sa parametrom state
-vrijednost funkcije useSelector() pohranjujemo u varijablu const counter
-u return izjavi unutar div elementa dodajemo counter varijablu


413. Dispatching Actions From Inside Component
-otpremanje akcije iz unutrasnje komponente
-kreiramo div element u kojem se nalaze dva button elementa
-u Counter.jsx komponentu importujemo useDispatch React hook
-kreiramo funkciju useDispatch()
-vrijednost funkcije useDispatch() pohranjujemo u varijablu const dispatch 
-kreiramo funkcije incrementHandler() i decrementHandler()
-u incrementHandler() i decrementHandler() funkcijama dodajemo varijablu dispatch sa argumentom type
-button elementima dodajemo onClick dogadaje
-prvom button elementu u onClick dogadaj proslijedujemo incrementHandler funkciju
-drugom button elementu u onClick dogadaju proslijedujemo decrementHandler funkciju

414. Redux with Class-based Components
-redux sa klasnim komponentama

415. Attaching Payloads to Actions
-prikljucivanje payload prema actions
-u index.js fajlu dodajemo if uslov za type increase
-u Counter.jsx komponenti kreiramo increaseHandler() funkciju
-u funkciju increaseHandler() dodajemo funkciju dispatch()
-kreiramo button element za increase

416. Working with Multiple State Properties 
-rad sa vise stanja
-u index.js fajlu, unutar counterReducer() funkcije, state parametru dodajemo showCounter: true
-kreiramo varijablu initialState
-state parametru proslijedimo vrijednost initialState varijable
-u uslovima za increment, increase, decrement dodajemo showCounter: state.showCounter
-dodajemo if uslov za type toggle
-u uslovu za if type toggle dodajemo showCounter: !state.showCounter
-u uslovu za if type toggle dodajemo counter: state.counter
-u Counter.jsx komponenti, unutar funkcije toggleCounterHandler dodajemo dispatch funkciju
-importujemo React Hook useSelector()
-kreiramo funkciju useSelector()
-vrijednost funkcije useSelector() pohranjujemo u varijablu const show
-u return izjavi dodajemo uslov {show && <div> ... </div>} za pojavljivanje div elementa

417. How To Work With Redux State Correctly
-kako da radimo sa Redux stanjem ispravno

418. Redux Challenges & Introducing Redux Toolkit 
-Redux izazovi i upoznavanje sa Redux Toolkit

419. Adding State Slices
-dodavanje state slice
-instaliramo Redux Toolkit paket u terminalu
-u terminal ukucamo komando npm install @reduxjs/toolkit
-u index.js fajl importujemo funkciju createSlice iz paketa Redux Toolkit
-kreiramo createSlice() funkciju
-u funkciji createSlice() kreiramo objekt 
-u objekt dodajemo property name, initialState i reducers
-u objekt reducers dodajemo funkcije increment(), decrement(), increase(), toggleCounter()
-funkcijama increment() i decrement() dodajemo parametar state
-u funkciju increase() dodajemo parametre state, action
-funkciji toggleCounter() dodajemo parametar state

420. Connecting Redux Toolkit State
-povezivanje Redux Toolkit stanja
-u store/index.js fajlu vrijednost funkcije createSlice() pohranjujemo u varijablu const counterSlice
-u store/index.js fajl importujemo funkciju configureStore 
-pravimo izmjene u store varijabli - const store = configureStore({ ... })

421. Migrating Everything To Redux Toolkit
-prebacivanje svega u Redux Toolkit
-u index.js fajlu kreiramo i eksportujemo counterActions() varijablu
-u Counter.jsx komponentu importujemo counterActions varijablu
-u dispatch funkcije dodajemo counterActions() funkciju

422. Working with Multiple Slices
-rad sa vise Splices
-u App.js fajl importujemo komponente Header.jsx i Auth.jsx
-u index.js fajlu kreiramo createSlice() funkciju
-u funkciji createSlice() kreiramo objekt
-kreiramo varijablu objekt const initialAuthState
-u objekt initialAuthState dodajemo property isAuthenticated
-u objekt dodajemo property name, initialState, reducers
-objekt reducers dodajemo funkcije login() i logout()
-funkcijama login() i logout() dodajemo parametar state
-u funkcije login() i logout() dodajemo state.isAuthenticated
-u funkciji configureStore({ ... }) objektu reducer dodajemo vise funkcija
-eksportujemo varijablu const authActions

423. Reading & Dispatching From a New Slice
-citanje i otpremanje iz novog slice
-u App.js fajl importujemo useSelector React Hook
-importujemo funkciju UserProfile.jsx
-u App funkciji kreiramo funkciju useSelector()
-u funkciji useSelector() kreiramo anonimnu funkciju sa parametrom state
-vrijednost funkcije useSelector() pohranjujemo u varijablu const isAuth
-u return izjavi dodajemo uslov {!isAuth && <Auth/>}
-dodajemo uslov {isAuth && <UserProfil/>}
-u Header.jsx komponentu importujemo React Hook useSelector
-u Header.jsx komponenti kreiramo varijablu isAuth
-u return izjavu dodajemo uslov {isAuth && <nav>...</nav>}
-u Auth.jsx komponenti kreiramo loginHandler() funkciju sa parametrom event
-importujemo React Hook useDispatch 
-importujemo authActions
-kreiramo funkciju useDispatch()
-vrijednost funkcije useDispatch() pohranjujemo u varijablu const dispatch
-u return izjavi form elementu dodajemo onSubmit dogadaj
-u loginHandler() funkciju dodajemo dispatch(authActions.login)
-u dogadaj onSubmit proslijedujemo loginHandler() funkciju
-u Header.jsx komponenti kreiramo logoutHandler() funkciju
-importujemo React Hook useDispatch i authActions
-button elementu dodajemo onClick dogadaj
-u dogadaj onCLick proslijedimo funkciju logoutHandler
-kreiramo funkciju useDispatch()
-vrijednost funkcije useDispatch() pohranjujemo u varijablu const dispatch
-u logoutHandler funkciju dodajemo dispatch(authActions.logout())

424. Splitting Our Code
-razdvajanje naseg koda
-kreiramo counter.js i auth.js fajlove
-u counter.js i auth.js fajlove importujemo funkciju createSlice
-eksportujemo kao default counterSlice i authSlice
-u index.js fajl importujemo funkcije counterReducer i authReducer

425. Summary
-preimenujemo index.js u store.js
-preimenujemo auth.js u authSlice.js
-preimenujemo counter.js u counterSlice.js
