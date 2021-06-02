function getDate() {
    const date = new Date();
    return [
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate()
    ]
        .join('/');

}

module.exports = {
    getDate
};