/*
 * @Author: humengchuan 531537052@qq.com
 * @Date: 2023-10-16 21:54:25
 * @LastEditors: humengchuan 531537052@qq.com
 * @LastEditTime: 2023-10-17 09:40:56
 * @FilePath: \projecte:\学习\react\my-learn-react\src\editState\index.jsx
 * @Description: 这是默认设置,请设置`customMade`
 */
import './state.css'
import { useState } from 'react'

const StateComp = () => {
    const [count, setCounter] = useState(1)

    let number = 2
    const addCount = () => {
        number++
        setCounter(count + 1)
        console.log('%c [ number ]-13', 'font-size:13px; background:pink; color:#bf2c9f;', number, count)
    }
    const reduceCount = () => {
        number --
        setCounter(count-1)
        console.log('%c [ number ]-17', 'font-size:13px; background:pink; color:#bf2c9f;', number, count)
    }
    return (
        <div className='state-count'>
        <div>普通数值：{number}</div>
        <div>数值bind: {count}</div>
        <div className='btn-area'>
            <div className="button" onClick={addCount}>增加</div>
            <div className="button" onClick={reduceCount}>减少</div>
        </div>
        </div>
    )
}

export default StateComp