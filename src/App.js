import PendingTasks from './pendingTasks/pendingTasks';
import 'font-awesome/css/font-awesome.min.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import ToDo from './ToDo';
import SignIn from './SignIn';

function App() {
  const [user] = useAuthState(auth);

  return user ? <ToDo /> : <SignIn />
}

export default App;
