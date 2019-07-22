import Component from 'metal-component';
import Soy from 'metal-soy';
import templates from './TextAreaUI.soy';
//import suneditor from 'suneditor'
//import 'trumbowyg/dist/ui/trumbowyg.min.css';
import trumbowyg from 'trumbowyg'
import 'trumbowyg/dist/plugins/base64/trumbowyg.base64.min'
import 'trumbowyg/dist/plugins/pasteimage/trumbowyg.pasteimage.min'
import 'trumbowyg/dist/plugins/cleanpaste/trumbowyg.cleanpaste.min'
import 'jquery-resizable/resizable'
import 'trumbowyg/dist/plugins/resizimg/trumbowyg.resizimg.min'


/**
 * TextUI Component
 */
class TextAreaUI extends Component {

    handleShowEdit(event){
        if(event === undefined)
            return
        console.log('-----receive event handleEdit----'+event.currentTarget.attributes[1].nodeValue)
        console.log(document.querySelector('#'+event.currentTarget.attributes[1].nodeValue).value)
        event.preventDefault();
        this.isOnLoadETA=true
        var _this=this
        var valTXTA = document.querySelector('#'+event.currentTarget.attributes[1].nodeValue).value
        //$.trumbowyg.svgPath = '/o/GeneratorViewClient-1.0.5/images/icons/icons2.svg';

        window.setTimeout(handler => {
            $("#editor_TXTAREA_"+_this.id).trumbowyg(
                {
                    btnsDef: {
                        // Create a new dropdown
                        image: {
                            dropdown: ['insertImage', 'base64'],
                            ico: 'insertImage'
                        }
                    },
                    btns: [
                        ['viewHTML'],
                        ['formatting'],
                        ['strong', 'em', 'del'],
                        ['superscript', 'subscript'],
                        ['link'],
                        ['image'], // Our fresh created dropdown
                        ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
                        ['unorderedList', 'orderedList'],
                        ['horizontalRule'],
                        ['removeformat'],
                        ['fullscreen']
                    ],
                    svgPath: _this.contextPath+"/images/icons/icons2.svg",
                    plugins: {
                        resizimg: {
                            minSize: 64,
                            step: 16,
                        }
                    }
                });
            $('#editor_TXTAREA_'+_this.id).trumbowyg('html',valTXTA)
        },500)
    }

    handleCancelEdit(event){
        this.isOnLoadETA=false
        $("#editor_TXTAREA_"+this.id).trumbowyg('destroy');
    }
    handleSaveEdit(event){
        this.isOnLoadETA=false
        document.querySelector('#inputarea_'+this.id+"_"+this.defaultLanguageId).value=$("#editor_TXTAREA_"+this.id).trumbowyg('html');
        $("#editor_TXTAREA_"+this.id).trumbowyg('destroy');
    }


    handleChange(event) {

        let value = event.target.value;
        let language = undefined
        if(event.target.attributes["data-language"]!==undefined)
            language=event.target.attributes["data-language"].value
        let path=event.target.attributes["data-path"].value

        this.handleChangeValue( {
            value: value,
            language: language,
            path: path
        });
    }
}

TextAreaUI.STATE = {
    handleChangeValue: {
    }
}
// Register component
Soy.register(TextAreaUI, templates);

export default TextAreaUI;