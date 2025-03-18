/\*\*

- Header
- -Logo
- -Nav Items
- Body
- -Serach Bar
- -Restaurant Container
- ---Restaurant Card
- Footer
- - copyright
- -links
- -address
- -contact info

---

Must enable CORS chrome extension

-Build our store (Configure store from toolkit)
--add slices to inside it

-Connect/provide our store to our app(Provider)
-create Slice(createSlice) (cartSlice({name,initailstate,reducers} ))
-export default cartslice.reducer
-export const{} = cartSLice.actions

-dispatch (action)

//subscribing the store using selector
-useSelector hook

## //setting up testing in our app

-Install React Testing Library
-Install Jest
-Install Babel dependencies
-Configure Babel
-Configure Parcel Config ile to disable default Babel transpilation
-npm i test
-Jest Configuration (npx jest --init)
-Install jsdom library
(npm install --save-dev jest-environment-jsdom)
