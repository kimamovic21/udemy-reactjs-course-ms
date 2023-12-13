Section 12: Practice Project: Building a Quiz App

234. Module Introduction
-preuzmemo starter fajlove i instaliramo Vite ReactJS projekt sa npm install

235. A First Component & Some State
-kreiramo komponente Header.jsx i Quiz.jsx
-u komponentu Header.jsx importujemo sliku logoImg
-u komponentu App.jsx importujemo komponentu Header.jsx
-u komponentu Quiz.jsx importujemo React Hook useState
-kreiramo state varijablu [activeQuestionIndex, setActiveQuestionIndex] = useState(0)
-kreiramo state varijablu const [userAnswers, setUserAnswers] = useState([])

236. Derving Values, Outputting Questions & Registering Answers
-https://stackoverflow.com/questions/64729264/how-can-i-get-rid-of-the-warning-import-no-anonymous-default-export-in-react
-kreiramo questions.js fajl
-u questions.js fajlu kreiramo i eksportujemo niz pitanja
-u komponenti Quiz.jsx kreiramo varijablu const activeQuestionIndex
-u komponentu Quiz.jsx importujemo niz QUESTIONS iz questions.js fajla
-u return izjavu dodajemo roditelj div element sa ide-em questions
-u div element dodajemo HTML elemente h2, ul
-u ul elementu dodajemo metodu QUESTIONS[activeQuestionIndex].answers.map()
-u metodu map dodajemo HTML elemente li i button
-kreiramo funkciju handleSelectAnswer() sa parametrom selectedAnswer
-button elementu dodajemo dogadaj onClick
-u dogadaj onClick proslijedujemo anonimnu funkciju 
-u anonimnu funkciju proslijedujemo funkciju handleSelectAnswer(answer)
-u funkciju handleSelectAnswer() dodajemo funkciju setUserAnswers()
-u funkciju setUserAnswers() dodajemo anonimnu funkciju sa parametrom prevUserAnswers
-u return izjavu dodajemo [...prevUserAnswers, selectedAnswer]
-u komponentu App.jsx importujemo komponentu Quiz.jsx
-u komponenti Quiz.jsx kreiramo div roditelj element sa id-em quiz

237. Shuffling Answers & Adding Quiz Logic
-u komponenti Quiz.jsx kreiramo varijablu const shuffledAnswers
-varijabli shuffledAnswers dodajemo metodu .sort()
-u return izjavu u ul element dodajemo varijablu shuffledAnswers
-varijabli shuffledAnswers dodajemo metodu .map()
-kreiramo varijablu const quizIsComplete 
-dodajemo uslov if (quizIsComplete)
-u if uslov dodajemo div element sa id-em summary koji se treba pojaviti kada prododemo kroz sva pitanja
-importujemo sliku quizCompleteImg

238. Adding Questions Timers
-kreiramo komponentu QuestionTimer.jsx
-funkciji QuestionTimer() dodajemo parametre destruktuirane prop timeout, onTimeout
-u komponenti QuestionTimer.jsx, u return izjavi dodajemo HTML element progress
-elementu progress dodajemo id question-time
-u funkciji QuestionTimer() kreiramo funkciju setTimeout()
-u funkciju setTimeout() dodajemo funkciju onTimeout
-importujemo React Hook useState()
-kreiramo state varijablu const [remainingTime, setRemainingTime] = useState(timeout)
-kreiramo funkciju setInterval()
-u funkciju setInterval dodajemo funkciju setRemainingTime()
-importujemo React Hook useEffect
-u funkciju useEffect() dodajemo funkciju setInterval()
-kreiramo jos jednu funkciji useEffect() u koju dodajemo funkciju setTimeout()
-elementu progress dodajemo prop max i Values
-u prop max proslijedujemo varijablu timeout
-u prop value proslijedujemo varijablu remainingTime
-u komponentu Quiz.jsx importujemo komponentu QuestionTimer.jsx
-u return izjavu komponenti QuestionTimer dodajemo prop timeout i onTimeout
-u prop timeout proslijedujemo vrijednost 10000 milisekundi
-u prop onTimeout proslijedujemo anonimnu funkciju
-u anonimnu funkciju proslijedujemo funkciju handleSelectAnswer(null)

239. Working with Effect Dependencies & useCallback
-u komponentu Quiz.jsx importujemo React Hook useCallback
-kreiramo funkciju useCallback()
-vrijednost funkcije useCallback() pohranjujemo u varijablu const handleSkipAnswer
-u funkciju useCallback() dodajemo dva argumenta
-u prvi argument funkcije useCallback() dodajemo funkciju handleSelectAnswer(null)
-u drugi argument funkcije useCallback() dodajemo niz handleSelectAnswer
-kreiramo jos jednu funkciju useCallback()
-u funkciju useCallback() dodajemo funkciju handleSelectAnswer()
-vrijednost funkcije useCallback() pohranjujemo u varijablu const handleSelectAnswer

240. Using Effect Cleanup Functions & Using Key for Resetting Components
-u komponenti QuestionTimer, u funkciji useEffect() kreiramo varijablu const interval
-u funkciju useEffect() dodajemo return izjavu
-u return izjavu dodajemo anonimnu funkciju Cleanup 
-u anonimnu funkciju Cleanup dodajemo funkciju clearInterval(interval)
-u drugoj funkciji useEffect() kreiramo varijablu const timer
-u funkciji useEffect() dodajemo return izjavu
-u return izjavu dodajemo anonimnu funkciju Cleanup
-u anonimnu funkciju Cleanup dodajemo funkciju clearTimeout(timer)
-u komponenti Quiz.jsx, u return izjavi komponenti QuestionTimer dodajemo prop key
-u prop key proslijedujemo varijablu activeQuestionIndex

241. Highlighting Selected Answers & Managing More State
-u komponenti Quiz.jsx kreiramo state varijablu const [answerState, setAnswerState] = useState('');
-u funkciju handleSelectAnswer dodajemo funkciju handleSelectAnswer('answered)
-dodajemo funkciju setTimeout()
-u funkciju setTimeout() dodajemo uslov if - else
-u uslov if dodajemo funkciju setAnswerState('correct)
-u uslov else dodajemo funkciju setAnswerState('wrong')
-u metodi .map() kreiramo varijablu let cssClasses
-kreiramo varijablu const isSelected
-button elementu dodajemo className
-u className proslijedujemo vrijednost varijable cssClasses
-dodajemo uslov if (answerState === 'answered' && isSelected)
-u uslov if dodajemo varijabli cssClasses = 'selected'
-dodajemo jos jedan uslov if
-u uslov if dodajemo cssClasses = answerState

242. Splitting Components Up To Solve Problems
-u komponentu Quiz.jsx importujemo React Hook useRef
-kreiramo funkciju useRef()
-vrijednost funkcije useRef() pohranjujemo u varijablu const shuffledAnswers
-dodajemo uslov if (!shuffledAnswers.current)
-u uslovu if dodajemo varijabli shuffledAnswers dodajemo metodu .current
-u ul element dodajemo varijabli shuffledAnswers metodu .current.map(answer)
-kreiramo komponentu Answers.jsx
-u komponenti Answers.jsx, funkciji Answers() dodajemo parametre destruktuirane prop answers, selectedAnswer, answerState, onSelect
-u funkciju Answers() dodajemo uslov if (!shuffledAnswers.current)
-importujemo React Hook useRef
-kreiramo varijablu const shuffledAnswers = useRef()
-u return izjavu dodajemo ul element sa id='answers'
-u komponentu Quiz.jsx importujemo komponentu Answers.jsx
-u return izjavi komponenti Answers dodajemo prop answers, selectedAnswer, answerState, onSelect
-u return izjavi, button elementu dodajemo dogadaj onClick
-u dogadaj onClick proslijedujemo anonimnu funkciju
-u anonimnu funkciju proslijedujemo funkciju onSelect(answer)
-u komponenti Quiz, u return izjavi komponenti Answers dodajemo prop key
-u prop key proslijedujemo vrijednost varijable activeQuestionIndex
-kreiramo komponentu Question.jsx
-u komponentu Question.jsx importujemo komponente
-funkciji Question dodajemo parametre destruktuirane prop
-u komponentu Quiz.jsx importujemo komponentu Question.jsx
-u return izjavi komponenti Question dodajemo props

243. Moving Logic To Components That Actually Need It ("Moving State Down")
-u komponenti Question kreiramo state varijable const [answer, setAnswer] = useState({ ... })
-kreiramo funkciju handleSelectAnswer() sa parametrom answer
-u funkciju handleSelectAnswer() dodajemo funkciju setAnswer()
-kreiramo funkciju setTimeout()
-u funkciju setTimeout dodajemo funkciju setAnswer()
-u komponentu Question.jsx importujemo niz QUESTIONS
-kreiramo varijablu let answerState
-dodajemo uslov if(answer.selectedAnswer)
-u return izjavi komponenti Question dodajemo prop index
-u prop index proslijedujemo varijablu activeQuestionIndex
-dodajemo uslov if - else
-button elementu dodajemo prop disabled

244. Setting Different Timers Based On The Selected Answer
-u komponenti Question.jsx kreiramo varijablu let timer = 10000
-dodajemo uslov if (answer.selectedAnswer)
-u uslov if dodajemo varijablu timer = 1000
-dodajemo uslov if (answer.isCorrect !== null)
-u uslov if dodajemo varijablu timer = 2000
-u komponenti QuestionTimer, funkciji QuestionTimer dodajemo parametar destruktuirani prop mode
-u return izjavi progress elementu dodajemo className
-u className proslijedujemo vrijednost varijable mode
-u komponenti Question.jsx, u return izjavi dodajemo komponenti QuestionTimer prop mode
-u prop mode proslijedujemo varijablu answerState
-u return izjavi komponenti QuestionTimer dodajemo prop key
-u prop key proslijedujemo varijablu timer
-u prop onTimeout dodajemo uslov ternarni operator

245. Outputting Quiz Results
-kreiramo komponentu Summary.jsx
-u komponenti Summary.jsx funkciji Summary dodajemo parametar destruktuirani prop userAnswers
-kreiramo div sa id-em summary-stats
-u div elemnt dodajemo p i span elemente
-kreiramo ol element
-u ol element dodajemo li, h3, p elemente
-u komponentu Quiz.jsx importujemo komponentu Summary.jsx
-u uslov if (quizIsComplete) dodajemo komponentu Summary
-komponenti Summary dodajemo prop userAnswers
-u prop userAnswers proslijedujemo varijablu userAnswers
-u komponentu Summary.jsx importujemo niz QUESTIONS
-u ol elementu dodajemo varijablu userAnswers
-varijabli userAnswers dodajemo metodu .map()
-metodi .map() dodajemo parametre answer i index
-u metodi .map() kreiramo varijablu let cssClass
-dodajemo uslov if - else if- else
-u uslov if  (answer === null) dodajemo varijabli cssClass vrijednost 'skipped'
-u return izjavi, p elementu dodajemo className
-u className proslijedujemo vrijednost varijable cssClass
-kreiramo varijablu const skippedAnswers
-kreiramo varijablu const correctAnswers
-kreiramo varijablu const skippedAnswersShare
-kreiramo varijablu const correctAnswersShare
-kreiramo varijablu const wrongAnswersShare
