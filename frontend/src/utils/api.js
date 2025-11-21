export const fetcher = async (url,options={})=>{
    try {
        const res= await fetch(url,options);
        return await res.json();
    } catch (error) {
        console.error("API Fetch Error: ",error);
        return null;
    }
}