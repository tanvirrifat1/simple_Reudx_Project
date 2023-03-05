import { colorSelected } from "../actions";

const updateColorChange = (todoId, color) => {
    return async (dispatch) => {
        const res = await fetch(`http://localhost:9000/todos/${todoId}`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                color: color
            })
        });
        const todo = await res.json()

        dispatch(colorSelected(todo.id, todo.color))
    }
}

export default updateColorChange;