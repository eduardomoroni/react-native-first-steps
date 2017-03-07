import Firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBfkEhUvDMHM6Hc_6r7ZExsFzdM74MoU4o',
  authDomain: 'react-native-playground-1bf22.firebaseapp.com',
  databaseURL: 'https://react-native-playground-1bf22.firebaseio.com',
  storageBucket: 'react-native-playground-1bf22.appspot.com',
  messagingSenderId: '1074542852729'
}

export default () => {
  Firebase.initializeApp(firebaseConfig)
}
