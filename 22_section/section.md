Section 22: Adding Authentication To React Apps

486. Module Introduction

487. How Authentication Works

488. Project Setup & Route Setup
-preuzmemo starter foldere i fajlove
-udemo u folder cd backend-api-query u terminalu
-pokrenemo server sa komandom node app.js
-u komponentu App.jsx importujemo komponentu AuthenticationPage.jsx

489. Working with Query Parameters
-u komponenti AuthForm.jsx, u return izjavi komponenti Link dodajemo prop to
-u prop to dodajemo dinamicko prikazivanje za ?mode
-importujemo React Hook useSearchParams()
-vrijednost funkcije useSearchParams() pohranjujemo u varijable -kreiramo const [searchParams, setSearchParams] = useSearchParams()
-kreiramo varijablu const isLogin

490. Implementing the Auth Action
-u komponenti Authentication.jsx, eksportujemo asinhronu funkciju action() sa destruktuiranim parametrom request
-u funkciji action() kreiramo varijablu const data
-kreiramo varijablu objekt authData
-kreiramo varijablu const searchParams
-varijabli setSearchParams.dodajemo metodu .get()
-dodajemo funkciju fetch(`...`)
-importujemo funkciju json iz React Router Dom paketa
-dodajemo uslov if da provjerimo da li email ili sifra ne postoje
-u uslov if dodajemo throw json({ ... })
-vrijednost funkcije fetch() pohranjujemo u varijablu const response
-dodajemo uslov if za response.status
-u uslov if dodajemo return response
-dodajemo uslov if (!response.ok)
-u uslov if (!response.ok) dodajemo throw json({ ... })
-importujemo funkciju redirect
-u komponentu App.jsx importujemo funkciju action kao authAction
-u funkciji createBrowserRouter([ ... ]), u objekt ruti za AuthenticationPage dodajemo property action: authAction

491. Validating User Input & Outputting Validation Errors
-u komponentu AuthForm.jsx importujemo React Hook useActionData
-kreiramo funkciju useActionData()
-vrijednost funkcije useActionData() pohranjujemo u varijablu const data
-u return izjavu dodajemo uslov {data && data.errors && <ul>...</ul>}
-u ul element dodajemo Object.values()
-dodajemo uslov {data && data.message && <p>...</p>}
-importujemo React Hook useNavigation
-kreiramo funkciju useNavigation()
-vrijednost funkcije useNavigation() pohranjujemo u varijablu const navigation
-kreiramo varijablu const isSubmitting
-u return izjavi, button elementu dodajemo prop disabled
-u prop disabled proslijedujemo vrijednost varijable isSubmitting
-dodajemo uslov {isSubmitting ? ... : ...}

492. Adding User Login

493. Attaching Auth Tokens to Outgoing Requests
-u komponenti Authentication.jsx kreiramo varijablu const resData
-kreiramo varijablu const token
-kreiramo folder util
-u folderu util kreiramo auth.js fajl
-u auth.js fajlu kreiramo i eksportujemo funkciju getAuthToken()
-u komponentu EventDetails.jsx importujemo funkciju getAuthToken
-kreiramo varijablu const token
-u objekt headers dodajemo varijablu token
-u komponentu EventForm.jsx importujemo funkciju getAuthToken
-kreiramo varijablu const token
-u objekt header dodajemo varijablu token

494. Adding User Logout
-kreiramo komponentu Logout.jsx
-u komponenti Logout.jsx kreiramo i eksportujemo funkciju action
-u komponentu App.jsx importujemo funkciju action kao logoutAction
-kreiramo objekt rutu path logout
-u komponentu MainNavigation.jsx importujemo komponentu Form iz React Router Dom paketa
-u li element dodajemo komponentu Form
-komponenti Form dodajemo prop action i method

495. Updating the UI Based on Auth Status
-u auth.js kreiramo i eksportujemo funkciju tokenLoader()
-u komponentu App.jsx importujemo funkciju tokenLoader
-u objekt rutu '/' dodajemo property loader: tokenLoader
-ruti '/' dodajemo proprery id
-u komponentu MainNavigation.jsx importujemo React Hook useRouteLoaderData
-kreiramo funkciju useRouteLoaderData()
-vrijednost funkcije useRouteLoaderData() pohranjujemo u varijablu const token
-u return izjavu dodajemo uslov {!token && (...)}
-dodajemo uslov {token && (...)}
-u komponentu EventsNavigation.jsx importujemo React Hook useRouteLoaderData
-kreiramo funkciju useRouteLoaderData()
-vrijednost funkcije useRouteLoaderData() pohranjujemo u varijablu const token
-u return izjavu dodajemo uslov {token && (...)}
-u komponentu EventItem.jsx importujemo React Hook useRouteLoaderData
-kreiramo funkciju useRouteLoaderData()
-vrijednost funkcije useRouteLoaderData() pohranjujemo u varijablu const token
-u return izjavu dodajemo uslov {token && (...)}

496. Important: loader()s must return null or any other value

497. Adding Route Protection
-u auth.js fajlu kreiramo i eksportujemo funkciju checkAuthLoader()
-u funkciji checkAuthLoader() kreiramo varijablu const token
-dodajemo uslov if (!token)
-importujemo funkciju redirect iz React Router Dom paketa
-u komponentu App.jsx importujemo funkciju checkAuthLoader
-u objekt rutu path edit dodajemo property loader: checkAuthLoader
-u objekt rutu path new dodajemo property loader: checkAuthLoader

498. Adding Automatic Logout
-u komponentu Root.jsx importujemo React Hook useEffect()
-importujemo React Hook useLoaderData
-kreiramo funkciju useLoaderData()
-vrijednost funkcije useLoaderData() pohranjujemo u varijablu const token
-u funkciju useEffect dodajemo uslov if (!token)
-importujemo React Hook useSubmit
-kreiramo funkciju useSubmit()
-vrijednost funkcije useSubmit() pohranjujemo u varijablu const submit
-dodajemo funkciju setTimeout()
-u funkciju setTimeout() dodajemo funkciju submit

499. Managing the Token Expiration
-u komponenti Authentication.jsx kreiramo varijablu const expiration
-varijabli expiration dodajemo metodu .setHours()
-dodajemo metodu localStorage.setItem()
-u auth.js fajlu kreiramo i eksportujemo funkciju getTokenDuration()
-u funkciji getTokenDuration() kreiramo varijablu const storedExpirationDate
-kreiramo varijablu const expirationDate
-kreiramo varijablu const now
-kreiramo varijablu const duration
-u funkciji getAuthToken() kreiramo varijablu const tokenDuration
-dodajemo uslov if (tokenDuration < 0)
-dodajemo uslov if (!token)
-u komponenti Root.jsx, u funkciju useEffect() dodajemo uslov if (token === 'EXPIRED')
-u uslov if dodajemo funkciju submit()
-kreiramo varijablu const tokenDuration
 
500. Module Resources
