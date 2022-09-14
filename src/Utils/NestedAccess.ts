// Nice little helper function to return an object inside a nested object assuming you know the path
export const getNestedObject = (nestedObj: any, pathArr: any[]) => {
    return pathArr.reduce((obj, key) => (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
}