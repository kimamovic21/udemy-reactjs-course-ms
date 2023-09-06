React - The Complete Guide  (21_section)
Adding Authentication To React Apps

345. 
-kako autentifikacija radi 
-kopiranje pocetnih backend i frontend fajlova


346. 
-pripremanje projekta i pripremanje ruta
-cd backend-api-auth, npm i, npm start
-u posebnom terminalu pokrenuti react project npm start


347. 
-rad sa Query parametrima
-u AuthForm.jsx komponenti umjesto button elementa dodajemo Link komponentu
-Link komponenti dodajemo to prop
-importujemo useSearchParams React hook
-kreiramo const [searchParams, setSearchParams] = useSearchParams()
-kreiramo isLogin varijablu
-u Link komponenti, propu to proslijedujemo vrijednost isLogin varijable
-u MainNavigation.jsx komponenti, NavLink Authentication linku dodajemo to="/auth?mode=login"


348. 
-implementacija Auth akcije
-u Authentication.jsx komponenti kreiramo action funkciju sa parametrom objektom request
-u action funkciji kreiramo data varijablu
-u action funkciji kreiramo authData objekt
-u action funkciji kreiramo searchParams varijablu
-u action funkciji kreiramo mode varijablu
-dodajemo fetch metodu
-importujemo json funkciju
-dodajemo if uslov za mode
-u if uslov dodajemo throw json({...})
-vrijednost fetch metode pohranimo u response varijablu
-dodajemo if uslov za response.status
-dodajemo if uslov za !response.ok
-importujemo redirect funkciju
-na kraju funkcije dodajemo return redirect(`/`)
-u App21.js fajlu importujemo funkciju action as authAction
-u path auth, dodajemo action: authAction


349. 
-validacija korisnickog unosa i prikazivanje validacione greske
-u AuthForm.jsx komponenti, u return izjavi, dodajemo {data && data.errors (...)}
-u return izjavi dodajemo {data && data.message (...)}
-u AuthForm.jsx komponenti kreiramo data varijablu
-kreiramo navigation varijablu
-kreiramo isLogin i isSubmitting varijable
-button elementu dodajemo disabled atribut
-unutar button elementa dodajemo uslov {isSubmitting ?  }


350. 
-dodavanje User Login


351. 
-pričvršćivanje auth tokena na odlazne zahtjeve
-u Authentication.jsx komponenti kreiramo resData varijablu
-kreiramo token varijablu
-pristupamo localStorage sa setItem metodom
-kreiramo util folder
-unutar util foldera kreiramo auth.js fajl
-u auth.js fajlu kreiramo funkciju getAuthToken
-u getAuthToken funkciji kreiramo token varijablu
-u EventDetail.jsx komponenti, unutar action funkcije, dodajemo header objekt
-u EventDetail.jsx komponentu importujemo getAuthToken
-u action funkciji kreiramo token funkciju
-u EventForm.jsx komponentu importujemo getAuthToken
-kreiramo token varijablu
-u response varijabli, headers objektu dodajemo 'Authorization'


352. 
-dodavanje User Logout
-u MainNavigation.jsx komponenti dodajemo li element i unutar njega button Logout element
-u pages folderu kreiramo Logout komponentu
-u Logout komponenti kreiramo action funkciju
-unutar action funkcije dodajemo localStorage sa removeItem metodom
-dodajemo return rediredct('/')
-u App21.js fajl importujemo action as logoutAction
-u App21.js fajlu dodajemo objekt sa path: 'logout' i action: logoutAction
-u MainNavigation.jsx komponentu importujemo Form komponentu
-u li element dodajemo Form komponentu sa action i metthod props


353. 
-azuriranje korisnickog interfejsa zasnovano na auth stanju
-u util folderu, unutar auth.js fajla, kreiramo tokenLoader funkciju
-u App21.js fajlu importujemo tokenLoader funkciju
-u router varijabli, dodajemo loader: tokenLoader
-u router varijabli, dodajemo id: 'root'
-u MainNavigation.jsx komponentu importujemo useRouteLoaderData React hook
-kreiramo token varijablu
-dodajemo uslov {!token && ( ... ) } za NavLink Authentication
-dodajemo uslov {token && ( ... ) } za NavLink Form i button
-u EventsNavigaton.jsx komponentu importujemo useRouteLoaderData React hook
-kreiramo token varijablu 
-dodajemo uslov {token && ( ... )} za NavLink New Event
-u EventItem.jsx komponentu importujemo useRouteLoaderData React hook
-kreiramo token varijablu
-dodajemo uslov {token && ( ... )} za menu element


354. 
-vazno: loader() mora vratiti null ili bilo koju drugu vrijednost


355. 
-dodavanje zastite rute
-u util folderu, unutar auth.js fajla, kreiramo checkAuthLoader funkciju
-u checkAuthLoader funkciji kreiramo varijablu token 
-dodajemo uslov if (!token)
-u App21.js fajlu importujemo chechAuthLoader funkciju
-u App21.js fajlu, u objektu path:'edit', dodajemo loader: checkAuthLoader
-u objektu path:'new', dodajemo loader: checkAuthLoader


356. 
-dodavanje automatskog Logout
-u Root.jsx komponenti, dodajemo useEffect() React hook
-u Root.jsx komponentu importujemo useLoaderData funkciju
-kreiramo token varijablu
-u useEffect, unutar callback funkcije, dodajemo if uslov !token
-dodajemo setTimeout funkciju
-importujemo useSubmit React hook
-kreiramo submit varijablu
-u setTimeout funkciji dodajemo submit funkciju sa argumentima


357. 
-upravljanje istekom tokena
-u Authentication.jsx komponeti kreiramo expiration varijablu
-expiration varijabli dodajemo setHours() metodu
-expiration varijablu pohranjujemo u localStorage
-u auth.jsx komponenti kreiramo getTokenDuration funkciju
-u getTokenDuration funkciji kreiramo expirationDate varijablu
-kreiramo expirationDate varijablu
-kreiramo now varijablu
-kreiramo duration varijablu
-u funkciji getAuthToken kreiramo tokenDuration varijablu
-dodajemo if uslov da li je vrijednost tokenDuration varijable manja od 0
-u Root.jsx komponenti dodajemo uslov da li je token EXPIRED
-u if uslov dodajemo submit funkciju
-kreiramo tokenDuration varijablu
-dodajemo uslov if (!token) ako token ne postoji
-u Logout.jsx komponenti, uklanjamo expiration varijablu iz localStorage


358. 
-modul resursi
