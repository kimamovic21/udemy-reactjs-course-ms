React - The Complete Guide  (16_section)
Working with Forms & User Input

199. 
-bavljenje sa podnosenjem forme i dobivanje vrijednosti unosa korisnika
-u simpleInput.jsx komponentu importujemo useRef i useState React hooks
-kreiramo const [enteredName, setEnteredName] = useState('')
-kreiramo nameInputChangeHandler funkciju sa evetn parametrom
-u nameInputChangeHandler funkciju dodajemo setEnteredName funkciju
-input elementu dodajemo onChange dogadaj 
-onChange dogadaju proslijedujemo vrijednost nameInputChangeHandler funkcije
-kreiramo funkciju formSubmissionHandler sa parametrom event
-form elementu dodajemo onSubmit dogadaj
-onSubmit dogadaju proslijedujemo vrijednost formSubmissionHandler funkcije
-kreiramo nameInputRef varijablu cija je vrijednost jednaka useRef() React hook funkciji
-input elementu dodajemo ref atribut
-ref atributut proslijedujemo nameInputRef
-u formSubmissionHandler funkciji kreiramo varijablu enteredValue 
-funkciji formSubmissionHandler dodajemo setEnteredName('')
-input elementu dodajemo value atribut kojem proslijedujemo vrijednost enteredValue varijable


200. 
-dodavanje osnovne validacije
-u formSubmissionHandler funkciji dodajemo if uslov


201. 
-pruzanje povratnih informacija o validaciji
-dodajemo const [enteredNameIsValid, setEnteredNameIsValid] = useState(true) (prvo je false pa promjenimo u true)
-u if uslovu dodajemo setEnteredNameIsValid(false)
-dodajemo {!enteredNameIsValid && ... } ispod input elementa
-kreiramo nameInputClasses varijablu 
-prvom div elementu u form elementu dodajemo dinamicnu klasu nameInputClasses


202. 
-bavljenje sa "bio dirnut" stanjem
-importujemo useEffect React hook
-kreiramo const [enteredNameTouched, setEnteredNameTouched] = useState(false)
-kreirano varijablu nameInputIsInvalid
-u funkciji formSubmissionHandler dodajemo setEnteredNameTouched(true)


203. 
-Reagiranje na izgubljeni fokus
-kreiramo nameInputBlurHandler funkciju
-input elementu dodajemo onBlur dogadaj
-onBlur dogadaju proslijedujemo vrijednost nameInputBlurHandler funkciju
-u funkciju nameInputBlurHandler dodajemo setEnteredNameTouched(true)


204. 
-Refaktorisanje i derivirajuca stanja
-u nameInputChangeHandler funkciju dodajemo if uslov
-brisemo useRef() React hook
-kreiramo varijablu enteredNameIsValid
-u formSubmissionHandler funkciju dodajemo setEnteredNameTouched(false)


205. 
-Upravljanje cjelokupnom valjanoscu obrasca
-kreiramo const [formIsValid, setFormIsValid] = useState(false)
-dodajemo useEffect i unutar callback funkcije dodajemo if - else uslov
-button elementu dodajemo disabled atribut


Assignment
-kreiramo div sa input poljem
-kreiramo dva useState za email
-kreiramo emailInputChangeHandler funkciju
-unutar emailInputChangeHandler funkcije dodajemo setEnteredEmail(event.target.value)
-kreiramo emailInputBlurHandler funkciju
-unutar emailInputBlurHandler funkcije dodajemo setEnteredEmailTouched(true)
-input elementu za email dodajemo onChange i onBlur dogadaje
-onChange dogadaju proslijedujemo vrijednost emailInputChangeHandler funkcije
-onBlur dogadaju proslijedujemo vrijednost emailInputBlurHandler funkcije
-input elementu dodajemo atribut value cija je vrijednost jednaka enteredEmail
-u funkciji formSubmissionHandler dodajemo setEnteredEmail('') i setEnteredEmailTouched(false)
-kreiramo enteredEmailIsValid varijablu
-kreiramo enteredEmailIsInvalid varijablu
-kreiramo emailInputClasses varijablu
-u div elementu za email input dodajemo uslov{enteredEmailIsInvalid && ... }
-u if uslovu nakon definisanja useState, dodajemo jos i enteredEmailIsValid


206. 
-kreiranje custom hooks
-kreiramo folder hooks i unutar njega use-input.jsx komponentu
-u use-input.jsx komponenti kreiramo useInput funkciju sa parametrom validateValue
-kreiramo nova dva useState stanja
-kreiramo nove dvije varijable
-kreiramo valueChangeHandler funkciju
-unutar valueChangeHandler funkcije dodajemo setEnteredValue
-kreiramo inputBlurHandler funkciju
-unutar inputBlurHandler funkcije dodajemo setIsTouched
-u SimpleInput.jsx komponentu importujemo use-input.jsx komponentu
-u use-input.jsx komponenti kreiramo reset funkciju
-unutar reset funkcije dodajemo setEnteredValue('') i setIsTouched(false);


207. 
-Ponovno iskoristenje React custom hooks
-kreiramo custom hook za email
-
 