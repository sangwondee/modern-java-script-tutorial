const users = [
    { name: 'mario', premiun: true },
    { name: 'luigi', premiun: false },
    { name: 'yoshi', premiun: true },
    { name: 'toad', premiun: true },
    { name: 'peach', premiun: false }
];

const getPremUsers = (users) => {
    return users.filter(user => user.premiun);
};

// สองอันด้านล่างนี้เหมือนกัน แค่เลือเอาจะใช้แบบไหน
// export default users;
export { getPremUsers, users as default };