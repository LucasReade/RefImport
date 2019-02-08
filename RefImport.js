class RefImport {
    constructor(srcArray){
        srcArray.forEach(scriptSrc => {
            var fileType = scriptSrc.substring(scriptSrc.lastIndexOf("."));
            switch(fileType){
                case ".css":
                    var imported = document.createElement('link');
                    imported.href = scriptSrc;
                    imported.classList.add("RefImportFile");
                    document.head.appendChild(imported);
                break;
                case ".js":
                    var imported = document.createElement('script');
                    imported.src = scriptSrc;
                    imported.classList.add("RefImportFile");
                    document.head.appendChild(imported);
                break;
                default:
                    console.log("Unknown file type: "+fileType); 
            }
        });
    }
}