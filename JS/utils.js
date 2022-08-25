function isNumber(value){
    return !(isNaN(value) || typeof value === "boolean" || value === null);
}


///link to files to reuse isNumber function