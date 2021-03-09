import { useEffect, useState } from "react";
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
export const useMount = (callback) => {
    useEffect(() => {
        callback();
        // eslint-disable-next-line
    }, []);
};
export const useDebounce = (value, delay) => {
    const [debouceValue, setdebouceValue] = useState(value);

    useEffect(() => {
        // 每次value变化，设置一个定时器
        let timer = setTimeout(() => {
            setdebouceValue(value);
        }, delay);
        // 每次在上一个useEffect处理完成时运行
        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);
    return debouceValue;
};
