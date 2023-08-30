
import Header from "../Header/Header"
import Score from "../Score/Score"

const Layout = ({children}) => {
  return (
    <div>
        <Header/>
        {children}
    </div>
  )
}

export default Layout