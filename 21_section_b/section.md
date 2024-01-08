Section 21: Building a Multi-Page SPA with React Router - Part 2

457. Onwards to a new Project Setup

458. Time to Practice: Problem

459. Time to Practice: Solution
-udemo u folder sa komandom cd backend-api
-pokrenemo server sa komandom node app.js
-u folderu pages kreiramo jsx komponente
-u komponentu App.jsx importujemo funkciju createBrowserRouter
-vrijednost funkcije createBrowserRouter() pohranjujemo u varijablu const router
-u funkciji createBrowserRouter([...]) kreiramo niz sa objekt rutama
-u return izjavu dodajemo komponentu RouterProvider
-u komponentu EventDetail.jsx importujemo React Hook useParams
-kreiramo funkciju useParams()
-vrijednost funkcije useParams() pohranjujemo u varijablu const params
-u komponenti App.jsx, dodajemo u niz children vise objekt ruta

460. Data Fetching with a loader()
-u komponenti App.jsx,u objekt ruti dodajemo property funkciju loader

461. Using Data From A Loader in The Route Component
-u komponentu Events.jsx importujemo funkciju useLoaderData

462. More loader() Data Usage
-u komponentu EventsList.jsx importujemo funkciju useLoaderData
-kreiramo funkciju useLoaderData()
-vrijednost funkcije useLoaderData() pohranjujemo u varijablu const events

463. Where Should loader() Code Be Stored ?
-u komponenti Events.jsx kreiramo i eksportujemo funkciju loader()
-u komponentu App.jsx importujemo funkciju loader kao eventsLoader

464. When Are loader() Functions Executed ?

465. Reflecting The Current Navigation State in the UI
-u komponentu Root.jsx importujemo React Hook useNavigation
-kreiramo funkciju useNavigation()
-vrijednost funkcije useNavigation() pohranjujemo u varijablu const navigation

466. Returning Responses in loader()s
-u komponenti Events.jsx, u uslovu else kreiramo varijablu const res

467. Which Kind of Code Goes Into loader()s ?

468. Error Handling with Custom Errors
-u komponenti Events.jsx dodajemo uslov if (data.isError)
-u folderu pages kreiramo komponentu Error.jsx
-u komponentu App.jsx importujemo komponentu Error.jsx
-u funkciju createBrowserRouter([ ... ]) dodajemo property errorElement: <ErrorPage />

469. Extracting Error Data & Throwing Responses
-kreiramo komponentu PageContent.jsx¸
-u komponentu Error.jsx importujemo funkciju useRouteError
-kreiramo funkciju useRouteError()
-vrijednost funkcije useRouteError() pohranjujemo u varijablu const error
-kreiramo varijable let title i let message
-dodajemo uslov if (error.status)

470. The json() Utility Function

471. Dynamic Routes & loader()s
-u komponenti EventDetail.jsx kreiramo i eksportujemo funkciju loader({ }) sa parametrima requst i params
-kreiramo varijablu const response
-u komponentu App.jsx importujemo funkciju loader kao eventDetailLoader
-u rutu objekt EventDetailPage dodajemo property loader
-u komponentu EventDetail.jsx importujemo React Hook useLoaderData
-kreiramo funkciju useLoaderData()
-vrijednost funkcije useLoaderData() pohranjujemo u varijablu const data
-u return izjavu dodajemo komponentu EventItem
-komponenti EventItem dodajemo prop event

472. The useRouteLoaderData() Hook & Accessing Data From Other Routes
-u komponentu EditEvent.jsx importujemo komponentu EventForm.jsx
-u komponentu EditEvent.jsx importujemo React Hook useLoaderData
-kreiramo funkciju useLoaderData()
-vrijednost funkcije useLoaderData() pohranjujemo u varijablu const data
-kreiramo varijablu const event
-u return izjavu komponenti EventForm dodajemo prop event
-u komponenti EventForm.jsx, input elementima dodajemo prop defaultValue
-u komponentu EventDetail.jsx importujemo React Hook useRouteLoaderData
-u komponentu EditEvent.jsx importujemo React Hook useRouteLoaderData

473. Planning Data Submission
-u komponentu NewEvent.jsx importujemo komponentu EventForm.jsx

474. Working with action() Functions
-u komponenti NewEvent.jsx kreiramo i eksportujemo funkciju action()
-u komponentu EventForm.jsx importujemo komponentu Form iz react-router-dom
-u return izjavi komponenti Form dodajemo prop method
-u komponenti NewEvent.jsx, u funkciji action() kreiramo varijablu const data
-dodajemo metodu fetch()
-dodajemo uslov if (!response.ok)
-u komponentu App.jsx importujemo funkciju action kao newEventAction
-u komponentu NewEvent.jsx importujemo funkciju redirect()

475. Submitting Data Programmatically
-u komponenti EventForm.jsx, komponenti Form dodajemo prop action
-u komponenti EventItem.jsx, kreiramo funkciju startDeleteHandler()
-u komponenti EventDetail.jsx kreiramo i eksportujemo funkciju action() sa parametrom  destruktuirani params
-kreiramo varijablu const eventId
-kreiramo varijablu const response
-dodajemo uslov if (!response.ok)
-dodajemo funkciju redirect()
-u komponentu App.jsx importujemo funkciju action kao deleteEventAction
-u objekt rutu EventDetailPage dodajemo action: deleteEventAction
-u komponentu EventItem.jsx importujemo React Hook useSubmit()
-kreiramo funkciju useSubmit()
-vrijednost funkcije useSubmit() pohranjujemo u varijablu const submit
-u funkciji startDeleteHandler() kreiramo varijablu const proceed
-dodajemo uslov if (proceed)
-u uslov if (proceed) dodajemo varijablu submit()

476. Updating the UI State Based on the Submission Status
-u komponentu EventForm.jsx importujemo React Hook useNavigation()
-kreiramo funkciju useNavigation()
-vrijednost funkcije useNavigation() pohranjujemo u varijablu const navigation
-kreiramo varijablu const isSubmitting
-u return izjavi button elementu dodajemo prop disabled

477. Validating User Input & Outputting Validation Errors
-u komponentu NewEvent.jsx dodajemo uslov if (response.status === 422)
-u komponentu EventForm.jsx importujemo React Hook useActionData
-kreiramo funkciju useActionData()
-vrijednost funkcije useActionData() pohranjujemo u varijablu const data
-u return izjavu dodajemo uslov {data && data.errors && <ul>...</ul>}
-u ul element dodajemo metodu Object.values()

478. Reusing Actions via Request Methods
-u komponenti EventForm.jsx, u return izjavi u komponenti Form u prop method proslijedujemo varijablu method
-kreiramo varijablu let url
-dodajemo uslov if (method === 'PATCH')
-u uslovu if kreiramo varijablu const eventId
-redeklarisemo varijablu url
-u komponentu App.jsx importujemo funkciju action kao manipulateEventAction
-u objekt path new dodajemo action:manipulateEventAction

479. Behind-the-Scenes Work with useFetcher()
-kreiramo komponentu NewsletterSignup.jsx komponentu
-kreiramo Newsletter.jsx komponentu
-u komponentu NewsletterSignup.jsx importujemo React Hook useFetcher
-kreiramo funkciju useFetcher()
-vrijednost funkcije useFetcher() pohranjujemo u varijablu const fetcher
-u return izjavu dodajemo komponentu fetcher.Form
-kreiramo varijable const { data, state } = fetcher
-kreiramo funkciju useEffect()
-u funkciju useEffect() dodajemo uslov if ()

480. Deferring Data Fetching with defer()
-u komponenti Events.jsx kreiramo funkciju loadEvents()
-kreiramo i eksportujemo funkciju loader()
-importujemo funkciju defer iz React Router Dom paketa
-u funkciju loader() dodajemo funkciju defer({ ... })
-importujemo komponentu Await iz React Router Dom paketa
-u return izjavu dodajemo komponentu Await sa otvarajucim i zatvarajucim tagom
-komponenti Await dodajemo prop resolve
-kreiramo varijablu const { events } 
-importujemo komponentu Suspense iz React paketa
-u komponentu Await dodajemo anonimnu funkciju sa parametrom loadedEvents
-u return izjavu dodajemo komponentu Suspense sa otvarajucim i zatvarajucim tagom
-komponenti Suspense dodajemo prop fallback
-u komponenti Events.jsx, u uslovu else kreiramo varijablu const resData

481. Controlling Which Data Should Be Deferred
-u komponenti EventDetail.jsx kreiramo funkciju loadEvents
-kreiramo funkciju loadEvent() sa parametrom id
-u komponentu EventDetail.jsx importujemo funkciju defer
-kreiramo asinhronu funkciju loader() 
-u funkciji loader() kreiramo varijablu const id
-u funkciju loader() dodajemo funkciju defer({ ... })
-importujemo komponentu Await
-kreiramo varijable const { event, events }
-u return izjavu dodajemo komponentu Await sa otvarajucim i zatvarajucim tagom
-u komponentu Await dodajemo anonimnu funkciju sa parametrom loadedEvent
-u drugu komponentu Await dodajemo anonimnu funkciju sa parametrom loadedEvents
-importujemo komponentu Suspense
-u return izjavu dodajemo komponentu Suspense sa otvarajucim i zatvarajucim tagom
-komponenti Suspense dodajemo prop fallback
-dodajemo jos jednu komponentu Suspense

482. Module Summary
-kreiramo komponentu Home.jsx
-u komponentu Home.jsx importujemo komponentu PageContent
-komponenti PageContent dodajemo prop title
