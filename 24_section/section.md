Section 24: React Query / Tanstack Query: Handling HTTP Requests With Ease

508. Module Introduction

509. Project Setup & Overview
-otvorimo web stranicu https://tanstack.com/query/latest

510. React Query: What & Why ?
-biblioteka koja omogucava slanje http zahtjeva i koja omogucava da UI bude u sinhronizaciji

511. Installing & Using Tanstack Query - And Seeing Why It's Great!
-u terminal ukucamo komandu npm i @tanstack/react-query@beta
-u komponenti NewEventsSection.jsx izbrisemo funkciju fetchEvents()
-kreiramo folder util
-u folderu util kreiramo http.js fajl
-u http.js fajlu kreiramo i eksportujemo funkciju fetchEvents()
-u komponentu NewEventsSection.jsx importujemo React hook useQuery
-kreiramo funkciju useQuery()
-importujemo funkciju fetchEvents()
-u React hook funkciji useQuery() kreiramo konfiguracioni objekt
-u konfiguracioni objekt dodajemo queryKey, queryFn
-rezultat funkcije useQuery() pohranimo u varijable data, isPending, isError, error 
-dodajemo uslov if (isPending)
-dodajemo uslov if (isError)
-dodajemo uslov if (data)
-u App.jsx komponenti kreiramo varijablu const queryClient
-importujemo komponente QueryClient i QueryClientProvider
-komponenti QueryClientProvider dodajemo prop client
-u prop client proslijedujemo vrijednost varijable queryClient

512. Understanding & Configuring Query Behaviours - Cache & Stale Data
-u funkciji useQuery(), u konfiguracioni objekt dodajemo property staleTime i gcTime

513. Dynamic Query Functions & Query Keys
-u komponentu FindEventSection.jsx importujemo React Hook useQuery 
-kreiramo funkciju useQuery({ ... })
-u konfiguracioni objekt dodajemo property queryKey i queryFn
-u http.js fajlu, funkciji fetchEvents() dodajemo parametar searchTerm
-kreiramo varijablu let url
-dodajemo uslov if (searchTerm)
-u uslov if (searchTerm) dodajemo varijabli url + '?search=' + searchTerm
-kreiramo varijablu const response
-u komponentu FindEventSection.jsx importujemo funkciju fetchEvents()
-u queryFn dodajemo callback funkciju
-u callback funkciju dodajemo funkciju fetchEvents()
-u queryKey dodajemo niz ['events', { search: ... }]
-kreiramo state varijablu const [searchTerm, setSearchTerm] = useState('')
-kreiramo varijablu const searchElement
-kreiramo funkciju handleSubmit() sa parametrom event
-u funkciju handleSubmit() dodajemo funkciju setSearchTerm(searchElement.current.value)
-rezultat funkcije useQuery() pohranjujemo u varijable data, isPending, isError, error
-importujemo komponentu LoadingIndicator.jsx
-kreiramo varijablu let content 
-dodajemo uslov if (isPending)
-u uslovi if (isPending) dodajemo varijabli content komponentu LoadingIndicator
-importujemo komponentu ErrorBlock.jsx
-dodajemo uslov if (isError)
-u uslovu if (isError) dodajemo varijabli content komponentu ErrorBlock
-komponenti ErrorBlock dodajemo prop title i message
-dodajemo uslov if (data)
-u uslov if (data) dodajemo varijabli content ul element
-u ul element dodajemo varijabli data metodu .map()
-u metodi .map() kreiramo li element 
-importujemo komponentu EventItem.jsx
-u li element dodajemo komponentu EventItem.jsx
-u return izjavu dodajemo varijablu content

514. The Query Configuration Object & Aborting Requests
-u http.js fajlu, funkciji fetchEvents dodajemo parametar signal
-u komponenti FindEventSection.jsx, u queryFn, anonimnoj funkciji dodajemo parameter { signal }

515. Enabled & Disabled Queries
-u komponenti FindEventSection.jsx, u funkciju useQuery() dodajemo property enabled
-varijablu isPending zamjenjujemo sa isLoading

516. Changing Data with Mutations
-u komponentu NewEvent.jsx importujemo React Hook useMutation 
-kreiramo funkciju useMutation()
-u funkciji useMutation() kreiramo konfiguracioni objekt
-u konfiguracioni objekt dodajemo property mutationFn
-u http.js fajlu kreiramo i eksportujemo asinhronu funkciju createNewEvent() sa parametrom eventData
-u funkciji createNewEvent(eventData) kreiramo varijablu const response
-u komponentu NewEvent.jsx importujemo funkciju createNewEvent
-u property mutationFn dodajemo funkciju createNewEvent
-rezultat funkcije useMutation() pohranjujemo u varijable mutate, isPending, isError, error
-kreiramo funkciju handleSubmit() sa parametrom formData
-u funkciju handleSubmit() dodajemo funkciju mutate({ ... })
-u return izjavu dodajemo uslov {isPending && 'Submitting...'}
-dodajemo uslov {!isPending && (...)}
-dodajemo uslov {isError && <ErrorBlock />}
-komponenti ErrorBlock dodajemo prop title i message

517. Fetching More Data & Testing the Mutation
-u komponentu EventForm.jsx importujemo React Hook useQuery
-u http.js fajlu kreiramo i eksportujemo asinhronu funkciju fetchSelectableImages()
-u komponentu EventForm.jsx importujemo funkciju fetchSelectableImages
-kreiramo funkciju useQuery()
-u funkciji useQuery() kreiramo konfiguracioni objekt
-u konfiguracionom objektu kreiramo property queryKey i queryFn
-u queryKey dodajemo ['events-images']
-u queryFn dodajemo funkciju fetchSelectableImages
-rezultat funkcije useQuery({ ... }) pohranjujemo u varijable data, isPending, isError 
-importujemo komponentu ImagePicker.jsx
-u return izjavi, komponenti ImagePicker dodajemo prop images
-u prop images proslijedujemo vrijednost varijable data
-dodajemo uslov {isPending && (...)}
-u return izjavu dodajemo uslov {data && (...)}
-dodajemo uslov {isError && (<ErrorBlock ... />)}
-komponenti ErrorBlock dodajemo prop title i message

518. Acting on Mutation Success & Invalidating Queries
-u komponenti NewEvent.jsx, u funkciji useMutation dodajemo property onSuccess
-u property onSuccess dodajemo anonimnu funkciju
-u anonimnu funkciju dodajemo funkciju navigate('/events')
-u http.js fajl importujemo funkciju QueryClient 
-u App.jsx komponentu importujemo funkciju queryClient
-kreiramo varijablu const queryClient
-u komponentu NewEvent.jsx importujemo funkciju queryClient
-u property onSuccess dodajemo queryClient.invalidateQueries({ ... })
-u objekt dodajemo property queryKey
-mozemo dodati i propery exact

519. A Challenge! The Problem
-u http.js fajlu kreiramo i eksportujemo asinhrone funkcije fetchEvent() i deleteEvent()
-funkciji fetchEvent dodajemo parametre destruktuirane prop id i signal
-funkciji deleteEvent() dodajemo parametar destruktuirani id

520. A Challenge! The Solution
-u komponentu EventDetails.jsx importujemo React Hook useQuery
-kreiramo funkciju useQuery({ ... })
-u funkciju useQuery() dodajemo konfiguracioni objekt
-u konfiguracioni objekt dodajemo queryKey i queryFn
-u queryFn dodajemo anonimnu funkciju sa parametrima destruktuiranim prop id i signal
-importujemo funkciju fetchEvent()
-u anonimnu funkciju dodajemo funkciju fetchEvent()
-funkciji fetchEvent() dodajemo argumente destruktuirane prop id i signal
-importujemo React Hook useParams
-kreiramo funkciju useParams()
-vrijednost funkcije useParams() pohranjujemo u varijablu const params
-u queryKey dodajemo niz events, params.id
-vrijednost funkcije useQuery() pohranjujemo u varijable data, isPending, isError, error
-kreiramo varijablu let content
-importujemo komponentu LoadingIndicator.jsx
-dodajemo uslov if (isPending)
-u uslov if (isPending) mozemo dodati varijabli content komponentu LoadingIndicator
-importujemo komponentu ErrorBlock.jsx
-dodajemo uslov if (isError) 
-u uslov if (isError) dodajemo komponentu ErrorBlock
-komponenti ErrorBlock dodajemo prop title i message
-dodajemo uslov if (data) 
-u uslov if (data) dodajemo varijabli content HTML elemente
-u return izjavi, u section elementu, dodajemo varijablu content
-u uslovu if (data) kreiramo varijablu const formattedDate
-importujemo funkciju deleteEvent iz http.js fajla
-importujemo React Hook useMutation
-kreiramo funkciju useMutation ({ ... })
-u konfiguracioni objekt dodajemo property mutationFn
-u mutationFn dodajemo funkciju deleteEvent
-rezultat funkcije useMutation({ ... }) pohranjujemo u varijablu const { mutate }
-kreiramo funkciju handleDelete()
-u funkciju handleDelete() dodajemo funkciju mutate({ ... })
-button elementu dodajemo dogadaj onClick
-u dogadaj onClick proslijedujemo funkciju handleDelete
-importujemo React Hook useNavigate()
-vrijednost funkcije useNavigate() pohranjujemo u varijablu const navigate
-u funkciju useMutation({ ... }) dodajemo property onSuccess
-importujemo funkciju queryClient
-u property onSuccess dodajemo queryClient.invalidateQueries({ ... }) i funkciju navigate('/events')

521. Disabling Automatic Refetching After Invalidations
-u queryClient.invalidateQueries dodajemo property refetchType

522. Enhancing the Demo App & Repeating Mutation Concepts
-u komponenti EventDetails kreiramo state varijablu const [isDeleting, setIsDeleting] = useState()
-kreiramo funkcije handleStartDelete() i handleStopDelete()
-u funkciju handleStartDelete() dodajemo funkciju setIsDeleting(true)
-u funkciju handleStopDelete() dodajemo funkciju setIsDeleting(false)
-button Edit elementu dodajemo dodagaj onClick
-u dodagaj onClick proslijedujemo funkciju handleStartDelete
-importujemo komponentu Modal.jsx
-u return izjavu dodajemo komponentu Modal sa otvorenim i zatvorenim tagom
-u komponenti Modal, kreiramo dva button elementa Cancel i Delete
-button Cancel i Delete elementu dodajemo dogadaj onClick
-u button Delete elementu, u dodagaj onClick proslijedujemo funkciju handleDelete
-u button Cancel elementu, u dogadaj onClick proslijedujemo funkciju handleStopDelete
-u return izjavu dodajemo uslov {isDeleting && (<Modal>...</Modal>)} za prikazivanje komponente Modal
-komponenti Modal dodajemo prop onClose
-u prop onClose proslijedujemo vrijednost funkcije handleStopDelete
-vrijednost funkcije useMutation({ ... }) pohranjujemo u varijable const { mutate, isPendingDeletion, isErrorDeleting, deleteError }
-u return izjavi dodajemo tri uslova
-dodajemo uslov {isPendingDeletion && <p>...</p>}
-dodajemo uslov {!isPendingDeletion && <>...</>}
-importujemo komponentu ErrorBlock
-dodajemo uslov {isErrorDeleting && <ErrorBlock .../>}
-komponenti ErrorBlock dodajemo prop title i message

523. React Query Advantages in Action
-u komponentu EditEvent.jsx importujemo React Hook useQuery
-kreiramo funkciju useQuery({ ... })
-importujemo funkciju fetchEvent() iz http.js fajla
-importujemo React Hook useParams()
-vrijednost funkcije useParams() pohranjujemo u varijablu const params
-u funkciju useQuery({ ... }), u konfiguracioni objekt dodajemo property queryKey i queryFn
-u queryKey dodajemo ['events', params.id]
-u queryFn dodajemo anonimnu funkciju sa parametrom destruktuiranim prop signal
-u anonimnu funkciju dodajemo funkciju fetchEvent() sa argumentima destruktuiranim prop signal i id
-rezultat funkcije useQuery() pohranimo u varijable const { data, isPending, isError, error }
-u return izjavi, komponenti EventForm dodajemo prop inputData
-u prop inputData proslijedujemo vrijednost varijable data
-kreiramo varijablu let content
-dodajemo uslov if (isPending)
-importujemo komponentu LoadingIndicator.jsx
-u uslov if (isPending) dodajemo varijabli content komponentu LoadingIndicator.jsx
-dodajemo uslov if (isError)
-importujemo komponentu ErrorBlock.jsx
-u uslov if (isError) dodajemo varijabli content komponentu ErrorBlock.jsx
-komponenti ErrorBlock dodajemo prop title i message
-dodajemo uslov if (data)
-u uslov if (data) dodajemo varijabli content komponentu EventForm
-u return izjavi, u komponentu Modal dodajemo varijablu content

524. Updating Data with Mutations
-u http.js fajlu kreiramo funkciju updateEvent()
-u komponentu EditEvent.jsx importujemo React Hook useMutation
-kreiramo funkciju useMutation({ ... })
-importujemo funkciju updateEvent() iz http.js fajla
-u konfiguracioni objekt dodajemo propery mutationFn: updateEvent
-vrijednost funkcije useMutation() pohranimo u varijablu const { mutate }
-u funkciju handleSubmit(formData) dodajemo funkciju mutate({ ... })
-funkciju mutate() dodagaj objekt { id: params.id, event: formData}
-u funkciju handleSubmit() dodajemo funkciju navigate('../')
-u funkciju handleClose() dodajemo funkciju navigate('../')

525. Optimistic Updating
-u komponenti EditEvent.jsx, u funkciju useMutation({ ... }), dodajemo property onMutate
-importujemo funkciju queryClient iz http.js fajla
-u property onMutate dodajemo asinhronu anonimnu funkciju sa parametrom data
-u anonimnu funkciju dodajemo queryClient.setQueryData(...)
-u funkciju setQueryData() dodajemo niz ['evetns', params.id]
-u onMutate kreiramo varijablu const newEvent = data.event
-u funkciju setQueryData dodajemo jos i varijablu newEvent
-u onMutate dodajemo queryClient.cancelQueries(...)
-u funkciju cancelQueries({ ... }) dodajemo konfiguracioni objekt i property queryKey
-vrijednost queryClient.setQueryData(...) pohranjujemo u varijablu const previousEvent
-u property onMutate dodajemo return { previousEvent } 
-u funkciju useMutation({ ... }) dodajemo property onError
-u property onError kreiramo anonimnu funkciju sa parametrima error, data, context
-u property onError dodajemo queryClient.setQueryData([ ... ])
-u funkciju useMutation({ ... }) dodajemo property onSettled
-u property onSettled dodajemo queryClient.invalidateQueries(['events', params.id])

526. Using the Query Key as Query Function Input
-u https.js fajlu, funkciji fetchEvents() dodajemo parametar destruktuirani prop max
-dodajemo uslov if (searchTerm && max)
-u uslovu if (searchTerm &&max) dodajemo varijabli url '?search=', searchTerm, '&max=', max
-dodajemo uslov else if (searchTerm)
-dodajemo uslov else if (max)
-u komponenti NewEventsSection.jsx, u property queryFn dodajemo anonimnu funkciju 
-anonimnoj funkciji dodajemo parametar destruktuirani prop {signal, max: (number)}
-u anonimnu funkciju dodajemo funkciju fetchEvents({ signal, ...queryKey[0] })

527. React Query & React Router
-u komponenti EditEvent.jsx kreiramo i eksportujemo funkciju loader()
-importujemo funkciju queryClient iz http.js fajla
-u funkciju loader() dodajemo queryClient.fetchQuery({ ... })
-u funkciju fetchQuery({ ... }) dodajemo konfiguracioni objekt
-u konfiguracioni objekt dodajemo queryKey i queryFn
-u App.jsx komponentu importujemo funkciju loader kao editEventLoader
-u objekt rutu path: '/events/:id' dodajemo loader: editEventLoader
-u komponenti EditEvent.jsx kreiramo i eksportujemo asinhronu funkciju action()
-funkciji action() dodajemo parametre destruktuirane prop requst i params
-u funkciji action() kreiramo varijablu const formData
-kreiramo varijablu const updatedEventData
-u funkciju action() dodajemo funkciju updateEvent({...})
-u konfiguracioni objekt dodajemo property id i event
-u funkciju action() dodajemo queryClient.invalidateQueries()
-importujemo funkciju redirect iz React Router Dom paketa
-u funkciju action() u return izjavu dodajemo funkciju redirect('../')
-importujemo React Hook useSubmit
-kreiramo funkciju useSubmit()
-vrijednost funkcije useSubmit() pohranimo u varijablu const submit
-u funkciju handleSubmit() dodajemo funkciju submit(formData, { ... })
-u App.jsx komponentu importujemo funkciju action() kao editEventAction
-u objekt rutu path: '/events/:id' dodajemo action: editEventAction
-u komponentu EditEvent.jsx importujemo React Hook useNavigation
-vrijednost funkcije useNavigation() pohranjujemo u varijablu const { state }
-u uslov if(data) dodajemo ternarni uslov {state === 'submitting' ? <p>...</p> ? <>...</>}
-u komponentu Header.jsx dodajemo u div element HTML element progress
-importujemo React Hook useIsFetching iz Tanstack paketa
-kreiramo funkciju useIsFetching()
-vrijednost funkcije useIsFetching() pohranjujemo u varijablu const fetching
-u return izjavu dodajemo uslov {fetching > 0 && ...}
-u komponentu EditEvent.jsx, u funkciju useQuery({ ... }) dodajemo property staleTime: 10000
