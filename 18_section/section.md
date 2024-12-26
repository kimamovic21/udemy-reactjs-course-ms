Section 18: Practice Project: Building a Food Order App

01. Module Introduction & Starting Project
-preuzmemo pocetne fajlove i instaliramo Vite ReactJS project sa komandom npm i u terminalu
-u terminalu projekt pokrenemo sa komandom npm run dev 
-u terminalu udemo u backend folder sa komandom cd backend i instaliramo projekt sa komandom npm i
-u terminalu pokrenemo backed sa komandom node app.js

02. Planning the App & Adding a First Component
-kreiramo folder components
-u folderu components kreiramo komponentu Header.jsx
-u return izjavi kreiramo HTML elemente
-importujemo sliku logoImg

03. Fetching Meals Data (GET HTTP Request)
-kreiramo komponentu Meals.jsx
-u komponenti Meals.jsx kreiramo ul element sa id-em meals
-kreiramo asinhronu funkciju fetchMeals()
-u funkciju fetchMeals() dodajemo funkciju fetch()
-u funkciji fetchMeals() kreiramo varijablu const response
-dodajemo uslov if (!response.ok)
-kreiramo varijablu const meals
-importujemo React Hook useState
-kreiramo state varijablu const [loadedMeals, setLoadedMeals] = useState([])
-u funkciju fetchMeals() dodajemo setLoadedMeals(meals)
-u ul element dodajemo varijablu loadedMeals
-varijabli loadedMeals dodajemo metodu .map()
-importujemo funkciju useEffect()
-u useEffect() funkciju dodajemo funkciju fetchMeals()
-u komponentu App.jsx importujemo komponentu Meals.jsx

04. Adding a "MealItem" Component
-kreiramo komponentu MealItem.jsx
-funkciji MealItem dodajemo parametre destruktuirane prop
-u komponentu Meals.jsx importujemo komponentu MealItem.jsx
-u metodi loadedMeals.map(), komponenti MealItem dodajemo prop
-u img element, atributu src dodajemo dinamicnu putanju sliku

05. Formatting & Outputting Numbers as Currency
-kreiramo folder util
-u folder util kreiramo formatting.js fajl
-u formatting.js fajlu kreiramo i eskportujemo funkciju currencyFormatter()
-u komponentu MealItem.jsx importujemo funkciju currencyFormatter

06. Creating a Configurable & Flexible Custom Button Component
-u folderu components kreiramo folder UI
-u folderu UI kreiramo komponentu Button.jsx
-u komponenti Button.jsx, funkciji Button dodajemo parametar destruktuirani prop children, textOnly, className, ...props
-dodajemo ternarni uslov textOnly
-vrijednost ternarnog operatora textOnly pohranjujemo u varijablu let cssClasses
-u return izjavu u button element dodajemo varijablu children
-button elementu dodajemo prop className
-u prop className proslijedujemo varijablu cssClasses
-button elementu dodajemo prop {...props}
-u komponentu Header.jsx importujemo komponentu Button.jsx
-u return izjavu dodajemo komponentu Button
-komponenti Button dodajemo prop textOnly
-u komponentu MealItem.jsx importujemo komponentu Button.jsx
-u return izjavu dodajemo komponentu Button

07. Getting Started with Cart Context & Reducer
-u folderu src kreiramo folder store
-u folderu store kreiramo komponentu CartContext.jsx
-u komponentu CartContext.jsx importujemo funkciju createContext
-kreiramo funkciju createContext({ ... })
-vrijednost funkcije createContext() pohranjujemo u varijablu const CartContext
-u objekt unutar funkcije createContext() dodajemo varijable items, addItem, removeItem
-u komponenti CartContext.jsx kreiramo komponentu CartContextProvider()
-u komponentu CartContextProvider dodajemo komponentu CartContext.Provider
-funkciji CartContextProvider dodajemo parametar destruktuirani prop children
-u komponentu CartContext.Provider dodajemo varijablu children
-eskportujemo funkciju CartContextProvider
-eskportujemo objekt CartContext kao default
-u komponentu CartContext.jsx importujemo React Hook useReducer()
-kreiramo funkciju cartReducer() sa dva parametra state i action
-u funkciju cartReducer() dodajemo vise uslova if (action.type === ...)
-dodajemo return state
-u funkciji CartContextProvider kreiramo funkciju useReducer(cartReducer, { ... })
-u uslovu if za add item, kreiramo varijablu const existingCartItemIndex
-kreiramo varijablu const updatedItems 
-dodajemo uslov da provjerimo da li je varijabla existingCartItemIndex veca od -1
-u uslovu if kreiramo varijablu existingItem
-u uslovu if kreiramo varijablu const updatedItems
-u uslov else dodajemo varijablu updatedItems i metodu .push()
-u uslovu if za add item dodajemo return { ... }

08. Finishing & Using the Cart Context & Reducer
-u komponenti CartContext.jsx u uslovu if za remove item kreiramo varijablu const existingCartItemIndex
-kreiramo varijablu existingCartItem
-dodajemo uslov if (existingCartItem.quantity === 1)
-u uslovu if kreiramo varijablu const updatedItems
-varijabli updatedItems dodajemo metodu .splice()
-dodajemo uslov else
-u uslovu else kreiramo varijablu const updatedItem
-dodajemo uslov return { ... }
-u funkciji CartContextProvider, vrijednost funkcije useReducer() pohranjujemo u varijable const [cart, dispatchCartAction]
-kreiramo varijablu const cartContext = { ... }
-u return izjavi komponenti CartContext.Provider dodajemo prop value
-u prop value proslijedujemo varijablu cartContext
-kreiramo funkcije addItem(item) i removeItem(id)
-u funkciju addItem() dodajemo funkciju dispatchCartAction({ ... })
-u funkciju removeItem() dodajemo funkciju dispatchCartAction({ ... })
-u komponentu App.jsx importujemo komponentu CartContext.jsx
-u return izjavu dodajemo komponentu CartContextProvider sa otvaracujim i zatvarajucim tagom
-u komponenti MealItem.jsx kreiramo funkciju handleAddMealToCart()
-importujemo React Hook useContext()
-importujemo komponentu CartContext.jsx
-kreiramo funkciju useContext(CartContext)
-vrijednost funkcije useContext(CartContext) pohranjujemo u varijablu const cartContext
-u funkciju handleAddMealToCart() dodajemo varijablu cartContext.addItem(meal)
-u return izjavi Button komponenti dodajemo prop onClick
-u prop onClick proslijedujemo funkciju handleAddMealToCart
-u komponentu Header.jsx importujemo komponentu CartContext.jsx
-kreiramo funkciju useContext(CartContext)
-vrijednost funkcije useContext(CartContext) pohranjujemo u varijablu const cartContext 
-kreiramo varijablu const totalCartItems
-u return izjavi, u komponentu Button dodajemo varijablu totalCartItems

09. Adding a Reusable Modal Component with useEffect
-u folderu UI kreiramo komponentu Modal.jsx
-funkciji Modal dodajemo parametre destruktuirani prop children, open, className = ''
-u komponenti Modal kreiramo u return izjavi dialog roditelj element
-u index.html elementu kreiramo div element sa id-em modal
-importujemo funkciju createPortal
-u return izjavu dodajemo funkciju createPortal() sa dva argumenta
-prvi argument je dialog HTML element, a drugi document.getElementById('modal')
-u dialog element dodajemo prop children
-dialog elementu dodajemo prop open
-u prop open proslijedujemo varijablu open
-importujemo React Hook useEffect()
-funkciji useEffect() dodajemo dva argumenta 
-prvi argument je anonimna callback funkcija, a drugi argument je niz [open]
-u anonimnu funkciju dodajemo uslov if (open)
-u komponentu Modal.jsx importujemo React Hook useRef
-u funkciji Modal() kreiramo funkciju useRef()
-vrijednost funkcije useRef() pohranjujemo u const dialog
-u return izjavu dialog elementu dodajemo prop ref
-u prop ref proslijedujemo varijablu dialog
-u uslov if (open) dodajemo dialog.current.showModal()
-dialog elementu dodajemo prop className
-u prop className dodajemo dinamicnu klasu

10. Opening the Cart in the Modal via a New Context
-kreiramo komponentu Cart.jsx
-u komponentu Cart.jsx importujemo komponentu Modal.jsx
-importujemo React Hook useContext
-importujemo komponentu CartContext.jsx
-kreiramo funkciju useContext(CartContext)
-vrijednost funkcije useContext() pohranjujemo u varijablu const cartContext
-u return izjavu dodajemo komponentu Modal sa otvaracujim i zatvarajucim tagom
-u ul element dodajemo varijablu cartContext
-varijabli cartContext dodajemo metodu .map()
-kreiramo varijablu const cartTotal
-u komponentu Cart.jsx importujemo funkciju currencyFormatter
-u p element dodajemo funkciju currencyFormatter()
-importujemo komponentu Button.jsx
-u return izjavu dodajemo dvije komponente Button
-prvoj komponenti Button dodajemo prop textOnly
-u folderu store kreiramo komponentu UserProgressContext.jsx
-u komponentu UserProgressContext.jsx importujemo React Hook createContext
-kreiramo funkciju createContext({ ... })
-vrijednost funkcije createContext() pohranjujemo u varijablu const UserProgressContext
-eskportujemo komponentu UserProgressContext kao default
-kreiramo i eskportujemo funkciju UserProgressContextProvider sa parametrom destruktuiranim prop children
-importujemo React Hook useState()
-u komponenti UserProgressContextProvider kreiramo state varijablu const [userProgress, setUserProgress] = useState('')
-kreiramo funkcije showCart() i hideCart()
-u funkcije showCart() i hideCart() dodajemo funkciju setUserProgress()
-kreiramo funkcije showCheckout() i hideCheckout()
-u funkcije showCheckout() i hideCheckout() dodajemo funkciju setUserProgress()
-kreiramo varijablu objekt const userProgressContext 
-u return izjavi komponenti UserProgressContext.Provider dodajemo prop value
-u prop value proslijedujemo vrijednost varijable userProgress
-u komponentu App.jsx importujemo komponentu UserProgressContextProvider
-u komponentu Header.jsx importujemo komponentu UserProgressContext
-kreiramo funkciju useContext(UserProgressContext)
-vrijednost funkcije useContext() pohranjujemo u varijablu const userProgressContext
-kreiramo funkciju handleShowCart()
-u funkciju handleShowCart() dodajemo varijablu userProgressContext.showCart()
-u return izjavi, komponenti Button dodajemo prop onClick
-u prop onClick proslijedujemo funkciju handleShowCart
-u komponentu Cart.jsx importujemo komponentu UserProgressContext
-kreiramo funkciju useContext(UserProgressContext)
-vrijednost funkcije useContext() pohranjujemo u varijablu const userProgressContext
-u komponenti Cart.jsx, u return izjavi komponenti Modal dodajemo prop open
-u prop open dodajemo varijablu userProgressContext.progress === 'cart'
-u komponentu App.jsx importujemo komponentu Cart.jsx
-u komponenti Cart.jsx kreiramo funkciju handleCloseCart()
-u funkciju handleCloseCart() dodajemo varijablu userProgressContext.hideCart()
-u return izjavi, komponentama Button dodajemo prop onClick
-u prop onClick proslijedujemo vrijednost funkcije handleCloseCart
-u komponenti Modal.jsx, u funkciju useEffect() dodajemo izjavu return
-u return izjavu dodajemo cleanup anonimnu funkciju 
-kreiramo varijablu const modal
-u uslov if (open) dodajemo modal.showModal()

11. Working on the Cart Items
-kreiramo komponentu CartItem.jsx
-funkciji CartItem dodajemo parametre destruktuirane prop
-u return izjavi kreiramo li element sa klasom cart-item
-importujemo funkciju currencyFormatter
-u p element dodajemo funkciju currencyFormatter.format(price)
-u komponentu Cart.jsx importujemo komponentu CartItem.jsx
-u metodu cartContext.items.map() dodajemo komponentu CartItem
-komponenti CartItem dodajemo prop
-u prop onIcrease i onDecrease proslijedujemo anonimne funkcije

12. Adding a Custom Input Component & Managing Modal Visibility
-u komponenti Cart.jsx, u return izjavi, dodajemo uslov za pojavljivanje button elementa Go to Checkout
-kreiramo komponentu Checkout.jsx
-u komponentu Checkout.jsx importujemo komponentu Modal.jsx
-u return izjavu dodajemo komponentu Modal sa otvaracujim i zatvarajucim tagom
-u komponentu Modal dodajemo HTML element form
-importujemo React Hook useContext
-importujemo komponentu CartContext.jsx
-kreiramo funkciju useContext(CartContext)
-vrijednost funkcije useContext() pohranjujemo u varijablu const cartContext
-importujemo funkciju currencyFormatter
-kreiramo varijablu const cartTotal
-u return izjavi, u p element dodajemo funkciju currencyFormatter.format(cartTotal)
-kreiramo komponentu Input.jsx
-funkciji Input dodajemo parametre destruktuirane prop label, id
-u return izjavi kreiramo roditelj p element sa klasom control
-label elementu dodajemo prop htmlFor
-input elementu dodajemo prop id, name, required, {...props}
-u komponentu Checkout.jsx importujemo komponentu Input.jsx
-u return izjavi dodajemo komponentu Input za full name -komponenti Input za full name dodajemo prop label, type, id
-dodajemo jos jednu Input komponentu za email
-komponenti Input za email dodajemo prop label, type, id
-dodajemo jos jednu Input komponentu za street
-komponenti Input za street dodajemo prop label, type, id
-kreiramo div element sa klasom control-row
-u div element dodajemo dvije komponente Input za Postal Code i City
-komponentama Input za Postal Code i City dodajemo prop
-kreiramo p element sa klasom modal-actions
-u p element dodajemo komponente Button Close i Submit Order
-importujemo komponentu UserProgressContext
-kreiramo jos jednu funkciju useContext(UserProgressContext)
-vrijednost funkcije useContext pohranjujemo u varijablu const userProgressContext
-u return izjavi komponenti Modal dodajemo prop open
-u prop open dodajemo userProgressContext-progress === 'checkout'
-kreiramo funkciju handleClose()
-u funkciju handleClose() dodajemo userProgressContext.hideCheckout()
-u return izjavi, prvoj komponenti Button dodajemo prop type, textOnly i onClick
-u prop onClick proslijedujemo funkciju handleClose
-u komponenti Cart.jsx kreiramo funkciju handleGoToCheckout()
-u funkciju handleGoToCheckout() dodajemo userProgressContext.showCheckout()
-u return izjavi, komponenti Button Go To Checkout dodajemo prop onClick
-u prop onClick proslijedujemo funkciju handleGoToCheckout
-u komponentu App.jsx importujemo komponentu Checkout.jsx
-u komponenti Modal.jsx, funkciji Modal dodajemo parametar destruktuirani prop onClose
-u return izjavi HTML elementu dialog dodajemo dodajemo prop onClose
-u prop onClose proslijedujemo varijablu onClose
-u komponenti Cart.jsx, u return izjavi komponente Modal dodajemo prop onClose
-u prop onClose proslijedujemo funkciju handleCloseCart
-u komponenti Checkout.jsx, u return izjavi komponenti Modal dodajemo prop onClose
-u prop onClose proslijedujemo funkciju handleClose
-u komponenti Cart.jsx, u prop onClose dodajemo dinamicno prikazivanje komponente Modal

13. Handling Form Submission & Validation
-u komponenti Checkout.jsx, u return izjavi form elementu dodajemo prop onSubmit
-kreiramo funkciju handleSubmit()
-u prop onSubmit proslijedujemo funkciju handleSubmit
-funkciji handleSubmit() dodajemo parametar event
-u funkciju handleSubmit() dodajemo event.preventDefault()
-kreiramo varijablu const formData
-kreiramo varijablu const customerData

14. Sending a POST Request with Order Data
-u komponenti Checkout.jsx, u funkciji handleSubmit() dodajemo funkciju fetch() sa dva argumenta
-prvi argument funkcije fetch() je link, a drugi konfiguaracioni objekt 
-u konfiguaracioni objekt dodajemo method, headers, body
-kliknemo dugme Checkout da bi poslali podatke iz forme u backend

15. Adding a Custom HTTP Hook & Avoiding Common Errors
-u folderu src kreiramo folder hooks
-u folderu hooks kreiramo useHttp.js fajl
-u useHttp.js fajlu kreiramo i eskportujemo funkciju useHttp()
-kreiramo asinhronu funkciju sendHttpRequest() sa dva parametra url i config
-u funkciju sendHttpRequest dodajemo funkciju fetch sa kljucnom rijecju await
-rezultat funkcije fetch() pohranjujemo u varijablu const response
-varijabli response dodajemo metodu .json() i kljucnu rijec await
-vrijednost varijable response.json() pohranjujemo u varijablu const resData
-u funkciju sendHttpRequest() dodajemo uslov if (!response.ok)
-u uslov if dodajemo objekt throw new Error()
-u objekt Error() dodajemo varijablu resData.message || '...'
-dadajemo return resData
-u funkciji useHttp() kreiramo funkciju sendRequest()
-u funkciju sendRequest() dodajemo funkciju sendHttpRequest()
-dadajemo blokove koda try - catch
-u bloku koda try rezultat funkcije sendHttpRequest() pohranjujemo u varijablu const resData
-u useHttp.js fajl importujemo React Hook useState
-u funkciji useHttp() kreiramo state varijablu const [error, setError] = useState()
-u bklo koda catch(error) dodajemo funkciju setError(error.message || '...')
-u funkciji useHttp() kreiramo state varijablu const [isLoading, setIsLoading] = useState(false)
-u funkciju sendRequest() dodajemo funkciju setIsLoading(true)
-nakon bloka koda try - catch dodajemo funkciju setIsLoading(false)
-u funkciji useHttp() kreiramo state varijablu const [data, setData] = useState()
-u blok koda try dodajemo funkciju setData(resData)
-na kraj funkcije useHttp() dodajemo return izjavu kao objekt
-u objekt dodajemo varijable data, isLoading, error
-u useHttp.js fajl importujemo React Hook useEffect
-u funkciji useHttp() kreiramo funkciju useEffect()
-u funkciju useEffect() dodajemo funkciju sendRequest()
-importujemo React Hook useCallback
-kreiramo funkciju useCallback() sa dva argumenta
-prvi argument funkcije useCallback() je asinhrona funkcija sendRequest(), a drugi argument niz
-vrijednost funkcije useCallback() pohranjujemo u varijablu const sendRequest
-funkciji useHttp() dodajemo parametre url, config ili requestConfig
-u funkciju useEffect() dodajemo uslov if (config && config.method === 'GET')
-u uslov if dodajemo funkciju sendRequest()
-u return objekt dodajemo funkciju sendRequest
-u komponentu Meals.jsx importujemo funkciju useHttp iz useHttp.js fajla
-u funkciji Meals() kreiramo funkciju useHttp 
-vrijednost funkcije useHttp() pohranjujemo u varijable const { data, isLoading, error }
-kreiramo uslov if (isLoading)
-u useHttp.js fajlu, funkciji useHttp() dodajemo parametar initialData
-u komponenti Meals.jsx, funkciji useHttp dodajemo parametar prazan objekt i prazan niz
-kreiramo varijablu objekt const requestConfig = {}

16. Handling HTTP Loading & Error States
-kreiramo komponentu Error.jsx
-funkciji Error dodajemo parametre destruktuirane prop title, message
-u return izjavi kreiramo roditelj div element sa klasom error
-u komponentu Meals.jsx importujemo komponentu Error.jsx
-dodajemo uslov if (error)
-u uslov if (error) dodajemo komponentu Error
-komponenti Error dodajemo prop title, message

17. Finishing Touches
-u komponentu Checkout.jsx importujemo funkciju useHttp() iz useHttp.js fajla
-kreiramo varijablu objekt const requestConfig = { ... }
-kreiramo funkciju useHttp() sa dva argumenta
-prvi argument funkcije useHttp() je link, a drugi varijabla requestConfig
-vrijednost funkcije useHttp pohranjujemo u varijable const { data, isLoading, error, sendRequest }
-u funkciju handleSubmit() dodajemo funkciju sendRequest()
-u komponenti Checkout.jsx kreiramo varijablu let actions
-dodajemo uslov if (isSending)
-u uslov if dodajemo varijablu actions
-u return izjavu, u p element dadajemo varijablu actions
-u return izjavu dodajemo uslov {error && <Error />}
-dodajemo uslov if (data && !error)
-u uslov if dodajemo komponentu Modal sa otvaracujim i zatvarajucim tagom
-komponenti Modal dodajemo prop open i onClose
-u prop open dodajemo userProgressContext.progress === 'checkout'
-u prop onClose proslijedujemo funkciju handleClose
-u komponentu Modal dodajemo HTML elemente h2 i p 
-kreiramo p element sa klasom modal-actions
-u p element dodajemo komponentu Button Okay
-komponenti Button dodajemo prop onClick
-u prop onClick proslijedujemo funkciju handleClose
-kreiramo funkciju handleFinish()
-u funkciju handleFinish() dodajemo userProgressContext.hideCheckout()
-u komponenti CartContext, u funkciji cartReducer dodajemo uslov if (action.type === 'CLEAR_CART')
-u funkciji CartContextProvider kreiramo funkciju clearCart()
-u funkciju clearCart() dodajemo funkciju dispatchCartAction({ ... })
-u varijablu objekt const cartContext dadajemo funkciju clearCart
-u funkciju handleFinish() dodajemo cartContext.clearCart()
-u return izjavi, Button Okay komponenti u prop onClick proslijedujemo funkciju handleFinish
-u komponenti Checkout.jsx, u funkciju handleFinish() dodajemo funkciju clearData()

18. Migrating To Form Actions
-u komponenti Checkout.jsx, funkciju Checkout() preimenujemo u funkciju checkoutAction()
-u jsx-u, form elementu dodajemo prop checkoutAction
-u funkciji checkoutAction kreiramo varijablu const customerData

19. Managing Form Status with Form Actions
-u komponentu Checkout.jsx importujemo funkciju useActionState iz paketa React
-u funkciji Checkout(), pozivamo funkciju useActionState()
-funkciji useActionState() dadajemo dva argumenta
-prvi argument je funkcija checkoutAction, a drugi argument je null
-vrijednost funkcije useActionState() pohranjujemo u varijable const [formState, formAction, isSending]
-u jsx-u, u prop action proslijedujemo funkciju formAction
-funkciji checkoutAction() dodajemo parametar prevState