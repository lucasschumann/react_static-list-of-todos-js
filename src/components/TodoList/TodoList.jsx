// Add the required props
import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ allTodos, allUsers }) => (
  <section className="TodoList">
    {allTodos.map(todo => (
      <TodoInfo todo={todo} key={todo.id} users={allUsers} />
    ))}
  </section>
);
