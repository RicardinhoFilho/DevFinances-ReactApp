function formatVisualDate(date){
    //const formatDate = date.substring(0,10);
    const day = date.substring(8,10);
    const month = date.substring(5,7);
    const year = date.substring(0,4);

    return(`${day} / ${month} / ${year}`)
} 

export {formatVisualDate};