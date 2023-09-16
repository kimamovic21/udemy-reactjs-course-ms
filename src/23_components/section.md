React - The Complete Guide  (24_section)

367. Module Introduction

368. Project Setup & Overview
-otvorimo web stranicu https://tanstack.com/query/latest

369. React Query: What & Why ?
-biblioteka koja omogucava slanje http zahtjeva i koja omogucava da UI bude u sinhronizaciji

370. Installing & Using Tanstack Query - And Seeing Why It's Great!
-u terminal ukucamo komandu npm i @tanstack/react-query@beta
-u komponenti NewEventsSection.jsx izbrisemo funkciju fetchEvents()
-kreiramo folder util
-u folderu util kreiramo http.js fajl
-u http.js fajlu kreiramo i eksportujemo funkciju fetchEvents()
-u komponentu NewEventsSection importujemo React hook useQuery
-kreiramo funkciju useQuery()
-importujemo funkciju fetchEvents()
-u React hook funkciji useQuery() kreiramo objekt
-u objekt dodajemo queryKey, queryFn
-rezultat funkcije useQuery() pohranimo u varijable data, isPending, isError, error 
-dodajemo uslov if (isPending)
-dodajemo uslov if (isError)
-dodajemo uslov if (data)
-u App.js fajl kreiramo varijablu const queryClient
-importujemo komponente QueryClient i QueryClientProvider
-komponenti QueryClientProvider dodajemo prop client
-u prop client proslijedujemo vrijednost queryClient

371. Understanding & Configuring Query Behaviours - Cache & Stale Data
-u objekt dodajemo staleTime i gcTime

372. Dynamic Query Functions & Query Keys
-u komponentu FindEventSection.jsx importujemo React Hook useQuery 
-u http.js fajlu, funkciji fetchEvents dodajemo parametar searchTerm
-kreiramo varijablu let url
-dodajemo uslov if (searchTerm)
-kreiramo varijablu const response
-u komponentu FindEventSection.jsx importujemo funkciju fetchEvents()
-kreiramo const [searchTerm, setSearchTerm] = useState('')
-u queryFn dodajemo callback funkciju
-u funkciju handleSubmit() dodajemo funkciju setSearchTerm()
-rezultat funkcije useQuery() pohranjujemo u varijable data, isPending, isError, error
-kreiramo varijablu let content 
-dodajemo uslov if (isPending)
-dodajemo uslov if (isError)
-dodajemo uslov if (data)
-u return izjavu dodajemo varijablu content

373. The Query Configuration Object & Aborting Requests
-u http.js fajlu, funkciji fetchEvents dodajemo parametar signal
-u komponenti FindEventSection, u queryFn, anonimnoj funkciji dodajemo parameter { signal }

374. Enabled & Disabled Queries
-u funkciju useQuery() dodajemo enabled
-varijablu isPending zamjenjujemo sa isLoading

375. Changing Data with Mutations
-u komponentu NewEvent.jsx importujemo React Hook useMutation 
-kreiramo funkciju useMutation()
-u funkciji useMutation() kreiramo objekt
-u objekt dodajemo mutationFn
-u http.js fajlu kreiramo funkciju createNewEvent()
-u komponentu NewEvent.jsx importujemo funkciju createNewEvent
-rezultat funkcije useMutation() pohranjujemo u varijable mutate, isPending, isError, error
-u funkciju handleSubmit() dodajemo funkciju mutate()
-u return izjavi dodajemo uslov {isPending && 'Submitting...'}
-dodajemo uslov {!isPending && (...))}
-dodajemo uslov {isError && <ErrorBlock />}

376. Fetching More Data & Testing the Mutation
-u komponentu EventForm.jsx importujemo React Hook useQuery
-u http.js fajlu kreiramo funkciju fetchSelectableImages
-u komponentu EventForm.jsx importujemo funkciju fetchSelectableImages
-kreiramo funkciju React hook useQuery()
-u funkciji useQuery() kreiramo objekt
-rezultat funkcije useQuery() pohranjujemo u varijable data, isPending, isError 
-u return izjavi, komponenti ImagePicker dodajemo prop images
-u prop images proslijedujemo vrijednost varijable data
-u return izjavu dodajemo uslov {data && (...)}
-dodajemo uslov {isPending && (...)}
-dodajemo uslov {isError && (...)}

377. Acting on Mutation Success & Invalidating Queries
-u komponenti NewEvent.jsx, u funkciji useMutation dodajemo onSuccess
-u http.ja fajl importujemo QueryClient 
-kreiramo varijablu const queryClient
-u App.js fajl importujemo queryClient
-u komponentu NewEvent.jsx importujemo varijablu queryClient
-u onSuccess dodajemo queryClient.invalidateQueries({})

378. A Challenge! The Problem
-u http.js fajl kreiramo funkcije fetchEvent() i deleteEvent()

379. A Challenge! The Solution
-u komponentu EventDetails.jsx importujemo React Hook useQuery
-kreiramo funkciju useQuery({ ... })
-importujemo funkciju fetchEvent()
-importujemo React Hook useParams
-kreiramo varijablu const params
-rezultat funkcije useQuery() pohranjujemo u varijable data, isPending, isError, error
-kreiramo varijablu let content
-dodajemo uslov if (isPending)
-dodajemo uslov if (isError) 
-dodajemo uslov if (data) 
-u return izjavi, u section elementu, dodajemo varijablu content
-kreiramo varijablu const formattedDate
-importujemo React Hook useMutation
-kreiramo funkciju useMutation ({ ... })
-importujemo funkciju deleteEvent
-rezultat funkcije useMutation() pohranjujemo u varijablu mutate
-kreiramo funkciju handleDelete()
-button elementu dodajemo onClick dogadaj
-u onClick dogadaj proslijedujemo funkciju handleDelete
-importujemo React Hook useNavigate()
-kreiramo varijablu const navigate
-u funkciju useMutation() dodajemo onSuccess
-importujemo funkciju queryClient
-u onSuccess dodajemo queryClient.invalidateQueries i navigate

380. Disabling Automatic Refetching After Invalidations
-u queryClient.invalidateQueries dodajemo refetchType

381. Enhancing the Demo App & Repeating Mutation Concepts
-u komponenti EventDetails kreiramo const [isDeleting, setIsDeleting] = useState()
-kreiramo funkcije handleStartDelete i handleStopDelete
-u return izjavi, dodajemo komponentu Modal
-u return izjavi dodajemo uslov {isDeleting && (...)}
-komponenti Modal dodajemo prop onClose
-u prop onClose proslijedujemo vrijednost funkcije handleStopDelete
-button elementima Cancel i Delete dodajemo dogadaje onClick
-iz vrijednosti funkcije useMutation({...}) kreiramo varijablu isPending: isPendingDeletion
-dodajemo uslove isPendingDeletion, !isErrorDeleting, isErrorDeleting

382. React Query Advantages in Action
-u komponentu EditEvent.jsx importujemo React Hook useQuery
-kreiramo funkciju useQuery({...})
-importujemo funkciju fetchEvent()
-importujemo React Hook useParams()
-kreiramo varijablu const params
-u useQuery({...}) dodajemo queryKey i queryFn
-rezultat funkcije useQuery() pohranimo u varijable data, isPending, isError, error
-u return izjavi, komponenti EventForm dodajemo prop inputData
-u prop inputData proslijedujemo vrijednost varijable data
-kreiramo varijablu let content
-dodajemo uslov if (isPending)
-dodajemo uslov if (isError)
-dodajemo uslov if (data)
-u return izjavi dodajemo varijablu content

383. Updating Data with Mutations
-u http.js fajlu kreiramo funkciju updateEvent
-u komponentu EditEvent.jsx importujemo React Hook useMutation
-kreiramo funkciju useMutation({...})
-importujemo funkciju updateEvent()
-rezultat funkcije useMutation() pohranimo u varijablu mutate
-u funkciju handleSubmit() dodajemo funkciju mutate()
-u funkciju handleSubmit() dodajemo funkciju navigate()

384. Optimistic Updating
-u komponenti EditEvent.jsx, u funkciji useMutation(), dodajemo onMutate
-importujemo varijablu queryClient
-u onMutate dodajemo queryClient.setQueryData(...)
-u onMutate kreiramo varijablu const newEvent 
-u onMutate dodajemo queryClient.cancelQueries(...)
-u onMutate kreiramo varijablu const previousEvent 
-u funkciju useMutation({...}) dodajemo onError
-u onError dodajemo queryClient.setQueryData(...)
-u funkciju useMutation({...}) dodajemo onSettled
-u onSettled dodajemo  queryClient.invalidateQueries(...)

385. Using the Query Key as Query Function Input
-u https.js fajlu, u funkciji fetchEvents() dodajemo uslov if (searchTerm && max)
-dodajemo uslov else if (searchTerm)
-dodajemo uslov else if (max)
-u komponenti NewEventsSection.jsx, u funkciji queryFn dodajemo anonimnu funkciju sa parametrom {signal}

386. React Query & React Router
-u komponenti EditEvent.jsx kreiramo i eksportujemo funkciju loader()
-importujemo varijablu queryClient
-u funkciju loader dodajemo  queryClient.fetchQuery({...})
-u App.js fajl importujemo funkciju loader
-u path: '/events/:id' dodajemo loader: editEventLoader
-u komponenti EditEvent.jsx kreiramo funkciju action()
-u funkciji action() kreiramo varijable formData i updatedEventData
-u funkciju action() dodajemo updateEvent({...})
-u funkciju action() dodajemo queryClient.invalidateQueries()
-dodajemo return redirect()
-importujemo React Hook useSubmit
-kreiramo funkciju useSubmit()
-vrijednost funkcije useSubmit() pohranimo u varijablu const submit
-u funkciju handleSubmit() dodajemo funkciju submit()
-u App.js fajl importujemo funkciju action()
-u path: '/events/:id' dodajemo action: editEventAction
-u komponentu EditEvent.jsx importujemo React Hook useNavigation
-u funkciju EditEvent() dodajemo const { state } = useNavigation()
-u uslov if(data) dodajemo ternarni uslov {state === 'submitting' ? ... ? ...}
-u komponentu Header.jsx dodajemo element progress
-importujemo React Hook useIsFetching
-kreiramo varijablu const fetching
-u return izjavu dodajemo uslov {fetching > 0 && ...}
-u komponentu EditEvent.jsx, u funkciju useQuery({...}) dodajemo staleTime: 10000
-
