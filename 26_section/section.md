Section 26: Animating React Apps

562. Module Introduction
-preuzmemo pocetne foldere i fajlove
-instaliramo Vite ReactJS projekt u terminalu sa komandom npm i

563. Project Setup & Overview

564. Animating with CSS Transitions
-u komponenti ChallengeItem.jsx, div elementu sa klasom challenge-item-details dodajemo dinamicku vrijednost css klase
-u index.css fajlu, klasi challenge-item-details-icon dodajemo CSS property transition
-u property transition dodajemo vrijednost transform 0.3s ease-out

565. Animating with CSS Animations
-u index.css fajlu dodajemo @keyframes slide-up-fade-in
-u @keyframes dodajemo 0% {...}, 100% {...}
-u 0% {...} i 100% {...} dodajemo css property transform, opacity
-klasei .modal dodajemo css property animation
-u css property animation dodajemo animaciju slide-up-fade-in

566. Introducing Framer Motion
-otvorimo web stranicu https://www.framer.com/motion/
-instaliramo paket Framer Motion
-u terminalu ukucamo komandu npm i framer-motion

567. Framer Motion Basics & Fundamentals
-u komponentu App.jsx importujemo varijablu motion iz paketa Framer Motion
-kreiramo state varijable x, y , rotate
-u return izjavu dodajemo element motion.div sa klasom box
-elementu motion.div dodajemo prop animate
-dodajemo prop transition
-u prop transition dodajemo prop duration, bounce, type

568. Animating Between Conditional Values
-u komponentu ChallengeItem.jsx importujemo varijablu motion iz Framer Motion paketa
-u return izjavi, u button element dodajemo element motion.span
-u motion.span element dodajemo prop animate
-u prop animate dodajemo prop rotate
-u prop rotate dodajemo ternarni uslov isExpanded ? ... : ...

569. Adding Entry Animations
-u komponentu Modal.jsx importujemo varijablu motion
-u return izjavu dodajemo element motion.dialog
-elementu motion.dialog dodajemo prop initial, animate, open, className
-u prop initial dodajemo prop opacity
-u prop animate dodajemo prop opacity

570. Animating Element Disappearances/Removal
-u komponentu Header.jsx importujemo komponentu AnimatePresence iz Framer Motion paketa
-u return izjavu dodajemo komponentu AnimatePresence sa otvorenim i zatvorenim tagom

571. Making Elements "Pop" With Hover Animations
-u komponentu Header.jsx importujemo varijablu motion iz Framer Motion paketa
-u return izjavu, u header element dodajemo motion.button element
-elementu motion.button dodajemo prop whileHover, transition, onClick, className
-u prop whileHover dodajemo prop scale
-u prop transition dodajemo prop type, stiffness, mass

572. Reusing Animation States
-u komponenti Modal.jsx, kreiramo varijablu const hiddenAnimationState
-u return izjavi, elementu motion.dialog dodajemo prop exit
-u prop exit proslijedujemo varijablu hiddenAnimationState
-elementu motion.dialog dodajemo prop variants
-u prop variants dodajemo objekt
-u objekt dodajemo prop hidden, visible

573. Nested Animations & Variants
-u komponentu NewChallenge.jsx importujemo varijablu motion 
-u return izjavi, umjesto elementa li dodajemo element motion.li
-elementu motion.li dodajemo prop variants
-u prop variants dodajemo objekt
-u objekt dodajemo prop hidden, visible
-u prop hidden dodajemo prop opacity, scale
-u prop visible dodajemo prop opacity, scale
-elementu motion.li dodajemo prop transition
-u prop transition dodajemo objekt 
-u objekt dodajemo prop types
-elementu motion.li dodajemo prop exit

574. Animating Staggered Lists
-u komponenti NewChallenge.jsx, u return izjavi, umjesto elementa ul dodajemo element motion.ul
-elementu motion.ul dodajemo prop variants
-u prop variants dodajemo objekt
-u objekt dodajemo prop visible
-u prop visible dodajemo prop transition
-u prop transition dodajemo prop staggerChildren

575. Animating Colors & Working with Keyframes
-u komponenti Header.jsx, u prop whileHover dodajemo prop backgroundColor
-u komponenti NewChallenge.jsx, u prop visible dodajemo prop scale

576. Imperative Animations
-u komponentu NewChallenge.jsx importujemo React Hook useAnimate
-kreiramo funkciju useAnimate()
-vrijednost funkcije useAnimate() pohranjujemo u varijable const [scope, animate]
-dodajemo uslov if da provjerimo da li input polja sadrze pogresne vrijednosti
-u uslov if dodajemo funkciju animate('input, textarea', { ... })
-u objekt dodajemo prop x, type, duration, delay
-importujemo funkciju stagger iz Framer Motion paketa
-u prop delay dodajemo funkciju stagger()

577. Animating Layout Changes
-u komponenti ChallemgeIte.jsx u return izjavi izmjenjujemo element li sa motion.li
-elementu motion.li dodajemo prop layout

578. Orchestrating Multi-Element Animations
-u komponentu Challenges. importujemo komponentu AnimatePresence
-u element ol dodajemo komponentu AnimatePresence sa otvorenim i zatvorenim tagom
-elementu motion.li dodajemo prop exit
-u prop exit dodajemo objet
-u objekt dodajemo prop y, opacity
-importujemo varijablu motion
-umjesto elementa ol dodajemo element motion.ol
-elementu motion.li dodajemo prop exit, key
-komponenti AnimatePresence dodajemo prop mode
-umjesto elementa p dodajemo element motion.p
-elementu motion.p dodajemo prop key, initial, animate, exit

579. Combining Animations With Layout Animations
-u komponenti ChallengeItem.jsx, u uslovu {isExpanded && (...)} dodajemo umjesto elementa div element motion.div
-elementu motion.div dodajemo prop initial, animate
-u prop initial i animate dodajemo prop height i opacity
-importujemo komponentu AnimatePresence iz Framer Motion paketa
-uslov {isExpanded && (...)} dodajemo u komponentu AnimatePresence sa otvorenim i zatvorenim tagom

580. Animating Shared Elements
-u komponentu ChallengeTabs importujemo varijablu motion
-u uslovu {isSelected && (...)} umjesto elementa div dodajemo element motion.div
-elementu motion.div dodajemo prop layoutId

581. Re-triggering Animations via Keys
-u komponentu Badge.jsx importujemo varijablu motion
-u return izjavi, umjesto elementa span dodajemo element motion.span
-elementu motion.span dodajemo prop animate
-u prop animate dodajemo objekt 
-u objekt dodajemo prop scale
-u prop transition dodajemo prop duration
-u komponenti ChallengeTabs.jsx, komponenti Badge dodajemo prop key i caption 
-u prop key i cation proslijedujemo vrijednost varijable badgeCaption

582. Scroll-based Animations
-u komponentu Welcome.jsx importujemo varijablu motion
-u return izjavi umjesto div i img elemenata dodajemo motion.div i motion.img elemente
-importujemo React Hook useScroll, useTransform
-kreiramo funkciju useScroll()
-vrijednost funkcije useScroll() pohranjujemo u varijablu const { scrollY }
-elementu motion.img dodajemo prop animate
-u prop animate dodajemo objekt
-u objekt dodajemo prop opacity
-kreiramo funkciju useTransform(scrollY, [0, 200, 300, 500], [1, 0.5, 0.5, 0])
-vrijednost funkcije useTransform() pohranjujemo u varijablu const opacityCity
-elementu motion.img dodajemo prop style
-u prop style dodajemo objekt
-u objekt dodajemo prop opacity: opacityCity
-kreiramo varijablu const yCity
-u prop style objekt, dodajemo prop y: yCity
-kreiramo varijable const yHero i const opacityHero
-kreiramo varijable constyText i const scaleText
-elementu motion.div dodajemo prop style
-u prop style dodajemo objekt
-u objekt dodajemo prop scale
