import "./Input.css"


const Input = (props) => {
    const {value, change} = props
  return (
    <input 
        onChange={change}
        value={value}
        type="text" 
        placeholder='Введите значение...'/>
  )
}

export default Input