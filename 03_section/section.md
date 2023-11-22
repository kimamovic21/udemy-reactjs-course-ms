Section 3: React Essentials - Components, JSX, Props, State & More

34. Module Introduction

35. It's all about Components! [Core Concept]

36. Setting Up the Startin Project
-instaliramo projekt u terminalu sa komandom npm i
-dodamo eslint u projekt https://www.robinwieruch.de/vite-eslint/

37. JSX & React Components [Core Concept]

38. Creating & Using a First Custom Components
-u App.jsx komponenti kreiramo Header komponentu

39. A Closer Look: Components & File Extensions

Coding Exercise 3: Building & Using a Component

40. How React Handles Components & How It Builds A "Component Tree" [Core Concept]

Quiz 1: Components & JSX

41. Using & Outputting Dynamic Values [Core Concept]
-kreiramo varijablu const reactDescriptions
-kreiramo funkciju generateRandomInteger()
-u p element dodajemo {reactDescriptions[generateRandomInteger(2)]}
-kreiramo varijablu const description

42. Setting HTML Attributes Dynamically & Loading Image Files
-importujemo sliku ReactCoreConceptsImage
-u img elementu, u src atribut proslijedujemo ReactCoreConceptsImage

Coding Exercise 4: Outputting Dynamic Content

43. Making Components Reusable with Props [Core Concept]
-u komponenti App.jsx kreiramo komponentu CoreConcept
-u return izjavu dodajemo vise CoreConcept komponenti
-komponentama CoreConcept dodajemo atribut title, description
-funkciji CoreConcept dodajemo parametar props

44. Alternative Props Syntaxes
-kreiramo data.js fajl
-u komponentu App.jsx importujemo CORE_CONCEPTS
-u funkciji CoreConcept destruktuiramo prop { ... }

45. More Prop Syntaxes

Coding Exercise 5: Working with Props

Quiz 2: Dynamic Values & Props

46. Best Practice: Storing Components in Files & Using a Good Project Structure
-kreiramo folder components
-u folderu components kreiramo komponentu Header.jsx
-eksportujemo komponentu Header.jsx kad default
-kreiramo i eksportujemo komponentu CoreConcept.jsx

47. Storing Component Style Files Next To Components
-kreiramo Header.css fajl
-u komponentu Header.jsx importujemo Header.css fajl

48. Component Composition: The special "children" Prop [Core Concept]
-u komponenti App.jsx kreiramo section element
-kreiramo komponentu TabButton
-u komponenti TabButton.jsx, funkciji TabButton dodajemo parametar destruktuirani prop children
-u komponentu App.jsx importujemo komponentu TabButton.jsx

Coding Exercise 6: Component Composition

49. Reacting to Events [Core Concept]
-u komponenti TabButton.jsx, button elementu dodajemo prop onClick
-kreiramo funkciju handleClick 
-u prop onClick proslijedujemo funkciju handleClick

50. Passing Functions as Values to Props
-u komponenti TabButton.jsx, funkciji TabButton dodajemo parametar destruktuirani prop onSelect
-u komponenti App.jsx kreiramo funkciju handleSelect()
-komponentama TabButton dodajemo prop onSelect

Coding Exercise 7: Reacting to Events

51. Passing Custom Arguments to Event Functions
-u komponenti App.jsx, funkciji handleSelect() dodajemo parametar selectedButton
-u return izjavi, u props onSelect dodajemo anonime funkcije

Coding Exercise 8: Configuring Event Handlers

Quiz 3: Best Practices & Event Handling

52. How NOT to Update the UI - A Look Behind The Scenes of React [Core Concept]
-u komponenti App.jsx kreiramo varijablu let tabContent 

53. Managing State & Using Hooks [Core Concept]
-kreiramo const [ selectedTopic, setSelectedTopic ] = useState
-u funkciju handleSelect() dodajemo setSelectedTopic(selectedButton)
-u return izjavu dodajemo varijablu selectedTopic

Coding Exercise 9: Working with State

54. Deriving & Outputting Data Based on State
-kreiramo div element
-u div elementu kreiramo element h3, p, pre, code
-u h3 element dodajemo {EXAMPLES[selectedTopic].title}
-u p element dodajemo {EXAMPLES[selectedTopic].description}
-u code element dodajemo {EXAMPLES[selectedTopic].code}

Quiz 4: State & Computed Values

55. Rendering Content Conditionally
-u komponentu App.jsx dodajemo uslov !selectedTopic i selectedTopic
-dodajemo uslov if (selectedTopic)

Coding Exercise 10: Conditional Content

56. CSS Styling & Dynamic Styling
-u komponenti TabButton, funkciji TabButton dodajemo destruktuirani prop isSelected
-button elementu dodajemo className
-u className dodajemo ternarni uslov isSelected ?
-u komponenti App.jsx, u komponentama TabButton dodajemo prop isSelected

Coding Exercise 11: Dynamic Styling

57. Outputting List Data Dynamically
-u komponenti App.jsx, u element ul dodajemo metodu CORE_CONCEPTS.map()
-u metodu .map() dodajemo komponentu CoreConcept
-u metodi .map(), komponenti CoreConcept dodajemo prop key

Coding Exercise 12: Dynamic List Content

Quiz 5: Conditional Content & Dynamic Lists

58. Module Summary
