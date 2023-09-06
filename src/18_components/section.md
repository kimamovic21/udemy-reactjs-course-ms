React - The Complete Guide  (18_section)
Diving into Redux (An Alternative To The Context API)


260. 
-pogled na stanja u React aplikacijama


261. 
-Redux vs React Context


262. 
-Kako Redux radi


263. 
-Redux createStore() nije zastarjelo


264. 
-istrazivanje osnovnih koncepata Redux-a
-kreiramo redux-demo.js fajl
-npm i redux
-u redux-demo.js fajlu kreiramo redux i store varijable
-kreiramo counterReducer funkciju sa state i action parametrima
-kreiramo counterSubscriber funkciju
-dodajemo store.subscribe(counterSubscriber)
-dodajemo store.dispatch()


265. 
-vise Redux osnova
-u counterReducer funkciju dodajemo if uslov


266. 
-pripremanje novog foldera
-kopiramo pocetne fajlove
-npm i react redux


267. 
-kreiranje redux radnje za react
-kreiramo store folder i unutar njega kreiramo store.js fajl
-kreiramo counterReducer funkciju
-kreiramo store varijablu


268. 
-snadbijevanje store
-u index.js fajlu importujemo Provider komponentu
-Provider komponenti dodajemo store={store}


269. 
-koristenje redux podataka u react komponentama
-u Counter.jsx komponentu importujemo useSelector React hook
-u Counter.jsx komponenti kreiramo counter varijablu
-unutar div elementa dodajemo counter varijablu


270. 
-otpremanje akcije iz unutrasnje komponente
-kreiramo div element u kojem se nalaze dva button elementa
-u Counter.jsx komponentu importujemo useDispatch React hook
-kreiramo dispatch varijablu
-kreiramo incrementHandler i decrementHandler funkcije
-u incrementHandler i decrementHandler funkcijama pozivamo dispatch funkciju sa argumentom type
-button elementima dodajemo onClick dogadaje
-prvom button elementu u onClick dogadaj proslijedujemo incrementHandler funkciju
-drugom button elementu u onClick dogadaju proslijedujemo decrementHandler funkciju


271. 
-redux sa klasnim komponentama


272. 
-prikljucivanje payload prema actions
-u myStore.js fajlu dodajemo if uslov za type increase
-u Counter.jsx komponenti kreiramo increaseHandler funkciju
-kreiramo button element za increase


273. 
-rad sa vise stanja
-u myStore.js fajlu, unutar counterReducer funkcije, state parametru dodajemo showCounter: true
-kreiramo varijablu initialState
-state parametru proslijedimo vrijednost initialState varijable
-u uslov za increment dodajemo showCounter: state.showCounter
-dodajemo if uslov za type toggle
-u uslovu za if type toggle dodajemo showCounter: false
-u uslovu za if type toggle dodajemo counter: state.counter
-u Counter.jsx komponenti, unutar funkcije toggleCounterHandler dodajemo dispatch funkciju
-u Counter.jsx komponenti kreiramo show varijablu
-u return izjavi dodajemo uslov {show && <div> ... </div>} za pojavljivanje div elementa


274. 
-kako da radimo sa Redux stanjem ispravno


275. 
-Redux izazovi i upoznavanje sa Redux Toolkit


276. 
-dodavanje state slice
-npm install @reduxjs/toolkit
-u myStore.js fajl importujemo createSlice
-kreiramo createSlice funkciju


277. 
-povezivanje Redux Toolkit stanja
-kreiramo varijablu counterSlice
-u myStore.js fajl importujemo configureStore 
-pravimo izmjene u store varijabli


278. 
-prebacivanje svega u Redux Toolkit
-u myStore.js fajlu kreiramo counterActions varijablu
-u Counter.jsx komponentu importujemo counterActions varijablu
-u dispatch funkcijama pozivamo counterActions funkciju


279. 
-rad sa vise Splice
-u App18.js fajl importujemo Header i Auth komponente
-u myStore.js fajlu kreiramo createSlice() funkciju
-kreiramo varijablu initialAuthState
-kreiramo varijablu authSlice
-kreiramo i eksportujemo varijablu authActions


280. 
-citanje i otpremanje iz novog slice
-u App18.js fajl importujemo useSelector React hook
-u App18 funkciji pozivamo useSelector funkciju
-kreiramo varijablu isAuth
-u return izjavi dodajemo dva uslova !isAuth i isAuth
-u Header.jsx komponentu importujemo useSelector
-u Header.jsx komponentu dodajemo isAuth && uslov
-u Auth.jsx komponenti kreiramo loginHandler funkciju
-form elementu dodajemo onSubmit dogadaj kojem proslijedujemo loginHandler funkciju
-u Auth.jsx komponentu importujemo useDispatch React hook
-importujemo authActions
-u Auth funkciji kreiramo dispatch varijablu 
-u loginHandler funkciju dodajemo dispatch(authActions.login)
-u Header.jsx komponenti kreiramo logoutHandler funkciju
-importujemo useDispatch i authActions
-button elementu dodajemo onClick dogadaj i proslijedimo mu logoutHandler funkciju
-kreiramo dispatch varijablu
-u logoutHandler funkciju dodajemo dispatch(authActions.logout())


281. 
-razdvajanje naseg koda
-kreiramo counter.js i auth.js fajlove


282. 
-sazetak
