import React, { useState } from 'react'
import './State.css'

const State = () => {

const [num, setNum] = useState(0)
const [text, setText] = useState('')   
const [img, setImg] = useState(false)
const [open, setOpen] = useState('OPEN')





const change =() => {
setImg(!img)
setOpen(img ? 'OPEN' : 'CLOSE')
}


const minus = () => {
   if (num > 0) {
      setNum(num - 1 )
   }
}
const plus = () => {
   if (num <10 ) {
      setNum(num +1)
   }
}

  return (
    <>


<div className="box">
   <button onClick={change}> {open} IMAGE</button>
   {img && (
   <img src="https://i1.sndcdn.com/avatars-000133307418-dx7xm7-t500x500.jpg" alt="" />
      
   )}
</div>


<div className="box">
   <h2>{text}</h2>
   <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
</div>


    <div className="box">
      <h2>{num}</h2>
      <button onClick={plus }>Добавить число</button>
      <button onClick={minus}>Уменьшить число</button>
      <button onClick={() =>  setNum (num ** 2) }>Степень</button>
      <button onClick={() =>  setNum (num * 0) }>Обнулить</button>
      <button onClick={() =>  setNum (num / 2) }>Разделить на 2</button>



    </div>
    </>
  )
}

export default State    