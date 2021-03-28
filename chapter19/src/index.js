import  { styleBody, addTitle, contact } from './dom';
import users, { getPremUsers } from './data';

const premUsers = getPremUsers(users);

console.log(premUsers);
console.log(users);

console.log('test 6');