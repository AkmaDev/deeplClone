import Nav from "@/components/Nav";
import "@/styles/globals.css";
const Rootlayout = ({children}) => {
  return (
    <html lang="en">
        <head>
        <script src="https://kit.fontawesome.com/eda0842a66.js" crossorigin="anonymous"></script>
        </head>
        <body className="">
            <Nav/>
            {children}
        </body>
    </html>
  )
}

export default Rootlayout
