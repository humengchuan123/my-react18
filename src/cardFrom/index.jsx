/*
 * @Author: humengchuan 531537052@qq.com
 * @Date: 2023-10-17 10:47:46
 * @LastEditors: humengchuan 531537052@qq.com
 * @LastEditTime: 2023-10-17 14:41:50
 * @FilePath: \projecte:\学习\react\my-learn-react\src\cardFrom\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import './index.css'
import { useState } from 'react'

const Index = (props) =>  {
    const [form, setForm] = useState({
        mouth: '',
        desc: '',
        time: ''
    })
  
    const handleSubmit = () => {
        let emitData = {...form}
        emitData.day = new Date(emitData.mouth).getDate()
        emitData.mouth = new Date(emitData.mouth).getMonth()+ 1
        props.onEmit('emit', emitData)
        setForm({
            mouth: '',
            desc: '',
            time: ''
        })
    }
    const getDate = (e) => {
        // form1.mouth = e.target.value
        setForm({
            ...form,
            mouth: e.target.value
        })
    }
    const getContent = (e) => {
        // form1.desc = e.target.value
        setForm({
            ...form,
            desc: e.target.value
        })
    }
    const getTime = (e) => {
        // form1.time = e.target.value
        setForm({
            ...form,
            time: e.target.value
        })
    }
  return (
    <form className='form'>
        <div className="form-item">
            <label htmlFor="date">日期</label>
            <input onChange={getDate} value={form.mouth}  id="date" type="date" />
        </div>
        <div className="form-item">
            <label htmlFor="content">内容</label>
            <input onChange={getContent} value={form.desc} id="content" type="text" />
        </div>
        <div className="form-item">
            <label htmlFor="time">时长</label>
            <input onChange={getTime} value={form.time} id="time" type="number" />
        </div>
        <div className="form-item form-button" onClick={handleSubmit}>
            提交
        </div>
    </form>
  )
}

export default Index