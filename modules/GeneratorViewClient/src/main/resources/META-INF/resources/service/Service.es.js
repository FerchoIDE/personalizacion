import wretch from "wretch"

//const _PATHBASE_ = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '');
const _HOST_=location.hostname+(location.port ? ':'+location.port: '');
//const _HOST_="localhost:8080"
//const _HOST_="10.43.162.99"
const _PATH_="/web/guest/home/"
//const _PATH_="/web/posadas-completo-nuevo/personalizacion/"

export default class Service{


    getDocuments(brand,codeHotel,callBack){
        wretch("http://"+_HOST_+_PATH_+"-/generator/resource/getDocuments")
            .post({ "brand": brand,"codeHotel":codeHotel })
            .json(json =>{
                console.log(json)
                callBack(json)
            } )
    }
    getDocumentsForName(brand,codeHotel,nameFolder,callBack){
        wretch("http://"+_HOST_+_PATH_+"-/generator/resource/getDocuments")
            .post({ "brand": brand,"codeHotel":codeHotel,"nameFolder":nameFolder })
            .json(json =>{
                console.log(json)
                callBack(json)
            } )
    }
    getDocumentsForFolder(brand,codeHotel,folderId,callBack){
        wretch("http://"+_HOST_+_PATH_+"-/generator/resource/getDocuments")
            .post({ "brand": brand,"codeHotel":codeHotel,"folderId":folderId })
            .json(json =>{
                console.log(json)
                callBack(json)
            } )
    }
    getFoldersForDocument(brand,codeHotel,callBack){
        wretch("http://"+_HOST_+_PATH_+"-/generator/resource/getFoldersMedia")
            .post({ "brand": brand,"codeHotel":codeHotel })
            .json(json =>{
                console.log(json)
                callBack(json)
            } )
    }

    saveDocument(brand,codeHotel,folderId,description,newFolder,fileInfo,callBack){
        wretch("http://"+_HOST_+_PATH_+"-/generator/resource/saveDocument")
            .post({ "brand": brand,"codeHotel":codeHotel,
                "description":description,"folderId":folderId,"newFolder":newFolder,
                "file":fileInfo})
            .json(json =>{
                console.log(json)
                callBack('OK',json)
            } )
            .catch(error =>{
                console.log(error)
                callBack('BAD',JSON.parse(error.message))
            })
    }

    // ********************* Journals ********* //
    getJournals(brand,codeHotel,nameField,callBack){
        wretch("http://"+_HOST_+_PATH_+"-/generator/resource/getJournals")
            .post({ "brand": brand,"codeHotel":codeHotel,"nameField":nameField })
            .json(json =>{
                console.log(json)
                callBack(json)
            } )
    }
    getFoldersForJournal(brand,codeHotel,nameField,callBack){
        wretch("http://"+_HOST_+_PATH_+"-/generator/resource/getFoldersJournal")
            .post({ "brand": brand,"codeHotel":codeHotel,"nameField":nameField })
            .json(json =>{
                console.log(json)
                callBack(json)
            } )
    }
    getJournalsForName(brand,codeHotel,nameFolder,nameField,callBack){
        wretch("http://"+_HOST_+_PATH_+"-/generator/resource/getJournals")
            .post({ "brand": brand,"codeHotel":codeHotel,"nameFolder":nameFolder,"nameField":nameField })
            .json(json =>{
                console.log(json)
                callBack(json)
            } )
    }
    getJournalsForFolder(brand,codeHotel,folderId,nameField,callBack){
        wretch("http://"+_HOST_+_PATH_+"-/generator/resource/getJournals")
            .post({ "brand": brand,"codeHotel":codeHotel,"folderId":folderId,"nameField":nameField })
            .json(json =>{
                console.log(json)
                callBack(json)
            } )
    }

    validateCodeHotel(brand,codeHotel,brandId,callBack){
        wretch("http://"+_HOST_+_PATH_+"-/generator/resource/validateCodeHotel")
            .post({ "brand": brand,"codeHotel":codeHotel,"brandId":brandId })
            .json(json =>{
                console.log(json)
                callBack(json)
            } )
            .catch(error =>{
                console.log(error)
                callBack(error)
            })
    }
    validateCodeBrand(brand,callBack){
        wretch("http://"+_HOST_+_PATH_+"-/generator/resource/validateCodeBrand")
            .post({ "brand": brand})
            .json(json =>{
                console.log(json)
                callBack(json)
            } )
            .catch(error =>{
                console.log(error)
                callBack(error)
            })
    }
    savejournal(data,callBack){
        wretch("http://"+_HOST_+_PATH_+"-/generator/resource/saveJournal")
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
    getCategories(callBack){
        wretch("http://"+_HOST_+_PATH_+"-/generator/resource/getCategories")
            .post()
            .json(json =>{
                callBack(json)
            } )
    }
    saveTag(data,callBack){
        wretch("http://"+_HOST_+_PATH_+"-/generator/resource/saveTag")
            .post(data)
            .json(json =>{
                console.log(json)
                callBack(json,undefined)
            } )
            .catch(error =>{
                console.log(error)
                callBack(undefined,error)
            })
    }


}