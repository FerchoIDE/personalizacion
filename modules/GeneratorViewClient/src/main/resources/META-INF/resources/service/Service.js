import wretch from "../wretch"

export default class Service{
    getJournals(brand,codeHotel,callBack){
        wretch("http://localhost:8080/web/guest/home/-/generator/resource/getJournals")
            .post({ "brand": brand,"codeHotel":codeHotel })
            .json(json =>{
                console.log(json)
                callBack(json)
            } )
    }

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
}