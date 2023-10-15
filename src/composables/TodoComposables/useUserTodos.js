export default function useUserTodos(store) {

  const useUserTodosCreateTodo = async(todo) => {
    store.todos.push(todo)
  }

  const useUserTodosDeleteTodo = async(todo) => {
    store.todos = store.todos.filter(p => p.id !== todo.id)
  }

  const useUserTodosDuplicateTodo = async(todo) => {
    const dublicate = {
      id: Math.round(Math.random() * 1000),
      name: todo.name,
      description: todo.description
    }
    store.todos.push(dublicate)
  }

  const useUserTodosChangeTodo = async(newTodo) => {
    let findeTodo = store.todos.find(todo => todo.id === newTodo.id)
    if (newTodo.name){
        findeTodo.name = newTodo.name
    }
    if (newTodo.description){
        findeTodo.description = newTodo.description
    }
  }
  return {
    useUserTodosCreateTodo,
    useUserTodosDeleteTodo,
    useUserTodosDuplicateTodo,
    useUserTodosChangeTodo
  }
}