Section 28: React Patterns & Best Practices

01. Module Introduction

02. Project Overview

03. Introducing Compound Components
-kreiramo folder components
-u folderu components kreiramo folder Accordion
-u folderu Accordion kreiramo komponentu Accordion.jsx
-funkciji Accordion dodajemo parametar destruktuirani prop children, className
-u return izjavu kreiramo ul element
-ul elementu dodajemo prop className
-u prop className proslijedujemo prop className
-u ul element dodajemo prop children
-u komponenti App.jsx, u return izjavi kreiramo HTML main element
-importujemo komponentu Accordion.jsx
-u main elementu kreiramo HTML section element
-u section elementu kreiramo HTML h2 element 
-u section element dodajemo komponentu Accordion sa otvarajucim i zatvarajucim tagom
-kreiramo komponentu AccordionItem.jsx
-funkciji AccordionItem dodajemo parametar destruktuirani prop className, title, children
-u return izjavi kreiramo HTML li element
-u li elementu kreiramo HTMLL elemente h3 i div 
-u komponentu App.jsx, importujemo komponentu AccordionItem.jsx
-u return izjavi, u komponentu Accordion dodajemo komponentu AccordionItem sa otvarajucim i zatvarajucim tagom
-komponenti Accordion dodajemo prop className
-komponenti AccordionItem dodajemo prop title
-u komponenti AccordionItem kreiramo HTML element article
-u HTML elementu article kreiramo HTML p elemente
-kreiramo jos jednu komponentu AccordionItem 
-komponentama AccordionItem dodajemo prop className

04. Managing Multi-Component State with the Context API
-u komponentu Accordion.jsx importujemo React Hook createContext
-kreiramo funkciju createContext()
-vrijednost funkcije createContext() pohranjujemo u varijablu const AccordionContext
-u return izjavu dodajemo komponentu AccordionContext.Provider sa otvarajucim i zatvarajucim tagom
-komponenti AccordionContext.Provider dodajemo prop value
-kreiramo varijablu objekt const contextValue
-u objektu contextValue kreiramo prop openItemId
-kreiramo funkcije openItem() i closeItem()
-importujemo React Hook useState
-kreiramo state varijablu const [openItemId, setOpenItemId] = useState()
-u funkcije openItem() i closeItem() dodajemo funkciju setOpenItemId
-u objekt contextValue dodajemo property openItem i closeItem
-u prop value proslijedujemo varijablu contextValue
-kreiramo i eksportujemo Custom React Hook funkciju useAccordionContext()
-importujemo React Hook useContext
-u funkciji useAccordionContext kreiramo funkciju useContext(AccordionContext)
-vrijednost funkcije useContext(AccordionContext) pohranjujemo u varijablu const ctx
-dodajemo uslov if (!ctx)
-u uslov if (!ctx) dodajemo objekt Error
-dodajemo return ctx
-u komponentu AccordionItem.jsx importujemo funkciju useAccordionContext
-kreiramo funkciju useAccordionContext()
-vrijednost funkcije useAccordionContext() pohranjujemo u tri varijable
-funkciji AccordionItem dodajemo parametar destruktuirani prop id
-kreiramo varijablu const isOpen
-u div element dodajemo prop children
-div elementu dodajemo prop className
-u prop className dodajemo ternarni uslov za dinamicko pokazivanje varijable isOpen
-kreiramo varijablu handleClick()
-h3 elementu dodajemo dogadaj onClick
-u dogadaj onClick proslijedujemo funkciju handleClick
-u funkciju handleClick() dodajemo uslove if - else
-u uslov if (isOpen) dodajemo funkciju closeItem()
-u uslov else dodajemo funkciju openItem()
-u komponenti App.jsx, komponentama AccordionItem dodajemo prop id

05. Grouping Compound Components
-u komponenti Accordion.jsx kreiramo funkciju toggleItem()
-u funkciju toggleItem() dodajemo funkciju setOpenItemId()
-u funkciju setOpenItemId() dodajemo anonimnu funkciju sa parametrom prevId
-u objekt contextValue dodajemo funkciju toggleItem
-u komponenti AccordionItem.jsx, u funkciju handleClick dodajemo funkciju toggleItem(id)
-vrijednost funkcije useAccordionContext() pohranjujemo u varijablu toggleItem
-u onClick dogadaj proslijedujemo funkciju toggleItem
-u komponenti Accordion.jsx dodajemo Accordion.Item = AccordionItem
-u komponentu App.jsx importujemo komponentu Accordion.jsx
-u return izjavu komponentu AccordionItem preimenujemo u Accordion.Item

06. Adding Extra Components For Reusability & Configurability
-u folderu Accordion kreiramo komponente AccordionTitle.jsx i AccordionContent.jsx 
-u komponentu AccordionTitle importujemo React Hook useAccordionContext
-kreiramo funkciju useAccordionContext()
-vrijednost funkcije useAccordionContext() pohranjujemo u varijablu const { toggleItem }
-funkciji AccordionTitle dodajemo parametre destruktuirane prop id, children
-u return izjavi kreiramo HTML element h3
-h3 elementu dodajemo dogadaj onClick
-u dogadaj onClick proslijedujemo funkciju toggleItem
-u komponenti AccordionContent.jsx, u return izjavi kreiramo HTML element div
-funkciji AccordionContent dodajemo parametar destruktuirani prop children
-kreiramo funkciju useAccordionContext()
-vrijednost funkcije useAccordionContext() pohranjujemo u varijablu const { openItemId }
-kreiramo varijablu const isOpen
-u komponenti AccordionTitle, funkciji AccordionTitle dodajemo parametar destruktuirani prop className
-u return izjavi, HTML elementu h3 dodajemo prop className
-u komponenti AccordionContent.jsx, funkciji AccordionContent dodajemo parametar destruktuirani prop className
-u komponentu Accordion.jsx importujemo komponente AccordionTitle.jsx i AccordionContent.jsx
-kreiramo Accordion.Title = AccordionTitle
-kreiramo Accordion.Content = AccordionContent
-u komponentu App.jsx, u return izjavu dodajemo komponentu Accordion.Title sa otvarajucim i zatvarajucim tagom
-u return izjavu dodajemo komponentu Accordion.Content sa otvarajucim i zatvarajucim tagom
-komponentama Accordion.Title i Accordion.Content dodajemo prop id
-u return izjavi kreiramo jos jednu komponentu Accordion.Title
-kreiramo jos jednu komponentu Accordion.Content

07. Sharing Cross-Component State When Working With Compound Components
-u komponentu AccordionItem.jsx importujemo React Hook createContext
-kreiramo funkciju createContext()
-vrijednost funkcije createContext() pohranjujemo u varijablu const AccordionItemContext
-u return izjavu dodajemo komponentu AccordionItemContext.Provider sa otvarajucim i zatvarajucim tagom
-komponenti AccordionContext.Provider dodajemo prop value
-u prop value proslijedujemo prop id
-kreiramo funkciju useAccordionItemContext()
-importujemo React Hook useContext
-u funkciju useAccordionItemContext() dodajemo funkciju useContext(AccordionItemContext)
-vrijednost funkcije useContext(AccordionItemContext) pohranjujemo u varijablu const ctx
-dodajemo uslov if (!ctx)
-u uslov if (!ctx) dodajemo objekt Error
-dodajemo return ctx
-u komponentu AccordionTitle.jsx importujemo funkciju useAccordionItemContext
-kreiramo funkciju useAccordionItemContext()
-vrijednost funkcije useAccordionItemContext() pohranjujemo u varijablu const id
-u komponentu AccordionContent.jsx importujemo funkciju useAccordionItemContext
-kreiramo funkciju useAccordionItemContext() 
-vrijednost funkcije useAccordionItemContext() pohranjujemo u varijablu const id

08. Introducing & Using Render Props
-u folderu components kreiramo folder SearchableList
-u folderu SearchableList kreiramo komponentu SearchableList.jsx
-funkciji SearchableList() dodajemo parametar destruktuirani prop items
-u return izjavi kreiramo HTML div element
-u div elementu kreiramo HTML elemente input i ul
-u ul element dodajemo varijabli items metodu .map()
-u komponentu App.jsx importujemo komponentu SearchableList.jsx
-u return izjavi, u section element dodajemo komponentu SearchableList
-komponenti SearchableList dodajemo prop items
-kreiramo varijablu const PLACES
-u prop items proslijedujemo varijablu PLACES
-u return izjavi kreiramo jos jednu komponentu SearchableList
-importujemo slike iz foldera assets

09. Adding Search To A React App
-u komponentu SearchableList.jsx importujemo React Hook useState
-kreiramo state varijablu const [searchTerm, setSearchTerm] = useState('')
-kreiramo funkciju handleChange() sa parametrom event
-u funkciju handleChange() dodajemo funkciju setSearchTerm(event.target.value)
-input elementu dodajemo dogadaj onChange
-u dogadaj onChange proslijedujemo funkciju handleChange
-kreiramo varijablu const searchResults
-u ul element dodajemo varijabli searchResults metodu .map()

10. Implementing a Search Functionality With Help of Render Props
-u komponenti SearchableList, funkciji SearchableList() dodajemo parametar destruktuirani prop children
-u return izjavu, u li element dodajemo children(item)
-kreiramo komponentu Place.jsx
-u komponenti App.jsx, u return izjavi, u komponentu SearchableList dodajemo anonimnu funkciju sa parametrom item
-u anonimnu funkciju dodajemo komponentu Place
-komponenti Place dodajemo prop item
-u prop item proslijedujemo prop item
-u drugu komponentu SearchableList dodajemo funkciju (item) => item

11. Handling Keys Dynamically
-u komponenti SearchableList, funkciji SearchableList() dodajemo parametar destruktuirani prop itemKeyFn
-u return izjavi, li elementu dodajemo prop key
-u prop key proslijedujemo funkciju itemKeyFn(item)
-u komponenti App.jsx, u return izjavi, komponenti SearchableList dodajemo prop itemKeyFn

12. Working with Debouncing
-u komponenti SearchableList.jsx, u funkciju handleChange() dodajemo funkciju setTimeout()
-funkciji setTimeout() dodajemo dva argumenta
-prvi argument je callback funkcija, a drugi argument je vremenski interval
-u anonimnu funkciju dodajemo funkciju setSearchTerm(event.target.value)
-importujemo React Hook useRef
-kreiramo funkciju useRef()
-vrijednost funkcije useRef() pohranjujemo u varijablu const lastChange
-vrijednost funkcije setTimeout() pohranjujemo u varijablu lastChange.current
-u funkciju handleChange() dodajemo uslov if (lastChange.current)
-u uslov if dodajemo funkciju clearTimeout(lastChange.current)
-u funkciju setTimeout(), u anonimnu funkciju dodajemo lastChange.current = null
