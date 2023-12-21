Section 17: Working with Forms & User Input

338. Module Introduction & Starting Project

339. What are Forms & What's Tricky About Them ?

340. Handling Form Submission
-u komponenti Login.jsx kreiramo funkciju handleSubmit()
-button elementu Login dodajemo dogadaj onClick
-u dogadaj onClick proslijedujemo funkciju handleSubmit
-button elementu Login dodajemo type='submit'
-form elementu dodajemo dogadaj onSubmit
-funkciji handleSubmit() dodajemo parametar event
-u funkciju handleSubmit(event) dodajemo event.preventDefault()
-u dogadaj submit proslijedujemo funkciju handleSubmit

341. Managing & Getting User Input via State & Generic Handlers
-u funkciji Login() kreiramo state varijablu const [enteredEmail, setEnteredEmail] = useState('')
-kreiramo state varijablu const [enteredPassword, setEnteredPassword] = useState('')
-kreiramo funkciju handleEmailChange() sa parametrom event
-u return izjavi, input email elementu dodajemo dogadaj onChange
-u dogadaj onChange proslijedujemo funkciju handleEmailChange
-u funkciju handleEmailChange() dodajemo funkciju setEnteredEmail(event.target.value)
-input elementu dodajemo prop value
-u u prop value proslijedujemo varijablu enteredEmail
-kreiramo funkciju handlePasswordChange() sa parametrom event
-isto uradimo i za sifru
-kreiramo state varijablu const [enteredValues, setEnteredValues] = useState({ ... })
-kreiramo funkciju handleInputChange() sa dva parametra identifier i event
-u funkciju handleInputChange() dodajemo funkciju setEnteredValues()
-u dogadaj onChange proslijedujemo anonimnu funkciju sa parametrom event
-u anonimnu funkciju proslijedujemo funkciju handleInputChange('...', event.target.value)
-u prop value proslijedujemo enteredValues.email ili enteredValues.password
-ovo uradimo za obadva input elementa

342. Getting User Input via Refs
-u komponentu Login.jsx importujemo React Hook useRef
-kreiramo funkcije useRef()
-vrijednost funkcija useRef pohranjujemo u varijable email  i password
-input elementima dodajemo prop ref
-u prop ref proslijedujemo varijable email i password
-u funkciji handleSubmit() kreiramo varijable enteredEmail i enteredPassword

343. Getting Values via FormData & Native Browser APIs
-kreiramo komponentu Signup.jsx
-u komponentu App.jsx importujemo komponentu Signup
-u komponenti Signup.jsx kreiramo funkcijuž handleSubmit() sa parametrom event
-kreiramo novu funkciju new FormData()
-rezultat funkcije new FormData() pohranjujemo u varijablu const fb (formDataObject)
-input elementima dodajemo prop name
-varijabli fd dodajemo metodu get()
-u funkciju get() dodajemo argument 'email'
-kreiramo varijablu Object.fromEntries(fd.entries())
-vrijednost varijable Object pohranjujemo u varijablu const data
-kreiramo fd.getAll()
-vrijednost fd.getAll() pohranjujemo u varijablu const acquisitionChannel
-varijabli data dodajemo metodu acquisition

344. Resetting Forms
-u komponenti Signup.jsx, button elementu dodajemo type='button'
-u funkciju handleSubmit(), dodajemo event.target.reset()

345. Validating Input on Every Keystroke via State
-u komponenti StateLogin.jsx krieramo varijablu const emailIsInvalid
-u return izjavi kreiramo div element sa klasom control-error
-u div element dodajemo varijablu emailIsInvalid

346. Validating Input Upon Lost Focus (Blur)
-u komponenti StateLogin.jsx, u return izjavi elementu input dodajemo prop onBlur
-kreiramo funkciju handleInputBlur() sa parametrom identifier
-kreiramo state varijable const [didEdit, setDidEdit] = useState({ ... })
-u funkciju handleInputBlur() dodajemo funkciju setDidEdit()
-u prop onBlur proslijedujemo anonimnu funkciju
-u anonimnu funkciju proslijedujemo funkciju handleInputBlur
-u funkciju handleInputChange() dodajemo funkciju setDidEdit()

347. Validating Input Upon Form Submission
-u komponenti Login.jsx, u funkciji handleSubmit() kreiramo varijablu const emailIsValid
-kreiramo staet varijablu const [emailIsInvalid, setEmailIsInvalid] = useState(false)
-kreiramo state varijablu const [formIsInvalid, setIsFormInvalid] = useState(false)
-u funkciji handleSubmit() dodajemo uslov if (!emailIsValid)
-u uslov if dodajemo funkciju setEmailIsInvalid(true)
-u return izjavi kreiramo div sa klasom control-error
-u div element dodajemo uslov {emailIsInvalid && <p>...</p>}

348. Validating Input via Built-in Validation Props
-u komponenti Signup.jsx, u return izjavi input elementima dodajemo prop required
-input elementu za sifru dodajemo prop minLength

349. Mixing Custom & Built-in Validation Logic
-u komponenti Signup.jsx kreiramo state varijablu const [passwordsAreNotEqual, setPasswordsAreNotEqual] = useState(false)
-u funkciju handleSubmit() dodajemo uslov if (data.password !== data['confirm-password'])
-u uslov if dodajemo funkciju setPasswordsAreNotEqual(true) i return
-u div elementu sa klasom control kreiramo element div element sa klasom control-error
-u div element dodajemo uslov {passwordsAreNotEqual && <p>...</p>}

350. Building & Using a Reusable Input Component
-kreiramo komponentu Input.jsx
-u komponenti Input.jsx, funkciji Input dodajemo destruktuirane parametre props
-u return izjavi kreiramo div element sa klasom control i no-margin
-label elementu dodajemo prop htmlFor
-u div element sa klasom control-error dodajemo uslov {error & <p>...</p>}
-u komponentu StateLogin.jsx importujemo komponentu Input.jsx
-u return izjavi komponenti Input dodajemo prop 
-u komponenti StateLogin.jsx kreiramo varijablu const passwordIsInvalid

351. Outsourcing Validation Logic
-kreiramo folder util
-u folder util kreiramo validation.js fajl
-u validation.js fajlu kreiramo funkcije za validaciju
-u komponentu StateLogin.jsx importujemo funkcije is validation.js fajla

352. Creating a Custom useInput Hook
-kreiramo folder hooks
-u folderu hooks kreiramo useInput.js fajl
-u useInput.js fajlu kreiramo i eksportujemo funkciju useInput sa parametrom defaultValue
-premjestamo state varijable iz komponente StateLogin.jsx u useInput.js fajl
-premjestamo funkcije iz komponente StateLogin.jsx u useInput.js fajla
-u funkciju handleInputChange() dodajemo funkcije setEnteredValue i setDidEdit
-u return izjavu dodajemo objekt
-u objekt dodajemo kljuceve value, handleInputChange, handleInputBlur
-u komponentu StateLogin.jsx importujemo funkciju useInput
-u funkciji Login() kreiramo funkciju useInput('')
-vrijednost funkcije useInput() pohranjujemo u varijable
-kreiramo varijable value, handleInputChange, handleInputBlur
-u useInput.js fajlu, funkciji useInput() dodajemo parametar validationFn
-kreiramo funkciju validationFn(enteredValue)
-vrijednost funkcije validationFn() pohranjujemo u varijablu const valueIsValid
-u return objekt dodajemo varijablu hasError
-u komponenti StateLogin.jsx kreiramo jos jednu funkciju useInput() za validaciju sifre
-u funkciju handleSubmit() dodajemo uslov if (emailHasError || passwordHasError)

353. Using Third-Party Form Libraries
