import { UserCard } from "./UserCard/UserCard";
import user from '../user.json'

export const App = () => {
  return (
    <div>
      <UserCard className="qwd" username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes} />
    </div>
  );
};
