// Add the required props
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo, users }) => {
  let isCompleted = 'TodoInfo';

  if (todo.completed) {
    isCompleted = 'TodoInfo TodoInfo--completed';
  }

  return (
    <article className={isCompleted}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {users
        .filter(user => todo.userId === user.id)
        .map(user => (
          <UserInfo key={user.id} user={user} />
        ))}
    </article>
  );
};
