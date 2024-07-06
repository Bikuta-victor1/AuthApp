import {sleep} from '../helpers';
import auth from '@react-native-firebase/auth';
import {User} from '../common/types';

const email = 'adekolavictor51@gmail.com';
const PASS = '123456';

export async function signUp(email, password, callback) {
  //after 5 secounds
  await sleep(2000);
  if (email === email && password === PASS) {
    callback('SUCCESS');
  } else {
    callback('Login failed!');
  }
}

export function signUpUser(email, password): Promise<any> {
  return auth().createUserWithEmailAndPassword(email, password);
}

export function signInAsync(email, password) {
  return auth().signInWithEmailAndPassword(email, password);
}

export async function fetchUser(userId: string): Promise<User | undefined> {
  await sleep(2000);
  //Assumed here a user fetched from DB
  //... Put code here
  //Success
  const avt =
    'https://gravatar.com/avatar/c804fa4eac7ccd9b835d4cf4552b5140?s=400&d=robohash&r=x';
  return {
    id: userId,
    firstName: 'Victor',
    lastName: 'Adekola',
    avatarUrl: avt,
  };
}