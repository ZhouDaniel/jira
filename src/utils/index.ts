import { useEffect, useState } from "react";
export const isFalse = (value: any) => {
    return value === 0 ? false : !value;
};
export const cleanObject = (object: object) => {
    let result = { ...object };
    Object.keys(result).forEach((key) => {
        //@ts-ignore
        let value = result[key];
        if (isFalse(value)) {
            //@ts-ignore
            delete result[key];
        }
    });
    return result;
};
export const useMount = (callback: () => void) => {
    useEffect(() => {
        callback();
        // eslint-disable-next-line
    }, []);
};
export const useDebounce = (value: any, delay?: number) => {
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
