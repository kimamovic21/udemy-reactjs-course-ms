Section 21: Building a Multi-Page SPA with React Router - Part 1

442. Module Introduction

443. Routing: Multiple Pages in Single-Page Applications

444. Project Setup & Installing React Router
-instaliranje paketa React Router Dom u terminalu
-u terminal ukucamo komandu npm i react-router-dom

445. Defining Routes
-u komponentu App.jsx importujemo funkciju createBrowserRouter
-kreiramo funkciju createBrowserRouter([ ... ])
-vrijednost funkcije createBrowserRouter() pohranjujemo u varijablu const router
-u niz dodajemo objekte sa property path, element
-u property path dodajemo rutu
-u property element dodajemo jsx komponentu
-u src folderu kreiramo folder pages
-u folderu pages kreiramo komponentu Home.jsx
-importujemo RouterProvider komponentu
-u return izjavu dodajemo komponentu RouterProvider
-komponenti RouterProvider dodajemo prop router
-u prop router proslijedujemo vrijednost varijable router

446. Adding a Second Route
-u folderu pages kreiramo komponentu Products.jsx
-u komponenti App.jsx, u objekt dodajemo rutu products i u element dodajemo komponentu ProductPage 

447. Exploring an Alternative Way of Defining Routes

448. Navigation between Pages with Links
-u komponentu Home.jsx importujemo komponentu Link sa otvorenim i zatvorenim tagom

449. Layouts & Nested Routes
-kreiramo komponentu MainNavigation.jsx i MainNavigation-module.css fajl
-u komponentu MainNavigation.jsx importujemo komponentu Link
-u folderu pages kreiramo komponentu RootLayout.jsx
-u komponentu App.jsx importujemo komponentu RootLayout.jsx
-u funkciji createBrowserRouter() kreiramo objekt rutu u koju dodajemo property children
-u komponentu RootLayout.jsx importujemo komponentu Outlet iz react-router-dom paketa
-u return izjavu dodajemo komponentu Outlet

450. Showing Error Pages with errorElement
-u folderu pages kreiramo komponentu Error.jsx
-u komponentu App.jsx importujemo komponentu Error.jsx
-u komponenti App.jsx, u funkciji createBrowserRouter() kreiramo objekt i property errorElement

451. Working with Navigation Links (NavLink)
-u komponentu MainNavigation.jsx importujemo komponentu NavLink iz react-router-dom paketa
-u return izjavu dodajemo komponente NavLink sa otvorenim i zatvorenim tagom
-komponentama NavLink dodajemo prop to, className, end

452. Navigating Programmatically
-u komponentu Home.jsx importujemo funkciju useNavigate()
-kreiramo funkciju useNavigate()
-vrijednost funkcije useNavigate() pohranjujemo u varijablu const navigate
-kreiramo funkciju navigateHandler()
-u funkciju navigateHandler() dodajemo varijablu navigate()

453. Defining & Using Dynamic Routes
-u folderu pages kreiramo komponentu ProductDetail.jsx
-u komponentu App.jsx importujemo komponentu ProductDetail.jsx
-u return izjavu dodajemo objekt sa property path '/products/:productId'
-u komponentu ProductDetail.jsx importujemo funkciju useParams
-kreiramo funkciju useParams()
-vrijednost funkcije useParams() pohranjujemo u varijablu const params

454. Adding Links for Dynamic Routes
-u komponentu Products.jsx importujemo komponentu Link 
-u return izjavi kreiramo tri komponente Link sa otvorenim i zatvorenim tagom
-kreiramo niz const PRODUCTS
-u ul element dodajemo varijablu PRODUCTS
-varijabli PRODUCTS dodajemo metodu .map()

455. Understanding Relative & Absolute Paths

456. Working with Index Routes
