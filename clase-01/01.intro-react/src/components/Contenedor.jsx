//rafce
import './contenedor.css'

const Contenedor = ({ children }) => {
    console.log(children);
  return (
    <main>
        {children}
    </main>
  )
}

export default Contenedor