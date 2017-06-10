import Firebase from 'firebase'
import SECRETS from '../Secrets/Firebase.json'

const firebaseConfig = {
  apiKey: SECRETS.apiKey,
  authDomain: SECRETS.authDomain,
  databaseURL: SECRETS.databaseURL,
  storageBucket: SECRETS.storageBucket,
  messagingSenderId: SECRETS.messagingSenderId
}

export default () => {
  Firebase.initializeApp(firebaseConfig)
}
