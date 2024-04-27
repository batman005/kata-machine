export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;
    do{
       const m = Math.floor((low + (high - low) / 2));
        const val = haystack[m];
        if(val === needle){
            return true;
        } else if(val > needle){
            high = m;
        } else {
            low = m + 1;
        }
    }while(low < high);
    return false;
}