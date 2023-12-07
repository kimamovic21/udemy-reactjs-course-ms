Section 9: Practice Project: Project Management App (with Components, State, Refs & More)
 
166. Module Introduction & Starting Project
-instaliramo projekt u terminalu sa npm i

167. Adding a "Projects Sidebar" Component
-kreiramo komponentu ProjectsSidebar.jsx
-u komponenti ProjectsSidebar.jsx kreiramo HTML elemente
-u komponentu App.jsx importujemo komponentu ProjectsSidebar.jsx

168. Styling the Sidebar & Button with Tailwind CSS
-u komponenti App.jsx stiliziramo main element sa Tailwind CSS klasama
-u komponenti ProjectsSidebar.jsx HTML elementima dodajemo Tailwind CSS klase

169. Adding the "New Project" Component & A Reusable "Input" Component
-kreiramo komponentu NewProject.jsx
-kreiramo HTML elemente
-kreiramo komponentu Input.jsx
-funkciji Input dodajemo parametre destruktuirane prop label, textarea, ...props
-u return izjavu dodajemo uslov {textarea ? ... : ...}
-u komponentu NewProject.jsx importujemo komponentu Input.jsx
-u return izjavu komponentama Input dodajemo prop label, textarea
-u komponentu App.jsx importujemo komponentu NewProject.jsx

170. Styling Buttons & Inputs with Tailwind CSS
-u komponenti NewProject.jsx HTML elementima dodajemo Tailwind CSS klase
-u komponenti Input.jsx HTML elementima dodajemo Tailwind CSS klase
-kreiramo varijablu const classes koja sadrzi Tailwind CSS klase
-u className proslijedujemo varijablu classes

171. Splitting Components to Split JSX & Tailwind Styles (for Higher Reusability)
-kreiramo komponentu NoProjectSelected.jsx
-importujemo sliku noProjectImage
-u src atribut proslijedujemo noProjectImage
-HTML elementima dodajemo Tailwind CSS klase
-kreiramo komponentu Button.jsx
-funkciji Button dodajemo prop children, ...props
-u return izjavi button elementu dodajemo {...props}
-u komponentu ProjectsSidebar.jsx importujemo komponentu Button.jsx
-u komponentu App.jsx importujemo komponentu NoProjectSelected.jsx

172. Managing State to Switch Between Components
-u komponentu App.jsx importujemo React Hook useState
-kreiramo state varijablu const [projectState, setProjectsState] = useState({...})
-u funkciju useState() dodajemo currentAction, selectedProjectId, projects
-kreiramo funkciju handleStartAddProject()
-u funkciju handleStartAddProject() dodajemo funkciju setProjectsState()
-u funkciji setProjectsState() kreiramo anonimnu funkciju sa parametrom prevState
-u toj funkciji selectedProjectId dodijelimo vrijednost null
-u return izjavi komponenti NoProjectSelected dodajemo prop onStartAddProject
-u prop onStartAddProject proslijedujemo funkciji handleStartAddProject
-komponenti ProjectsSidebar dodajemo isti prop onStartAddProject
-u komponenti ProjectsSidebar.jsx, funkciji ProjectsSidebar dodajemo parametar destruktuirani prop onStartAddProject
-u return izjavi komponenti Button dodajemo prop onClick
-u prop onClick proslijedujemo prop onStartAddProject
-u komponenti NoProjectSelected.jsx, funkciji NoProjectSelected dodajemo parametar destruktuirani prop onStartAddProject
-u return izjavi komponenti Button dodajemo prop onClick
-u prop onClick proslijedujemo prop onStartAddProject
-u komponenti App.jsx kreiramo varijablu let content
-dodajemo uslov if (projectState.selectedProjectId === null)
-u uslov if dodajemo varijablu content
-dodajemo uslov else if (projectState.selectedProjectId === undefined)
-u uslov else if dodajemo varijablu content 
-u return izjavu dodajemo varijablu content

173. Collecting User Input with Refs & Forwarded Refs
-u komponentu NewProject.jsx importujemo React Hook useRef
-kreiramo varijable title, description, dueDate
-u return izjavi komponentama Input dodajemo prop ref
-u komponentu Input.jsx importujemo funkciju forwardRef
-kreiramo funkciju forwardRef()
-vrijednost funkcije forwardRef() pohranjujemo u varijablu const Input
-funkciji Input dodajemo parametar ref
-u return izjavi HTML elementima textarea i input dodajemo prop ref
-u komponenti NewProject.jsx kreiramo funkciju handleSave
-button elemenu dodajemo dogadaj onClick
-u dogadaj onClick proslijedujemo funkciju handleSave
-u funkciji handleSave() kreiramo varijable enteredTitle, enteredDescription, enteredDueDate
-u komponenti App.jsx kreiramo funkciju handleAddProject() sa parametrom projectData
-u funkciju handleAddProject() dodajemo funkciju setProjectsState()
-u funkciju setProjectsState() dodajemo anonimnu funkciju sa parametrom prevState
-u funkciji setProjectsState() kreiramo varijablu objekt const newProject
-u objekt newProject dodajemo vrijednost id
-azuriramo niz projects
-u komponenti NewProject.jsx, funkciji NewProject dodajemo parametar destruktuirani prop onAdd
-u funkciju handleSave() dodajemo prop onAdd
-u komponenti App.jsx, u uslov if, komponenti NewProject dodajemo prop onAdd
-u komponenti NewProject.jsx, u return izjavi komponenti Input dodajemo prop type="data"

174. Handling Project Creation & Updating the UI
-u komponenti App.jsx, u funkciji setProjectsState(), u return izjavi dodajemo selectedProjectId: undefined
-u return izjavi komponenti ProjectsSidebar dodajemo prop projects
-u prop projects proslijedujemo projectState.projects
-u komponenti ProjectsSidebar.jsx, funkciji ProjectsSidebar dodajemo parametar destruktuirani prop projects
-u ul element dodajemo varijablu projects
-varijabli projects dodajemo metodu .map()
-u metodi .map() kreiramo HTML elemente
-HTML elementima dodajemo Tailwind CSS klase

175. Validating User Input & Showing an Error Modal via userImperativeHandler
-u komponenti NewProject.jsx dodajemo uslov if za validaciju input polja 
-kreiramo komponentu Modal.jsx
-u komponenti Modal.jsx, funkciji Modal dodajemo parametar destruktuirani prop children
-importujemo funkciju createPortal iz react-dom
-u return izjavu dodajemo funkciju createPortal() sa dva argumenta
-prvi argument je jsx kod, a drugi element HTML element u index.html fajl
-u index.html fajlu kreiramo div element sa id-em modal-root
-u komponentu Modal.jsx importujemo funkcije forwardRef i userImperativeHandler
-kreiramo funkciju forwardRef()
-vrijednost funkcije forwardRef() pohranjujemo u varijablu const Modal
-funkciji Modal dodajemo parametar ref
-kreiramo funkciju userImperativeHandler() sa dva argumenta
-prvi argument je ref, a drugi anonimna funkcija unutar koje je objekt i funkcija open()
-importujemo React Hook useRef
-kreiramo funkciju useRef()
-vrijednost funkcije useRef() pohranjujemo u varijablu const dialog
-u return izjavi HTML elementu dialog dodajemo prop ref
-u prop ref proslijedujemo varijablu dialog
-u funkciju open() dodajemo varijablu dialog.current.showModal()
-u komponentu NewProject.jsx importujemo komponentu Modal.jsx
-kreiramo funkciju useRef()
-vrijednost funkcije useRef() pohranjujemo u varijablu const modal
-u return izjavi komponenti Modal dodajemo prop ref
-u prop ref proslijedujemo varijablu modal
-u if uslov dodajemo modal.current.open() i return 
-u komponentu Modal dodajemo h2 i dva p elementa
-u komponenti Modal.jsx, u return izjavi, u dialog element dodajemo form element
-form elementu dodajemo atribut dialog
-u form element dodajemo button Close element
-funkciji Modal dodajemo parametar buttonCaption
-u button element dodajemo varijablu buttonCaption
-u komponenti NewProject.jsx, u return izjavi komponenti Modal dodajemo prop buttonCaption

176. Styling theModal via Tailwind CSS
-u komponenti Modal.jsx, dialog elementu dodajemo className
-u className dodajemo vrijednost backdrop
-u komponentu Modal.jsx importujemo komponentu Modal.jsx
-u return izjavi, u Button komponentu dodajemo varijablu buttonCaption
-u komponenti App.jsx kreiramo funkciju handleCancelAddProject()
-u funkciju handleCancelAddProject() dodajemo funkciju setProjectsState
-u funkciju setProjectsState dodajemo anonimnu funkciju sa parametrom prevState
-u anonimnu funkciju u return izjavu dodajemo selectedProjectId: undefined
-u uslov if, komponenti NewProject dodajemo prop onCancel
-u prop onCancel proslijedujemo funkciju handleCancelAddProject
-u komponenti NewProject.jsx, funkciji NewProject dodajemo parametar destruktuirani prop onCancel
-u return izjavi button elementu dodajemo dogadaj onClick
-u dogadaj onClick proslijedujemo prop onCancel

177. Making Projects Selectable & Viewing Project Details
-kreiramo komponentu SelectedProject.jsx
-u komponenti SelectedProject.jsx, funkciji SelectedProject dodajemo parametar destruktuirani prop project
-kreiramo varijablu const formattedDate
-u return izjavi HTML elementima dodajemo className
-u komponenti App.jsx kreiramo funkciju handleSelectProject() sa parametrom id
-u funkciju handleSelectProject(id) dodajemo funkciju setProjectsState
-u funkciju setProjectsState dodajemo anonimnu funkciju sa parametrom prevState
-u anonimnu funkciju, u return izjavu dodajemo selectedProjectId: id
-u komponenti App.jsx, u return izjavi komponenti ProjectsSidebar dodajemo prop onSelectProject
-u prop onSelectProject proslijedujemo funkciju handleSelectProject
-u komponenti ProjectsSidebar, funkciji ProjectsSidebar dodajemo parametre destruktuirane prop onSelectProject, selectedProjectId
-u return izjavi button elementu dodajemo dogadaj onClick
-u onClick dogadaj proslijedujemo prop onSelectProject
-u komponenti ProjectsSidebar.jsx, u metodi .map() kreiramo varijablu let cssClasses
-dodajemo uslov if i else
-dodajemo uslov if (project.id === selectedProjectId)
-u uslov if dodajemo varijablu cssClasses + nove klase
-u uslov else dodajemo varijablu cssClasses + nove klase
-u return izjavi button elementu dodajemo className 
-u className proslijedujemo vrijednost varijable cssClasses
-u komponentu App.jsx importujemo komponentu SelectedProject.jsx
-kreiramo varijablu const selectedProject
-u varijabli content, komponenti SelectedProject dodajemo prop project
-u prop project proslijedujemo vrijednost varijable selectedProject
-u komponenti ProjectsSidebar.jsx, button elementu u dogadaj onClick proslijedujemo anonimnu funkciju () => onSelectProject(project.id)

178. Handling Project Deletion
-u komponenti App.jsx kreiramo funkciju handleDeleteProject()
-u funkciji handleDeleteProject() dodajemo funkciju setProjectsState()
-u funkciju setProjectsState() dodajemo anonimnu funkciju sa parametrom prevState
-u anonimnu funkciju vrijednost dodajemo vrijednost selectedProjectId: undefined
-dodajemo vrijednost projects: prevState.projects.filter()
-u metodu .filter() dodajemo anonimnu funkciju sa parametrom project
-u varijabli let content, komponenti SelectedProject dodajemo prop onDelete
-u prop onDelete proslijedujemo funkciju handleDeleteProject
-u komponenti SelectedProject.jsx, funkciji SelectedProject dodajemo parametar destruktuirani prop onDelete
-u return izjavi, button elementu Delete dodajemo dogadaj onClick
-u dogadaj onClick proslijedujemo prop onDelete

179. Adding "Project Tasks" & A Tasks Component
-kreiramo komponentu Tasks.jsx
-u komponenti Tasks.jsx kreiramo section roditelj element
-kreiramo HTML elemente i dodajemo im Tailwind CSS klase
-u komponentu SelectedProject.jsx importujemo komponentu Tasks.jsx
-kreiramo komponentu NewTask.jsx
-u komponenti NewTask.jsx kreiramo HTML elemente i dodajemo im Tailwind CSS klase
-u komponentu Tasks.jsx importujemo komponentu NewTask.jsx

180. Managing Tasks & Understanding Prop Drilling
-u komponentu NewTask.jsx importujemo React Hook useState()
-kreiramo state varijablu const [enteredTask, setEnteredTask] = useState()
-kreiramo funkciju handleChange() sa parametrom event
-u return izjavi input elementu dodajemo dogadaj onChange
-u dogadaj onChange proslijedujemo funkciju handleChange
-u funkciju handleChange() dodajemo funkciju setEnteredTask()
-input elementu dodajemo atribut value
-u atribut value proslijedujemo varijablu enteredTask
-u komponenti App.jsx u funkciju useState() dodajemo vrijednost tasks: []
-kreiramo funkciju handleAddTask()
-kreiramo funkciju handleDeleteTask()
-u komponenti NewTask.jsx kreiramo funkciju handleClick()
-u return izjavi button Add Task elementu dodajemo dogadaj onClick
-u dogadaj onClick proslijedujemo funkciju handleClick
-u funkciju handleClick() dodajemo funkciju setEnteredTask()
-u komponenti App.jsx, komponenti SelectedProject dodajemo prop onAddTask i onDeleteTask
-u prop onAddTask proslijedujemo funkciju handleAddTask
-u prop onDeleteTask proslijedujemo funkciju handleDeleteTask
-u komponenti SelectedProject, funkciji SelectedProject dodajemo parametre destruktuirane prop onAddTask i onDeleteTask
-u return izjavi komponenti Tasks dodajemo prop onAdd i onDelete
-u prop onAdd proslijedujemo prop onAddTask 
-u prop onDelete proslijedujemo prop onDeleteTask
-u komponenti Tasks.jsx, funkciji Tasks dodajemo parametre destruktuirane prop onAdd, onDelete
-u return izjavi komponenti NewTask dodajemo prop onAdd
-u prop onAdd proslijedujemo prop onAdd
-u komponenti NewTask.jsx, funkciji NewTask dodajemo parametar destruktuirani prop onAdd
-u funkciji handleClick() dodajemo funkciju onAdd(enteredTask)
-u komponenti App.jsx funkciji handleAddTask dodajemo parametar text
-u funkciju handleAddTask dodajemo funkciju setProjectsState()
-u funkciji setProjectsState() kreiramo anonimnu funkciju sa parametrom prevState
-u anonimnoj funkciji kreiramo varijablu const taskId
-kreiramo objekt newTask
-u return izjavu dodajemo ...prevState, tasks
-u komponenti Tasks, funkciji Tasks dodajemo parametar destruktuirani prop tasks
-u return izjavu dodajemo uslov {tasks.length === 0 && ...}
-dodajemo uslov {tasks.length > 0 && <ul>...</ul>}
-u ul elementu varijabli tasks dodajemo metodu .map()
-u li element dodajemo span i button elemente
-u komponenti App.jsx, komponenti SelectedProject dodajemo prop tasks
-u prop tasks proslijedujemo projectState.tasks
-u komponenti SelectedProject.jsx, funkciji SelectedProject dodajemo parametar destruktuirani prop tasks
-u return izjavi komponenti Tasks dodajemo prop tasks
-u prop tasks proslijedujemo prop tasks

181. Clearing Tasks & Fixing Minor Bugs
-u komponenti App.jsx, funkciji handleDeleteTask() dodajemo parametar id
-u funkciju handleDeleteTask() dodajemo funkciju setProjectsState()
-u funkciji setProjectsState() kreiramo anonimnu funkciju sa parametrom prevState
-u anonimnu funkciju, u return izjavu dodajemo ...prevState, tasks
-u komponenti Tasks, u return izjavi button Clear elementu dodajemo dogadaj onClick
-u dogadaj onClick proslijedujemo anonimnu funkciju () => onDelete(task.id)
-u komponenti NewTask.jsx, u funkciju handleClick() dodajemo uslov if (enteredTask.trim() === '')
-u komponenti App.jsx, u return izjavi komponenti ProjectsSidebar dodajemo prop selectedProjectId
-u prop selectedProjectId proslijedujemo projectState.selectedProjectId
-u komponenti App.jsx kreairamo varijablu const selectedProjectTask
-u return izjavi, u komponenti SelectedProject, u prop tasks proslijedujemo varijablu selectedProjectTask
