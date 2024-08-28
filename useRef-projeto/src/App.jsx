import { useEffect, useRef } from 'react'
import './App.css'

function App() {

  const labelRef = useRef('');
  const inputRef = useRef('');

  useEffect(() => {
    labelRef.current.innerHTML = "Formulário de Login";
    labelRef.current.style.fontFamily = "Arial, sans-serif";
    labelRef.current.style.fontSize = "30px";
    inputRef.current.focus();
  }, []);


    const enviarFormulario = (evento) => {
      evento.preventDefault();
      inputRef.focus();
    }

  return (

    <div className='container'>
      <form action='https://www.linkedin.com/in/antonio-carlos-de-souza-junior/' onSubmit={enviarFormulario}>
        <div className='titulo'>
          <label ref={labelRef}>Formulário de Login</label>
        </div>

        <div className='campos'>
          <input ref={inputRef} />

          <input ref={inputRef} />
        </div>

        <button>Logar</button>
      </form>
    </div>
  )
}

export default App
