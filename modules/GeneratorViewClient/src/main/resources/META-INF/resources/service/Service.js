import wretch from "../wretch"

export default class Service{


    getDocuments(brand,codeHotel,callBack){
        wretch("http://localhost:8080/web/guest/home/-/generator/resource/getDocuments")
            .post({ "brand": brand,"codeHotel":codeHotel })
            .json(json =>{
                console.log(json)
                callBack(json)
            } )
    }
    getDocumentsForName(brand,codeHotel,nameFolder,callBack){
        wretch("http://localhost:8080/web/guest/home/-/generator/resource/getDocuments")
            .post({ "brand": brand,"codeHotel":codeHotel,"nameFolder":nameFolder })
            .json(json =>{
                console.log(json)
                callBack(json)
            } )
    }
    getDocumentsForFolder(brand,codeHotel,folderId,callBack){
        wretch("http://localhost:8080/web/guest/home/-/generator/resource/getDocuments")
            .post({ "brand": brand,"codeHotel":codeHotel,"folderId":folderId })
            .json(json =>{
                console.log(json)
                callBack(json)
            } )
    }
    getFoldersForDocument(brand,codeHotel,callBack){
        wretch("http://localhost:8080/web/guest/home/-/generator/resource/getFoldersMedia")
            .post({ "brand": brand,"codeHotel":codeHotel })
            .json(json =>{
                console.log(json)
                callBack(json)
            } )
    }

    saveDocument(brand,codeHotel,folderId,description,fileInfo,callBack){
        wretch("http://localhost:8080/web/guest/home/-/generator/resource/saveDocument")
            .post({ "brand": brand,"codeHotel":codeHotel,
            "description":description,"folderId":folderId,
            "file":fileInfo})
            .json(json =>{
                console.log(json)
                callBack('OK',json)
            } )
            .catch(error =>{
                console.log(error)
                callBack('BAD',error)
            })
    }

    // ********************* Journals ********* //
    getJournals(brand,codeHotel,callBack){
        wretch("http://localhost:8080/web/guest/home/-/generator/resource/getJournals")
            .post({ "brand": brand,"codeHotel":codeHotel })
            .json(json =>{
                console.log(json)
                callBack(json)
            } )
    }
    getFoldersForJournal(brand,codeHotel,callBack){
        wretch("http://localhost:8080/web/guest/home/-/generator/resource/getFoldersJournal")
            .post({ "brand": brand,"codeHotel":codeHotel })
            .json(json =>{
                console.log(json)
                callBack(json)
            } )
    }
    getJournalsForName(brand,codeHotel,nameFolder,callBack){
        wretch("http://localhost:8080/web/guest/home/-/generator/resource/getJournals")
            .post({ "brand": brand,"codeHotel":codeHotel,"nameFolder":nameFolder })
            .json(json =>{
                console.log(json)
                callBack(json)
            } )
    }
    getJournalsForFolder(brand,codeHotel,folderId,callBack){
        wretch("http://localhost:8080/web/guest/home/-/generator/resource/getJournals")
            .post({ "brand": brand,"codeHotel":codeHotel,"folderId":folderId })
            .json(json =>{
                console.log(json)
                callBack(json)
            } )
    }


}