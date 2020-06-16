// first we want to get the users browser and version number out of the user agent string
function getBrowser() {
    const ua=navigator.userAgent,tem, M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
    if(/trident/i.test(M[1])){
        tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
        return {name:'IE',version:(tem[1]||'')};
        }   
    if(M[1]==='Chrome'){
        tem=ua.match(/\bOPR|Edge\/(\d+)/)
        if(tem!=null)   {return {name:'Opera', version:tem[1]};}
        }   
    M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}

    // returns object with browser name and version
    return {
        name: M[0],
        version: M[1]
    };
}

// then create a variable that we can pass into our next function so we can compare this with whats in the allowed database.
const userBrowser = getBrowser();


// then check if greater versions are not compatible if not then the version must match exactly, if greater versions are compatible than the version must be atleast whatever the set version number is int he database or higher. 
function checkBrowser(userBrowser, browserArr){

    browserArr.map((item, userBrowser) => {
        const allowedBrowser = item.BrowserName;
        const allowedVersion = item.VersionNumber;
        const allowedGreaterVers = item.GreaterVersion;
        const ubName = userBrowser.name;
        const ubVersion = userBrowser.version;

        if (greaterVers === false){
            if (ubName === allowedBrowser && ubVersion === allowedVersion){
                return true;
            }
        }

        if(ubName === allowedBrowser && ubVersion >= allowedVersion){
            return true;
        }

        return false;
    })
}

// I tried to make sure that we are compairing the user string to database values, this way we don't need to update the code if we need to add more compatible browsers and versions.