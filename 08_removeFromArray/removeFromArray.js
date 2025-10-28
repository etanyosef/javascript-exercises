const removeFromArray = function(array, ...tar) {
    const newArray = [];

    array.forEach((item) => {
        if(!tar.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
