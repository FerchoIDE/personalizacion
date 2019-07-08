import wretch from "../wretch"

export default class Service{
    getJournals(codeHotel,typeJournal,callBack){
        wretch("http://localhost:8080/web/guest/home/-/generator/resource/getJournals")
            .post({ "codeHotel": codeHotel,"typeJournal":typeJournal })
            .json(json =>{
                console.log(json)
                callBack(json)
            } )
    }

    getDocuments(codeHotel,typeJournal,callBack){
        wretch("http://localhost:8080/web/guest/home/-/generator/resource/getDocuments")
            .post({ "codeHotel": codeHotel,"typeDocument":typeJournal })
            .json(json =>{
                console.log(json)
                callBack(json)
            } )
    }
    
    getCategories(callBack){
        wretch("http://localhost:8080/web/guest/soy/-/generator/resource/getCategories")
            .post()
            .json(json =>{
                console.log(json)
                callBack(json)
            } )
    }
}