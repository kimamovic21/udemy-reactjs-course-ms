React - The Complete Guide  (17_section)
Practice Project: Adding Http & Forms To The Food Order App


214. 
-premjestanje Meals podataka u Firebase


215. 
-preuzimanje Meals podataka preko Http metode
-u AvailableMeals.jsx komponenti kreiramo useEffect React hook
-unutar useEffect React hook, dodajemo fetch metodu
-rezultat fetch metode pohranjujemo u varijablu response koju prethodno kreiramo
-kreiramo responseData varijablu cija je vrijednost await response.json()
-kreiramo varijablu loadedMeals cija je vrijednost jednaka praznom nizu
-kreiramo for petlju (const key in responseData)
-kreiramo const [meals, setMeals] = useState([])
-ispod for petlje dodajemo setMeals(loadedMeals)
-pozivamo fetchMeals funkciju
-drugi argument useEffect React hook je prazan niz
-varijabli mealsList dodajemo meals.map() metodu


216. 
-rukovanje sa loading stanjem
-kreiramo const [isLoading, setIsLoading] = useState(true)
-unutar fetchMeals funkcije dodajemo setIsLoading(false)
-dodajemo uslov if (isLoading)


217. 
-rukovanje sa Error (greskama)
-kreiramo const [httpError, setHttpError] = useState(undefined)
-dodajemo uslov if(!response.ok)
-dodajemo try - catch blokove koda
-u try blok koda dodajemo fetchMeals funkciju
-u catch blok koda dodajemo setIsLoading(false) i setHttpError(error.message)
-try - catch blokove koda brisemo i dodajemo fetchMeals().catch((error) => { ... }


218. 
-dodavanje obrazca za odjavu
-kreiramo Checkout.jsx komponentu
-u Checkout.jsx komponenti kreiramo form kao roditelj element
-kreiramo div, label, input elemente
-u Cart.jsx komponentu importujemo Checkout.jsx komponentu
-u Cart.jsx komponenti kreiramo orderHandler funkciju
-dugmetu Order dodajemo onClick dogadaj i proslijedujemo orderHandler funkciju
-kreiramo const [isCheckout, setIsCheckout] = useState(false)
-u funkciju orderHandler dodajemo setIsCheckout(true)
-u return izjavi dodajemo uslov {isCheckout && <Checkout />}
-kreiramo varijablu modalActions
-dodajemo uslov {!isCheckout && modalActions}
-u Checkout.jsx komponenti kreiramo confirmHandler funkciju
-form elementu dodajemo onSubmit dogadaj kojem proslijedujemo confirmHandler funkciju


219. 
-citanje vrijednosti iz forme
-u Checkout.jsx komponentu importujemo useRef React hook
-koristimo useRef da dobijemo vrijednost samo kad je forma poslana
-u Checkout funkciji kreiramo nameInputRef, streetInputRef, postalCodeInputRef, cityInputRef varijable
-input elementima dodajemo ref prop i proslijedujemo im imena varijabli
-u confirmHandler funkciji kreiramo enteredName, enteredStreet, enteredPostalCode, enteredCity varijable


220. 
-dodavanje validacije formi
-kreiramo pomocne funkcije isEmpty i isNotFiveChars
-kreiramo enteredNameIsValid, enteredStreetIsValid, enteredCityIsValid i enteredPostalCodeIsValid varijable
-kreiramo varijablu formIsValid i provjeravamo da li su validne varijable
-dodajemo if uslov ako forma nije validna
-importujmeo useState React hook u Checkout.jsx komponentu
-kreiramo const [formInputsValidity, setFormInputsValidity] = useState({ ... })
-u Checkout.jsx komponenti, unutar confirmHandler funkcije, pozivamo setFormInputsValidity funkciju
-ispod input elementa dodajemo uslove ako pogresno unesemo podatke
-div elementima unutar kojih se nalaze label i input elementi dodajemo dinamicke klase
-kreiramo varijable nameControlClasses, streetControlClasses, postalCodeControlClasses i cityControlClasses 
-varijable koje smo kreirali proslijedujemo unutar klasa div elemenata


221. 
-podnosenje i slanje podataka iz forme
-u Cart.jsx komponenti kreiramo submitOrderHandler sa userData parametrom
-u Cart.jsx komponenti, unutar uslova isCheckout, Checkout komponenti dodajemo props onConfirm
-onConfirm propsu proslijedimo vrijednost submitOrderHandler funkcije
-u Checkout.jsx komponenti dodajemo props.onConfirm({ ... })
-u Cart.jsx komponenti, unutar submitOrderHandler funkcije, dodajemo fetch metodu
-unutar fetch metode, na kraju linka dodajemo /orders.json
-drugi parametar je konfiguracijski objekt


222. 
-dodavanje bolje povratne informacije od korisnika
-u Cart.jsx komponentu dodajemo const [isSubmitting, setIsSubmitting] = useState(false)
-u funkciju submitOrderHandler dodajemo setIsSubmitting(true)
-funkciji submitOrderHandler dodajemo async i await metode
-nakon fetch metode dodajemo setIsSubmitting(false)
-dodajemo const [didSubmit, setDidSubmit] = useState(false)
-u submitOrderHandler funkciji, nakon fetch metode dodajemo setDidSubmit(true)
-u Cart.jsx komponenti kreiramo cartModalContent varijablu
-kreiramo isSubmittingModalContent varijablu
-kreiramo didSubmitModalContent varijablu
-u return izjavi dodajemo tri uslova
-u CartProvider.jsx komponenti dodajemo if uslov da ispraznimo korpu nakon slanja
-u CartProvider funkciji kreiramo clearCartHandler funkciju
-u CartProvider.jsx komponenti, cartContext varijabli dodajemo clearCart: clearCartHandler
-u Cart.jsx komponenti, unutar submitOrderHandler funkcije, dodajemo cartContext.clearCart()

