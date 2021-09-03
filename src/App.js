import logo from './logo.svg';
import './App.css';
import Firebase from './firebase/config';
import 'firebase/auth';

function App() {
  return (
    <div className="App">
      <button onClick={() => {
        Firebase.auth().createUserWithEmailAndPassword('devan@gmail.com', 'password')
          .then((userCredential) => {

            // Signed in 
            var user = userCredential.user;
            // ...
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
          });
        }}></button>
    </div>
  );
}

export default App;
