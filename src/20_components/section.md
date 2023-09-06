React - The Complete Guide  (20_section)
Building a Multi-Page SPA with React Router

302. 
-pripremanje projekta i instaliranje react routera
-instaliramo RRD paket u terminalu npm i react-router-dom


303. 
-definisanje ruta
-u App20.js fajl importujemo createBrowserRouter
-kreiramo funkciju createBrowserRouter
-u funkciji createBrowserRouter se nalazi niz objekata sa path i element
-vrijednost funkcije createBrowserRouter pohranjujemo u varijablu router
-kreiramo folder pages
-u folderu pages kreiramo Home.jsx komponentu
-u App20.js fajlu importujemo Home.jsx komponentu
-u App20.js fajl importujemo RouterProvider
-u return izjavi dodajemo RouterProvider
-u return izjavi, RouterProvider elementu dodajemo router={router}


304. 
-dodavanje druge rute
-u pages folderu kreiramo Products.jsx komponentu
-u App20.js fajl importujemo Products.jsx komponentu



305. 
-istrazivanje alternativnog nacina definisanja ruta


306. 
-navigiranje izmedu stranica i linkova
-u Home.jsx komponentu importujemo Link komponentu
-Link komponenti dodajemo atribut to='/'


307. 
-rasporedi i ugnjezdene rute
-kreiramo MainNavigation.jsx komponentu
-unutar return izjave kreiramo header, nav, ul, li elemente
-unutar li elementa kreiramo Link komponentu
-u pages folderu kreiramo Root.jsx komponentu
-u App20.js fajl importujemo Root.jsx komponentu
-u Root.jsx komponentu importujemo Outlet komponentu
-kreiramo Root.module.css fajl
-u Root.jsx komponentu importujemo Root.module.css fajl



308. 
-prikazivanje error stranice sa error elementom
-kreiramo Error.jsx komponentu
-u App20.js fajl importujemo Error.jsx komponentu
-u createBrowserRoter funkciji dodajemo errorElement: <Error/>


309. 
-rad sa navigacionim linkovima
-u MainNavigaton.jsx komponentu importujemo NavLink komponentu


310. 
-navigacija programski
-u Home.jsx komponenti importujemo useNavigate React hook
-kreiramo varijablu navigate


311. 
-definisanje i koristenje dinamickih ruta
-kreiramo ProductDetail.jsx komponentu
-u App20.js fajlu importujemo ProductDetail.jsx komponentu
-dodajemo path: '/products/:productId'
-u ProductDetail.jsx komponentu importujemo useParams React hook
-kreiramo params varijablu
-u p elementu dodajemo params.productId


312. 
-dodavanje linkova za dinamicne rute
-u Products.jsx komponenti, unutar return izjave dodajemo Link komponentu
-kreiramo PRODUCTS niz unatar kojeg se nalaze objekti
-u ul elementu dodajemo PRODUCTS.map metodu


313. 
-razumijevanje relativnog i apsolutnog puta


314. 
-rad sa indeks rutama
-u App20.js fajl, u children niz dodajemo index: true, element: <Home />


315. 
-pripremanje novog projekta


316. 
-vrijeme za vjezbu: Problem


317. 
-vrijeme za vjezbu: Rjesenje
-kreiramo 20_backend-api folder
-u 20_20_backend-api folderu kreiramo nove fajlove 
-u App20b.js fajlu importujemo RouterProvider, createBrowserRouter
-kreiramo router varijablu
-kreiramo pages folder
-unutar pages foldera kreiramo jsx komponente


318. 
-dohvacanje podataka sa loader()
-u App20b.js fajlu EventsPage komponenti dodajemo loader property


319. 
-koristenje podataka iz loader u route komponenti
-u Events.jsx komponentu importujemo useLoaderData komponentu


320. 
-vise loader podatkovne upotrebe
-u Events.jsx komponentu kreiramo events varijablu
-u return izjavi dodajemo EventsList sa event prop


321. 
-gdje bi trebao loader() kod biti sacuvan


322. 
-kada se loader() funkcije izvrsavaju


323. 
-odražavanje trenutnog stanja navigacije u korisničkom interfejsu
-u Root.jsx komponenti kreiramo navigation varijablu


324. 
-vracanje odgovora u loader()
-u Events.jsx komponenti kreiramo res varijablu


325. 
-koja vrsta koda ide u loader()


326. 
-rukovanje sa error i custom error
-kreiranje Error.jsx komponente


327. 
-ekstrakcija Error podataka i prikazivanje odgovora


328. 
-json() utility funkcija


329. 
-dinamicne rute i loader funkcije
-u EventDetail.jsx komponenti kreiramo loader funkciju


330. 
-useRouteLoaderData() i pristupanju podataka iz drugih ruta
-kreiramo EditEvent.jsx komponentu
-importujemo useLoaderData() React hook
-kreiramo data varijablu cija je vrijednost jednaka useLoaderData() funkciji
-kreiramo event varijablu
-u EditEvent.jsx komponentu importujemo EventForm.jsx komponentu
-u EventForm.jsx komponenti, input elementima dodajemo defaultValue atribut
-u EventDetail.jsx komponentu importujemo useRouteLoaderData() React hook funkciju


331. 
-planiranje podnosenja podataka


332. 
-rad sa action() funkcijama
-u NewEvent.jsx komponenti kreiramo action funkciju
-action funkciji dodajemo request i params parametre
-kreiramo varijablu data
-data varijabli dodajemo get metodu
-kreiramo eventData varijablu
-kreiramo response varijablu
-dodajemo uslov if(!reponse.ok)
-dodajemo return redirect ('/events');


333. 
-podnosenje podataka programaticno
-u EventItem.jsx komponenti, unutar startDeleteHandler funkcijere kreiramo proceed varijablu
-u EventDetail.jsx komponenti kreiramo action funkciju sa parametrom params
-u EventItem.jsx komponentu importujemo useSubmit React hook
-u EventItem funkciji kreiramo submit varijablu
-dodajemo if(proceed) uslov


334. 
-azuriranje UI stanja na osnovu statusa za podnosenje
-u EventForm.jsx komponentu importujemo useNavigation React hook
-kreiramo navigation varijablu
-kreiramo isSubmitting varijablu
-button elementima dodajemo disabled atribut


335. 
-validacija korisnickog unosa i prikazivanje validacijskih gresaka
-u EventForm.jsx komponentu importujemo useActionData React hook
-kreiramo data varijablu cija je vrijednost jedanaka useActionData() funkciji
-dodajemo uslov {data && data.errors && (...)}


336. 
-ponovna upotreba akcija preko metoda zahtjeva
-u EventForm.jsx komponenti kreiramo method varijablu
-kreiramo url varijablu
-dodajemo if uslov (method === 'PATCH')


337. 
-rad iza scene sa useFetcher()
-kreiramo NewsletterSignup.jsx komponentu
-u NewsletterSignup.jsx komponentu importujemo useFetcher() React hook
-kreiramo fetcher varijablu cija je vrijednost jednaka useFetcher() funkciji
-umjesto Form komponente dodajemo fetcher.Form kao roditelj element
-kreiramo data i state varijable
-kreiramo useEffect React hook
-u useEffect funkciji, unutar callback funkcije dodajemo if uslov


338. 
-odgadanje preuzimanja podataka sa defer()
-u Events.jsx komponenti, unutar try bloka koda dodajemo setTimeout funkciju
-kreiramo async loadEvents funkciju
-importujemo Await komponentu
-Await komponenti dodajemo resolve prop
-kreiramo events varijablu
-u reselove prop proslijedujemo events varijablu
-importujemo Suspense komponentu
-Suspense komponenti dodajemo fallback prop
-u Await komponenti dodajemo {(loadedEventes) => ...}


339. 
-kontrolisanje koji podaci bi trebali biti odgodeni
-u EventDetail.jsx komponenti kreiramo loadEvents funkciju
-kreiramo loadEvent funkciju
-importujemo defer 
-kreiramo event i events varijable
-importujemo Await komponentu
-Await komponentama dodajemo resolve prop
-importujemo Suspense komponentu
-Suspense komponenti dodajemo fallback prop


340. 
-Sazetak modula
-u Home.jsx komponetu importujemo PageContent.jsx komponentu
-PageContent.jsx komponenti dodajemo title prop
