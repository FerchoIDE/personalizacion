import wretch from "wretch"
const _HOST_="localhost:8080"

export default class Service{


    getDocuments(brand,codeHotel,callBack){
        wretch("http://"+_HOST_+"/web/guest/home/-/generator/resource/getDocuments")
            .post({ "brand": brand,"codeHotel":codeHotel })
            .json(json =>{
                console.log(json)
                callBack(json)
            } )
    }
    getDocumentsForName(brand,codeHotel,nameFolder,callBack){
        wretch("http://"+_HOST_+"/web/guest/home/-/generator/resource/getDocuments")
            .post({ "brand": brand,"codeHotel":codeHotel,"nameFolder":nameFolder })
            .json(json =>{
                console.log(json)
                callBack(json)
            } )
    }
    getDocumentsForFolder(brand,codeHotel,folderId,callBack){
        wretch("http://"+_HOST_+"/web/guest/home/-/generator/resource/getDocuments")
            .post({ "brand": brand,"codeHotel":codeHotel,"folderId":folderId })
            .json(json =>{
                console.log(json)
                callBack(json)
            } )
    }
    getFoldersForDocument(brand,codeHotel,callBack){
        wretch("http://"+_HOST_+"/web/guest/home/-/generator/resource/getFoldersMedia")
            .post({ "brand": brand,"codeHotel":codeHotel })
            .json(json =>{
                console.log(json)
                callBack(json)
            } )
    }

    saveDocument(brand,codeHotel,folderId,description,newFolder,fileInfo,callBack){
        wretch("http://"+_HOST_+"/web/guest/home/-/generator/resource/saveDocument")
            .post({ "brand": brand,"codeHotel":codeHotel,
                "description":description,"folderId":folderId,"newFolder":newFolder,
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
    getJournals(brand,codeHotel,nameField,callBack){
        wretch("http://"+_HOST_+"/web/guest/home/-/generator/resource/getJournals")
            .post({ "brand": brand,"codeHotel":codeHotel,"nameField":nameField })
            .json(json =>{
                console.log(json)
                callBack(json)
            } )
    }
    getFoldersForJournal(brand,codeHotel,nameField,callBack){
        wretch("http://"+_HOST_+"/web/guest/home/-/generator/resource/getFoldersJournal")
            .post({ "brand": brand,"codeHotel":codeHotel,"nameField":nameField })
            .json(json =>{
                console.log(json)
                callBack(json)
            } )
    }
    getJournalsForName(brand,codeHotel,nameFolder,nameField,callBack){
        wretch("http://"+_HOST_+"/web/guest/home/-/generator/resource/getJournals")
            .post({ "brand": brand,"codeHotel":codeHotel,"nameFolder":nameFolder,"nameField":nameField })
            .json(json =>{
                console.log(json)
                callBack(json)
            } )
    }
    getJournalsForFolder(brand,codeHotel,folderId,nameField,callBack){
        wretch("http://"+_HOST_+"/web/guest/home/-/generator/resource/getJournals")
            .post({ "brand": brand,"codeHotel":codeHotel,"folderId":folderId,"nameField":nameField })
            .json(json =>{
                console.log(json)
                callBack(json)
            } )
    }

    validateCodeHotel(brand,codeHotel,brandId,callBack){
        wretch("http://"+_HOST_+"/web/guest/home/-/generator/resource/validateCodeHotel")
            .post({ "brand": brand,"codeHotel":codeHotel,"brandId":brandId })
            .json(json =>{
                console.log(json)
                callBack(json)
            } )
    }
    validateCodeBrand(brand,callBack){
        wretch("http://"+_HOST_+"/web/guest/home/-/generator/resource/validateCodeBrand")
            .post({ "brand": brand})
            .json(json =>{
                console.log(json)
                callBack(json)
            } )
    }
    savejournal(data,callBack){
        wretch("http://"+_HOST_+"/web/guest/home/-/generator/resource/saveJournal")
            .post(data)
            .json(json =>{
                console.log(json)
                callBack(json)
            } )
            .catch(error =>{
                console.log(error)
                callBack(error)
            })
    }


}