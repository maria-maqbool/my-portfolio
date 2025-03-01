export const getImageUrl = (path) => {
    console.log("path: ", path);
    const url = new URL(`/assets/${path}`, import.meta.url).href;
    console.log("url: ", url);
    return  `/assets/${path}`
}