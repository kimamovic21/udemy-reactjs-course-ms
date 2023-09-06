React - The Complete Guide  (29_section)

474. 
-sta su React hooks ?


475. 
-pocetni projekt


476. 
-React 18 i ova sekcija


477. 
-pocetak rada sa useState() React hook
-u IngredientForm.jsx komponentu importujemo useState() React hook
-input elementima dodajemo value atribut
-input elementima dodajemo onChange dogadaj


478. 
-vise o useState() i azuriranju stanja
-izmjene u onChange dogadaju


479. 
-destrukturiranje niza
-kreiramo const [inputState, setInputState] = useState({ ... })


480. 
-vise stanja
-kreiramo dva stanja, jedan za title i jedan za kolicinu
-pravimo izmjene u value atributu i onChange dogadaju


481. 
-pravila React hooks


482. 
-proslijedivanje stanja kroz komponente
-u Ingredients.jsx komponentu importujemo IngredientList komponentu
-kreiramo const [ userIngredients, setUserIngredients] = useState([])
-komponenti IngredientList dodajemo prop ingredients
-ingredients prop-u dodijelo vrijednost userIngredients varijable
-kreiramo addIngredientHandler funkciju sa parametrom ingredient
-u addIngredientHandler funkciju dodajemo setUserIngredients
-IngredientForm komponenti dodajemo prop onAddIngredient
-onAddIngredient prop-u dodajemo vrijednost addIngredientHandler funkcije
-u IngredientForm.jsx komponenti u submitHandler funkciji dodajemo props.onAddIngredient({ ... })


Assignment
-u Ingredients.jsx komponenti kreiramo removeIngredientHandler funkciju
-u removeIngredientHandler funkciju dodajemo setUserIngredients()
-u Ingrediets.jsx komponenti, IngredientList komponenti dodajemo  onRemoveItem prop
-onRemoveItem prop-u proslijedujemo vrijednost removeIngredientHandler funkcije
-u IngredientsList.jsx komponenti dodajemo onClick={props.onRemoveItem.bind(this, ingredient.id)}


483. 
-slanje http zahtjeva
-u Ingredients.jsx komponenti, unutar addIngredientHandler funkciji, dodajemo fetch metodu
-nakon fetch metode, dodajemo then metode


484. 
-useEffect() i ocitavanje podataka
-u Ingredients.jsx komponentu importujemo useEffect() React hook
-u useEffect() funkciji, unutar callback funkcije, dodajemo fetch i then metode


485. 
-razumijevanje useEffect() dependency niza
-kreiramo jos jednu useEffect() React hook


486. 
-vise o useEffect()
-u Search.jsx komponenti kreiramo const [enteredFilter, setEnteredFilfer] = useState('')
-input elementu dodajemo value atribut
-input elementu dodajemo onChange dogadaj
-u onChange dogadaju dodajemo (e) => setEnteredFilfer(e.target.value)
-kreiramo useEffect() React hook
-u useEffect(), unutar callback funkcije, dodajemo props.onLoadIngredients(loadedIngredients)
-u Ingredients.jsx komponenti, unutar return izjave, Search komponenti dodajemo prop onLoadIngredients
-kreiramo filteredIngredientsHandler funkciju
-onLoadIngredients prop-u proslijedujemo vrijednost filteredIngredientsHandler funkcije
-u Search.jsx komponenti, unutar Search funkcije, kreiramo const { onLoadIngredients } = props
-u Search.jsx komponenti, unutar useEffect() kreiramo query varijablu
-pravimo izmjene u Firebase data rules


487. 
-sta je useCallback() ?
-u Ingredients.jsx komponentu importujemo useCallback() React hook
-u funkciju filteredIngredientsHandler dodajemo useCallback


488. 
-rad sa Refs i useRef()
-u Search.jsx komponenti, unutar useEffect() funkcije, dodajemo setTimeout() funkciju
-importujemo useRef() React hook
-kreiramo varijablu inputRef
-input elementu dodajemo ref prop
-unutar setTimeout funkcije kreiramo if uslov


489. 
-ciscenje sa useEffect()
-u useEffect() React hook kreiramo timer varijablu u koju pohranjujemo setTimeout funkciju
-dodajemo return izjavu u koju dodajemo clearTimeout funkciju


490. 
-brisanje Ingredients 
-u Ingredients.jsx komponenti, unutar removeIngredientHandler dodajemo fetch metodu


491. 
-ocitavanje gresaka i uredivanje stanja
-u Ingredients.jsx komponenti kreiramo const [isLoading, setIsLoading] = useState(false)
-u funkciju addIngredientHandler dodajemo setIsLoading(true)
-u fetch metodi, nakon then, dodajemo setIsLoading(false)
-u return izjavi, IngredientForm komponenti dodajemo loading prop i proslijedujemo vrijednost isLoading
-u IngredientForm.jsx komponentu importujemo LoadingIndicator.jsx komponentu
-u return izjavi dodajemo uslov {props.loading ? ... : ...}
-u terminalu instaliramo paket npm install react-loader-spinner --save
-u Ingredients.jsx komponenti, unutar removeIngredientHandler funkcije dodajemo setIsLoading() dva puta
-u terminalu instaliramo npm install --save react-spinners
-u Ingredients.jsx komponentu importujemo ErrorModal.jsx komponentu
-kreiramo const [error, setError] = useState()
-u funkciju removeIngredientHandler dodajemo .catch() metodu
-unutar catch() metode dodajemo setError(error.message)
-u return izjavi dodajemo {error && <ErrorModal>{error}</ErrorModal>}
-kreiramo funkciju clearError
-ErrorModal komponenti dodajemo onClose prop i proslijedujemo mu vrijednost clearError funkcije
-unutar catch metode dodajemo setIsLoading(false)


493. 
-razumijevanje useReducer()
-u Ingredients.jsx komponentu importujemo useReducer React hook
-u Ingredients.jsx komponenti kreiramo ingredientReducer funkciju sa dva parametra
-prvi parametar je stanje, a drugi parametar funkcija koja azurira stanje
-u ingredientReducer funkciji dodajemo switch uslov
-u Ingredients funkciji kreiramo const [userIngredients, dispatch] = useReducer(ingredientReducer, [])
-u then metodama dodajemo disptach funkcije


494. 
-koristenje useReducer() za http stanje
-u Ingredients.jsx komponenti kreiramo httpReducer funkciju
-u httpReducer funkciji dodajemo switch uslov
-kreiramo const [httpState, dispatchHttp] = useReducer(httpReducer, {loading: false, error: null})
-u then metodama dodajemo dispatchHttp



495. 
-rad sa useContext()
-u App.js fajl importujemo Auth komponentu
-kreiramo folder context
-unutar context foldera kreiramo auth-context.jsx komponentu
-u auth-context komponenti kreiramo varijablu AuthContext
-kreiramo AuthContextProvider funkciju
-kreiramo const [isAuthenticated, setIsAuthenticated] = useState(false)
-kreiramo loginHandler funkciju
-u return izjavi kreiramo AuthContext.Provider 
-u return izjavi AuthContext.Provider komponenti dodajemo value prop
-u App.js fajl importujemo AuthContext i useContext React hook
-u App.js fajlu kreiramo authContext varijablu
-u Auth.jsx komponenti kreiramo authContext varijablu


496. 
-optimizacija performansi sa useMemo()
-u Ingredients.jsx komponentu importujemo useCallback() React hook
-funkcijama addIngredientHandler i removeIngredientHandler dodajemo useCallback() React hook
-u Ingredients.jsx komponenti kreiramo ingredientList varijablu


497. 
-pocetak rada sa custom hooks
-kreiramo hooks folder
-u hooks folderu kreiramo http.jsx komponentu
-u http.jsx komponenti kreiramo sendRequest funkciju sa parametrim url, method, body
-u Ingredients.jsx komponentu importujemo useHttp funkciju


498. 
-dijeljenje podataka izmedu custom hooks i komponenti
-u Ingredients.jsx komponenti, funkciji addIngredientHandler dodajemo sendRequest funkciju
-u Ingredients.jsx komponenti, unutar useEffect() React hook dodajemo if else uslov


499. 
-koristenje custom React hook
-u http.jsx komponenti kreiramo varijabli initialState
-kreiramo clear funkciju
-u Ingredients.jsx komponenti, u ErrorModal komponenti dodajemo clear funkciju
-u Search.jsx komponentu importujemo http.jsx komponentu
-kreiramo jos jedan useEffect unutar kojeg se nalazi if uslov
-importujemo ErrorModal komponentu
-u return izjavi dodajemo uslov za pojavljivanje error poruke


500. 
-sazetak
