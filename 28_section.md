React - The Complete Guide  (28_section)

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


