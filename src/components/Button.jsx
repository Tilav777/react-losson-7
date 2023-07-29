
function Button({title, onClick, style}) {
  
  return (
    <button onClick={onClick} className={`btn ${style}`}>
      {title}
    </button>
  )
}

export default Button