export const isFalse = (value) => {
    return value === 0 ? false : !value;
};
export const cleanObject = (object) => {
    let result = { ...object };
    Object.keys(result).forEach((key) => {
        let value = result[key];
        if (isFalse(value)) {
            delete result[key];
        }
    });
    return result;
};
