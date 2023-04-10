import { UserCard } from './UserCard/UserCard';
import { Staticstic } from './Statistic/Statistic';
import { FriendList } from './Friends/Friends';
import { TransactionsHistory } from './Transactions/Transactions';
import user from '../user.json';
import data from './Statistic/data.json';
import friends from './Friends/friends.json';
import transactions from './Transactions/transactions.json';
// import data from '../data.json'

export const App = () => {
  return (
    <div>
      <UserCard
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Staticstic title="Data" data={data} />
      <FriendList friends={friends} />
      <TransactionsHistory transactions={transactions} />
    </div>
  );
};
