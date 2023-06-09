# NEXT JS

## Pages

- The pages router has file-system based router.
- When a file is added to pages directory it's automatically available as a page. `
pages/contact.tsx`
- But best practice is using **Index Routes**. Create a folder with name of the route, then add an index file. `pages/about/index.tsx`
- The router supports nested files. If you create a nested folder structure, files will automatically be routed in the same way still.  
- Next.js supports pages with dynamic routes. If you create a file called `pages/products/[id].tsx`, then it will be accessible at `products/1`, `products/2`, etc. Here `id` is the dynamic segment. Dynamic segments can be accessed from `useRouter`,
- It allows single shared layout for the entire application using custom app. (e.g.: Application usually have same navigation bar and footer on every page.)
- It also allows to add layout per page as well. If you need multiple layouts, you can add a property `getLayout` to your page, allowing you to return a React component for the layout. 


## Data Fetching
- If you export a function called `getStaticProps` (Static Site Generation) from a  page, Next.js will pre-render this page at build time using the props returned by `getStaticProps`.