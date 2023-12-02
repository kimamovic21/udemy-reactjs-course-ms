Section 6: Styling React Components (React Art Project)

104. Module Introduction & Starting Project

105. Splitting CSS Code Across Multiple Files
-kreiramo Header.css fajl
-u komponentu Header.jsx importujemo Header.css fajl

106. Styling React Apps with Vanilla CSS - Pros & Cons
-prednosti i nedostaci Vanilla CSS 

107. Vanilla CSS Styles Are NOT Scoped To Components

108. Styling React Apps with Inline Styles

109. Dynamic & Conditional Inline Styles

110. Dynamic & Conditional Styling with CSS Files & CSS Classes

111. Scoping CSS Rules with CSS Modules
-kreiranje CSS modules fajlova
-preimenujemo Header.css fajl u Header.module.css fajl
-importujemo Header.module.css fajl kao javascript objekt styles u komponentu u kojoj se koristi
-u renderovanom DOM-u klasa ima drugacije ime 

112. Introducing "Styled Components" (Third-party Package)
-otvorimo web stranicu https://styled-components.com/
-u terminalu instaliramo Styled Components paket
-u terminal ukucamo komando npm i styled-components
-u komponentu AuthInput.jsx importujemo javascript objekt { styled }
-https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
-dodajemo metodu styled.div``
-u styled.div`` dodajemo CSS 
-kreiramo varijablu const ControlContainer 
-u return izjavu dodajemo komponentu ControlContainer

113. Creating Flexible Components with Styled Components
-u komponenti AuthInputs.jsx kreiramo varijablu stilizirano komponentu const Label
-u return izjavu dodajemo komponentu Label
-kreiramo varijablu stilizirano komponentu const Input

114. Dynamic & Conditional Styling with Styled Components
-u return izjavi, komponenti Label dodajemo prop invalid
-u varijabli constLabel, u prop color dodajemo funkciju sa parametrom props (ili destruktuirani prop invalid)
-u varijabli Input, u prop background-color dodajemo funkciju sa parametrom props (ili destruktuirani prop invalid)
-u prop color dodajemo funkciju sa paremetrom destruktuiranim prop invalid
-u return izjavi, komponenti Label, dodajemo prop invalid
-u komponentama Label i Input, u prop invalid dodajemo $ - $invalid

115. Styled Components: Pseudo Selectors, Nested Rules & Media Queries
-u komponentu Header.jsx importujemo objekt styled
-kreiramo varijablu stiliziranu komponentu StyledHeader
-u komponentu StyledHeader dodajemo css kod za vise elemenata & img, & h1, & p, @media
-u komponenti AuthInputs.jsx kreiramo varijablu stiliziranu komponentu const Button
-u return izjavu dodajemo komponentu Button

116. Creating Reusable Components & Component Combinations
-mozemo kreirati Label.jsx, Input.jsx i Button.jsx komponente
-u komponentu AuthInput.jsx importujemo komponentu Button.jsx
-u komponenti Input.jsx kreiramo funkciju CustomInput
-funkciji CustomInput dodajemo parametre destruktuirane prop label i ...props
-u funkciju CustomInput dodajemo komponente Label i Input
-komponentama Label i Input dodajemo prop $invalid
-u komponentu AuthInput.jsx importujemo komponentu Input
-u return izjavi komponentama Input dodajemo prop label

117. Introducing TailWind CSS For React App Styling
-otvorimo web stranicu https://tailwindcss.com/docs/guides/vite
-instaliramo Tailwind pakete u terminalu
-kreiramo tailwind.config.js fajl
-instaliramo VS Code ekstenziju TailwindCSS Intellisense
-u komponenti Header.jsx HTML elementima dodajemo CSS klase

118. Adding & Using Tailwind CSS In A React Project
-u tailwind.config.js fajlu, u objekt extend dodajemo objekt fontFamily
-u objekt fontFamily dodajemo niz title
-u komponentu Header.jsx, HTML elementu h1 dodajemo klasu font-title

119. Tailwind: Media Queries & Pseudo Selectors
-u komponentu Header.jsx, HTML elementima dodajemo u klase Taildwind Mead Query sm:, md:, lg, 
-u komponenti Button, funkciji Button dodajemo parametre destruktuirane prop children i ...props

120. Dynamic & Conditional Styling with Tailwind
-u komponenti Input.jsx kreiramo varijablu let labalClasses
-dodajemo uslov if (invalid) else

121. Migrating The Demo App to Tailwind CSS
-u komponenti AuthInputs.jsx HTML elementima dodajemo Tailwind CSS klase

122. Tailwind CSS: Pros & Cons
