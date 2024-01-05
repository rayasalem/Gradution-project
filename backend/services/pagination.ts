export function pagination(page:number,size:number) {
  
    if (page <= 0) {
        page = 1;
    }
    if (size <= 0) {
        page = 10;
    }
    const skip = (page - 1) * size;
    return { limit: size, skip };
}
