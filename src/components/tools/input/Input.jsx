import "./Input.css"


const Input = (props) => {
    const {value, change} = props
  return (
    <input 
        onChange={change}
        value={value}
        type="date" 
        placeholder='Введите значение...'/>
  )
}

export default Input