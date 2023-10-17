/*
 * @Author: humengchuan 531537052@qq.com
 * @Date: 2023-10-16 16:43:33
 * @LastEditors: humengchuan 531537052@qq.com
 * @LastEditTime: 2023-10-17 15:31:02
 * @FilePath: \projecte:\学习\react\my-learn-react\src\todoList\todo.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import './todo.css'
// import listData from '../assests/data.json'

const todo = (props) => {
    const list = props.listArray
    // let propsData = props.data
    const hanldeDeleItem = (i) => {
        // console.log('%c [ i ]-16', 'font-size:13px; background:pink; color:#bf2c9f;', i)
        props.onDeleteItme(i)
    }
    return(
        <>
            { list.length !== 0 ? <div className="todo">
                {
                    list.map((item,index) => 
                    <div className="todo-item" key={index}>
                        <div className="item-left">
                            <span className='text'>{item.mouth}月</span>
                            <span className='number'>{item.day}</span>
                        </div>
                        <div className="item-right">
                            <span className="text">{item.desc}</span>
                            <span className="time">{item.time}</span>
                        </div>
                        <div onClick={() =>hanldeDeleItem(index)} className='delete'>X</div>
                    </div>
                    )  
                }
                {/* <div className="todo-item" >
                    <div className="item-left">
                        <span className='text'>{propsData.mouth}月</span>
                        <span className='number'>{propsData.day}</span>
                    </div>
                    <div className="item-right">
                        <span className="text">{propsData.desc}</span>
                        <span className="time">{propsData.time}</span>
                    </div>
                </div> */}
            </div> : <div></div>  }
            
        </>
    )
}

export default todo