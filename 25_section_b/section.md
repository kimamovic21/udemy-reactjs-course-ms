Section 25: NextJS App Router Introduction

01. Module Introduction

02. Creating a NextJS Project
-u terminalu instaliramo Next.js projekt sa komandom npx create-next-app@latest
-pokrenemo projekt sa komandom npm run dev

03. Understanding File-based Routing & React Server Components

04. Adding Another Route via the Filesystem
-u folderu app, kreiramo folder about
-u folderu about kreiramo page.js fajl
-u page.js fajlu kreiramo i eksportujemo funkciju AboutPage()

05. Navigating Between Pages
-u app/page.js fajl importujemo komponentu Link
-u main elementu kreiramo komponentu Link sa otvorenim i zatvorenim tagom
-komponenti Link dodajemo prop href

06. Working with Pages & Layouts

07. Reserved File Names, Custom Components & How To Organize a NextJS Project
-u folderu app kreiramo header.js fajl
-u header.js fajlu kreiramo i eksportujemo funkciju Header()
-u app/page.js fajl importujemo komponentu Header
-kreiramo folder components
-u folder components dodajemo header.js fajl

08. Reserved Filenames

09. Configuring Dynamic Routes & Using Route Parameters
-u folderu app kreiramo folder blog
-u folderu blog kreiramo folder [slug]
-u folderu [slug] kreiramo page.js fajl
-u blog/page.js fajlu kreiramo i eksportujemo funkciju BlogPage()
-u folderu [slug] kreiramo page.js fajl
-u [slug]/page.js fajlu kreiramo i eksportujemo funkciju BlogPostPage()
-funkciji BlogPostPage() dodajemo parametar destruktuirani prop params

10. Onwards to the Main Project: The Foodies App

11. Exercise: Your Task

12. Exercise: Solution
-u folderu app kreiramo folder meals
-u folderu meals kreiramo page.js fajl
-u page.js fajlu kreiramo i eksportujemo funkciju MealsPage()
-u folderu meals kreiramo folder share
-u folderu share kreiramo page.js fajl
-u page.js fajlu kreiramo i eksportujemo funkciju ShareMealPage()
-u folderu app kreiramo folder commmunity
-u folderu commmunity kreiramo page.js fajl
-u page.js fajlu kreiramo i eksportujemo funkciju CommunityPage()
-u app/page.js fajlu kreiramo p element
-importujemo komponentu Link
-u p elementu kreiramo komponentu Link sa otvorenim i zatvorenim tagom
-komponenti Link dodajemo prop href
-kreiramo jos dva p elementa zajedno sa komponentama Link
-u folderu meals kreiramo folder [mealSlug]
-u folderu [mealSlug] kreiramo page.js fajl
-u page.js fajlu kreiramo i eksportujemo funkciju MealDetailsPage()

13. Revisiting The Concept of Layouts
-u layouts.js fajlu kreiramo i eksportujemo funkciju MealsLayout() sa parametrom destruktuirani prop children
-u return izjavu dodajemo prop children

14. Adding a Custom Component To A Layout
-kreiramo folder components
-u folderu components kreiramo main-header.js fajl
-u main-header.js fajlu kreiramo i eksportujemo funkciju MainHeader()
-u return izjavi kreiramo header element
-importujemo komponentu Link
-u return izjavi, u header element kreiramo komponentu Link sa otvorenim i zatvorenim tagom
-komponenti Link dodajemo prop href
-kreiramo folder assets sa slikama
-importujemo sliku logoImg
-u komponenti Link kreiramo img element sa atributima src i alt
-u atribut src proslijedujemo vrijednost varijable logoImg
-kreiramo element nav
-u nav elementu kreiramo ul element
-u ul elementu kreiramo li elemente
-u li elementima kreiramo komponente Link sa atributom href
-u layout.js fajl importujemo komponentu MainHeader

15. Styling NextJS Project: Your Options & Using CSS Modules
-otvorimo web stranicu https://tailwindcss.com/
-otvorimo link https://nextjs.org/docs/app/building-your-application/styling/css-modules
-u folderu components kreiramo main-header.css fajl
-u main.header.js fajl importujemo main-header.css fajl kao objekt classes
-u return izjavi HTML elementima dodajemo klase sa propom className

16. Optimizing Images with the NextJS Image Component
-otvorimo link https://nextjs.org/docs/pages/api-reference/components/image
-u main-header.js fajlu zamjenjujemo img element sa komponentom Image
-importujemo komponentu Image
-komponenti Image dodajemo prop priority

17. Using More Custom Components
-u folderu components kreiramo main-header-background.js fajl
-u main-header-background.js fajlu kreiramo i eksportujemo funkciju MainHeaderBackground()
-kreiramo css modul fajl za ovu komponentu
-u main-header.js fajl importujemo komponentu MainHeaderBackground

18. Populating The Starting Page Content
-kreiramo css modul fajl za page.js fajl
-u page.js fajl importujemo css modul
-u return izjavi HTML elementima dodajemo klase
-importujemo komponentu Link
-komponenti Link dodajemo prop href

19. Preparing an Image Slideshow
-kreiramo folder images
-u folderu images kreiramo image-slideshow.js fajl

20. React Server Components vs Client Components - When To Use What
-u image-slideshow.js fajl dodajemo 'use client'

21. Using Client Components Efficiently
-u main-header.js fajl importujemo React Hook usePathname
-kreiramo funkciju usePathname()
-vrijednost funkcije usePathname() pohranjujemo u varijablu const path
-u main-header.js fajl dodajemo 'use client'
-u folderu main-header kreiramo nav-link.js fajl
-u nav-link.js fajlu kreiramo i eksportujemo funkciju NavLink()
-funkciji NavLink() dodajemo parametar destruktuirani prop href, children
-dodajemo 'use client'
-importujemo React Hok usePathname
-kreiramo funkciju usePathname()
-vrijednost funkcije usePathname() pohranjujemo u varijablu const path
-u main-header.js fajl importujemo komponentu NavLink
-u return izjavi kreiramo komponentu NavLink sa otvorenim i zatvorenim tagom
-komponenti NavLink dodajemo prop href
-u nav-link.js fajl importujemo objekt classes
-u return izjavi komponenti Link dodajemo dinamicku klasu

22. Outputting Meals Data & Images With Unknown Dimensions
-u folderu meals/page.js fajlu kreiramo i eksportujemo funkciju MealsPage()
-kreiramo page.module.css fajl
-u page.js fajl importujemo objekt classes
-importujemo komponentu Link
-kreiramo folder meals
-u folderu meals kreiramo meals-grid.js fajl
-u meals-grid.js fajlu kreiramo i eksportujemo funkciju MealsGrid()
-funkciji MealsGrid() dodajemo parametar destruktuirani prop meals
-u return izjavi kreiramo ul element
-u ul elementu dodajemo varijablu meals
-varijabli meals dodajemo metodu .map()
-u folderu meals kreiramo meal-item.js fajl
-u meal-item.js fajlu kreiramo i eksportujemo funkciju MealItem()
-funkciji MealItem() dodajemo vise destruktuiranih parametara
-importujemo komponentu Image
-u return izjavi komponenti Image dodajemo prop fill
-u meals-grid.js fajl importujemo komponentu MealItem
-u page.js fajl importujemo komponentu MealsGrid

23. Setting Up A SQLite Database
-otvorimo link https://www.npmjs.com/package/sqlite3
-u terminalu instaliramo sqlite3 paket sa komandom npm install sqlite3
-kreiramo initdb.js fajl
-u terminal ukucamo komandu node initdb.js

24. Fetching Data By Leveraging NextJS & Fullstack Capabilities
-kreiramo folder lib
-u folderu lib kreiramo meals.js fajl
-u meals.js fajl importujemo varijablu sql
-kreiramo varijablu const db
-kreiramo i eksportujemo funkciju getMeals()
-u funkciju getMeals() dodajemo return db.prepare('...').run()
-u page.js fajl importujemo funkciju getMeals
-u funkciji MealsPage() kreiramo funkciju getMeals()
-vrijednost funkcije getMeals() pohranjujemo u varijablu const meals
-u return izjavi komponenti MealsGrid dodajemo prop meals
-u prop meals proslijedujemo varijablu meals

25. Adding A Loading Page
-kreiramo loading.js fajl
-u loading.js fajlu kreiramo i eksportujemo funkciju MealsLoadingPage
-kreiramo loading.module.css fajl
-u loading.js fajl importujemo objekt classes

26. Using Suspense & Streamed Responses For Granular Loading State Management
-kreiramo loading-out.js fajl
-u page.js fajlu kreiramo asinhronu funkciju Meals()
-u funkciji Meals() kreiramo varijablu const meals
-u page.js importujemo komponentu Suspense
-u return izjavi kreiramo komponentu Suspense sa otvorenim i zatvorenim tagom
-u komponentu Suspense dodajemo komponentu Meals
-komponenti Suspense dodajemo prop fallback

27. Handling Errors
-u lib/meals.js fajl u funkciju getMeals() dodajemo objekt new Error(...)
-kreiramo error.js fajl
-u error.js fajlu kreiramo o eksportujemo funkciju Error()
-funkciji Error() dodajemo parametre destruktuirane prop
-dodajemo 'use client'

28. Handling "Not Found" Error
-kreiramo not-found.js fajl
-u not-found.js fajlu kreiramo i eksportujemo funkciju NotFound()

29. Loading & Rendering Meal Details via Dynamic Routes & Route Parameters
-u [mealSlug]/page.js fajlu kreiramo HTML elemente header i main
-kreiramo page.module.css fajl
-u page.js fajl importujemo objekt classes
-importujemo komponentu Image
-kreiramo dva div elementa
-u div elementu kreiramo komponentu Image
-komponenti Image dodajemo prop fill
-u main elementu kreiramo p element
-u elementu dodajemo prop dangerouslySetInnerHTML
-u meals.js fajlu kreiramo i eksportujemo funkciju getMeal() sa parametrom slug
-u funkciju getMeal() dodajemo return db.prepare()
-u [mealSlug]/page.js fajl importujemo funkciju getMeal
-u funkciji MealDetailsPage() kreiramo funkciju getMeal()
-vrijednost funkcije getMeal() pohranjujemo u varijablu const meal
-u funkciju getMeal() dodajemo params.mealSlug
-dodajemo meal.instructions

30. Throwing Not Found Errors For Individual Meals
-u [mealSlug]/page.js fajlu, u funkciju MealsLoadingPage() dodajemo uslov if (!meal)
-importujemo funkciju notFound
-u uslov if dodajemo funkciju notFound()

31. Getting Started with the "Share Meal" Form
-kreiramo folder share
-u folderu share kreiramo page.js fajl
-kreiramo page.module.css fajl
-u page.js fajl importujemo objekt classes

32. Getting Started with a Custom Image Picker Input Component
-u folderu meals kreiramo image-picker.js fajl
-u image-picker.js fajlu kreiramo i eksportujemo funkciju ImagePicker()
-kreiramo image-picker.module.css fajl
-u image-picker.js fajl importujemo objekt classes
-funkciji ImagePicker() dodajemo parametar destruktuirane prop label, name
-u return izjavi kreiramo label element 
-label elementu dodajemo prop htmlFor
-u div elementu kreiramo input element
-input elementu dodajemo prop type, id, accept, name
-u share/page.js fajl importujemo komponentu ImagePicker
-u image-picker.js fajlu kreiramo button element
-button elementu dodajemo prop type i onClick
-u image-picker.js fajlu kreiramo funkciju handlePickClick()
-u prop onClick proslijedujemo funkciju handlePickClick
-dodajemo 'use client'
-importujemo React Hook useRef
-u funkciji ImagePicker() kreiramo funkciju useRef()
-vrijednost funkcije useRef() pohranjujemo u varijablu const imageInput
-input elementu dodajemo prop ref
-u prop ref proslijedujemo varijablu imageInput
-u funkciju handlePickClick() dodajemo imageInput.current.click()

33. Adding an Image Preview to the Picker
-u image-picker.js fajlu kreiramo state varijablu const [pickedImage, setPickedImage] = useState()
-kreiramo funkciju handleImageChange() sa parametrom event
-input elementu dodajemo prop onChange
-u prop onChange proslijedujemo funkciju handleImageChange
-u funkciji handleImageChange kreiramo varijablu const file
-u funkciju handleImageChange() dodajemo uslov if (!file)
-kreiramo varijablu const fileReader
-varijabli fileReader dodajemo metodu onload
-varijabli fileReader dodajemo metodu readAsDataURL(file)
-u funkciju onload dodajmo funkciju setPickedImage()
-u div element dodajemo uslov {!pickedImage && <p>...</p>}
-importujemo komponentu Image
-dodajemo jos jedan uslov {pickedImage && <Image ... />}
-komponenti Image dodajemo prop fill

34. Improvig the Image Picker Component

35. Introducing & Using Server Actions for Handling Form Submissions
-u share/page.js fajlu form kreiramo funkciju shareMeal()
-u funkciju shareMeal() dodajemo 'use server'
-u return izjavi form elementu dodajemo prop action
-u prop action proslijedujemo funkciju shareMeal
-u funkciji shareMeal() kreiramo varijablu objekt const meal
-u objekt meal dodajemo kljuc vrijednosti title, summary, instructions, image, creator, creator_email
-komponenti ImagePicker dodajemo prop label i name

36. Storing Server Actions in Separate Files
-u folderu lib kreiramo actions.js fajl
-u actions.js fajl dodajemo 'use server'
-premjestamo i eksportujemo funkciju shareMeal() u actions.js fajl
-u share/page.js fajl importujemo funkciju shareMeal
-na pocetak fajla dodajemo 'use client'

37. Creating a Slug & Sanitizing Input for XSS Protection
-u meals.js fajlu kreiramo i eksportujemo funkciju saveMeal()
-otvorimo link https://www.npmjs.com/package/slugify
-u terminalu instaliramo paket Slugify sa komandom npm i slugify
-otvorimo link https://www.npmjs.com/package/xss
-u temrinalu instaliramo paket XSS sa komandom npm i xss
-u meals.js fajlu importujemo pakete slugify i xss
-u funkciji saveMeal() kreiramo funkciju slugify()
-vrijednost funkcije slugify() pohranjujemo u varijablu const slug
-kreiramo funkciju xss()
-vrijednost funkcije xss() pohranjujemo u varijablu const instructions

38. Storing Uploaded Images & Storing Data in the Database
-u funkciji saveMeal() kreiramo varijablu const extension
-kreiramo varijablu const fileName
-u meals.js fajl importujemo modul fs
-kreiramo funkciju fs.createWriteStream()
-vrijednost funkcije fs pohranjujemo u varijablu const stream
-kreiramo varijablu const bufferedImage
-varijabli stream dodajemo metodu write()
-prvi argument funkcije write() je Buffer.from(bufferedImage)
-drugi argument je callback funkcija sa parametrom error
-u callback funkciji dodajemo uslov if (error)
-varijabli db dodajemo metodu prepare()
-nakon metode prepare() dodajemo metodu run(meal)
-u actions.js fajl importujemo funkciju saveMeal
-nakon objekta meal dodajemo funkciju saveMeal()
-importujemo funkciju redirect
-nakon funkcije saveMeal() dodajemo funkciju redirect('/meals')

39. Managing the Form Submissions Status with useFormStatus
-u share/page.js fajl importujemo React Hook useFormStatus
-u funkciji ShareMealPage() kreiramo funkciju useFormStatus()
-vrijednost funkcije useFormStatus() pohranjujemo u varijablu const status
-dodajemo 'use client'
-u folderu meals kreiramo meals-form-submit.js fajl
-u meals-form-submit.js fajlu kreiramo funkciju MealsFormSubmit
-dodajemo 'use client'
-importujemo React Hook useFormStatus
-u funkciji MealsFormSubmit() kreiramo funkciju useFormStatus()
-vrijednost funkcije useFormStatus() pohranjujemo u varijablu pending
-u return izjavi kreiramo HTML button element
-u button element dodajemo uslov {pending ? '...' : '...'}
-button elementu dodajemo prop disabled
-u prop disabled proslijedujemo varijablu pending
-u share/page.js fajl importujemo komponentu MealsFormSubmit
-u p element dodajemo komponentu MealsFormSubmit

40. Adding Server-Side Input Validations
-kreiramo funkciju isInvalidText() sa parametrom text
-u actions.js fajl dodajemo uslov if()

41. Working with Server Action Responses & useFormState
-u share/page.js fajl importujemo React Hook useFormState
-u funkciji ShareMealPage() kreiramo funkciju useFormState()
-prvi argument funkcije useFormState() je funkcija shareMeal
-drugi argument je null ili objekt 
-vrijednost funkcije useFormState() pohranjujemo u varijable const [state, formAction]
-u return izjavi form elementu dodamo prop action
-u prop action proslijedujemo varijablu formAction
-u actions.js fajlu, funkciji shareMeal dodajemo parametre prevState i formData
-u share/page.js fajl dodajemo 'use client'

42. Building For Production & Understanding NextJS Caching
-u terminal ukucamo komandu npm run build
-nakon komande build ukucamo komandu npm start

43. Triggering Cache Revalidations
-u actions.js fajl importujemo funkciju revalidatePath
-nakon funkcije saveMeal(meal) i prije funkcije redirect('/meals'), dodajemo funkciju revalidatePath('/meals')

44. Don't Store Files Locally On The Filesystem!

45. Bonus: Storing Uploaded Images In The Clod (AWS S3)

46. Adding Static Metadata
-u page.js fajlovima kreiramo i eksportujemo varijablu const metadata

47. Adding Dynamic Metadata
-u meals/page.js fajlu kreiramo i eksportujemo funkciju generateMetadata()
-funkciji generateMetadata() dodajemo parametar destruktuirani prop params
-u funkciji generateMetadata() kreiramo varijablu const meal
-dodajemo uslov if (!meal)
-u uslov if dodajemo funkciju notFound()

48. Module Summary

49. About the NextJS Pages Router 
