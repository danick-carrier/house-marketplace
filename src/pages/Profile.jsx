import {getAuth} from 'firebase/auth';
import {useEffect, useState} from 'react';


function Profile() {
  const [user, setUser] = useState({})

  const auth = getAuth()
  useEffect(() => {
    setUser(auth.currentUser)
    console.log(user)
  },[]);

  return(
    <div>
      {user ? (<h1>{user.displayName}</h1>) : (<h1>Not logged in</h1>)}
    </div>
  );
}

export default Profile;