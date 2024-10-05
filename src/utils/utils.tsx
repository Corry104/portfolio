
export const validateEmail = (text: string) => {
    let reg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return reg?.test(text);
};