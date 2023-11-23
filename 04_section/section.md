Section 4: React Essentials - Deep Dive

59. Module Introduction

60. You Don't Have to Use JSX!

61. Working with Fragments
-kopiramo pocetne fajlove iz proslog foldera 
-u komponentu App.jsx dodajemo prazni fragment <> </>

Coding Exercise 13: Using Fragments

62. When Should You Split Components ?

63. Splitting Components By Feature & State
-u folderu components kreiramo komponente CoreConcepts.jsx i Examples.jsx
-u komponentu App.jsx importujemo komponente CoreConcepts.jsx i Examples.jsx

64. Problem: Props Are Not Forwarded To Inner Elements
-kreiramo komponentu Section.jsx
-u komponenti Section.jsx, funkciji Section dodajemo parametre destruktuirane props
-u komponentu Examples.jsx importujemo komponentu Section.jsx

65. Forwarding Props to Wrapped Elements
-u komponenti Section.jsx, funkciji Section dodajemo parametar destruktuirani prop ...props
-u return izjavi, section elementu dodajemo {...props}
-u komponenti TabButton uradimo isto

Coding Exercise 14: Forwarding Props

66. Working with Multiple JSX Slots
-kreiramo komponentu Tabs.jsx
-u komponenti Tabs.jsx, funkciji Tabs dodajemo parametra destruktuirane prop children i buttons
-u komponentu Examples, u return izjavi komponenti Tabs dodajemo prop button

67. Setting Component Types Dynamically
-u komponenti Tabs.jsx kreiramo varijablu const ButtonsContainer
-funkciji Tabs dodajemo parametar destruktuirani prop buttonsContainer

68. Setting Default Prop Values
-u komponenti Tabs, parametru ButtonContainer dodajemo vrijednost menu

Coding exercise 15: Creating Flexible Components

69. Onwards To The Next Project & Advanced Concepts
