class LocalStorageWrapper {
    constructor()
    {
        this.storage = window.localStorage;
    }

    
     addItem(Name,Sum,Category, date, i)
    {
        try {
            const data = {Name: Name, Sum: Sum,Category: Category, Date_: date};
            // console.log(data);
            this.storage.setItem("item" + i, JSON.stringify(data));

        } catch (error) {
            console.error("failed to add item" + error);
        }
    }


}