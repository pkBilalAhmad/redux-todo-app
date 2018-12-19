import React from 'react';
import { connect } from 'react-redux';

const Todo = (props) => (
    <div>
        <ul>
            {
                props.list.map((item, index) => (
                    <TodoItem item={item} index={index} key={index} />
                ))
            }
        </ul>
        <div>
            <input />
            <button>Add todo item</button>
        </div>
        <ol>

        </ol>
    </div>
)

// const AddTodo = () => (
//     <div>
//         <input />
//         <button>Add Todo Item </button>
//     </div>
// )




const mapStateToPorps = (state) => {
    return {
        list: state.data
    }
}


const TodoItem = (props) => (
    <li>{props.item.name}</li>
)

export default connect(mapStateToPorps)(Todo);