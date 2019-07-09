import core from 'metal';
import State from 'metal-state';

export default class FieldState extends State {
    constructor(config, obj, context) {
        super(config,obj,context)
    }
    setName(val) {
        return val;
    }
    setType(val) {
        return val;
    }
    setNested(val) {
        return val;
    }
    setValues(val) {
        return val;
    }
    setRequired(val) {
        return val;
    }
    setMultiple(val) {
        return val;
    }
    setPath(val) {
        return val;
    }
    setIndexType(val) {
        return val;
    }
    toJson(){
        var _arrayNested =[]
        if(this.nested!==undefined){
            for(var _nested of this.nested){
                _arrayNested.push(_nested.toJson())
            }
        }
        let _arrayValues =[]
        if(this.multiple){
            for(let _language in this.values ){

                if(typeof this.values[_language]==='object'){
                    let _index =0
                    for (let _val in this.values[_language] ){

                        let _valField =_arrayValues[_index]
                        if(_valField===undefined)
                            _valField={}
                        _valField[_language]=this.values[_language][_val]
                        _arrayValues[_index]=_valField
                        _index++
                    }
                }else{
                    let _valField =_arrayValues[0]
                    if(_valField===undefined)
                        _valField={}
                    _valField[_language]=this.values[_language]
                    _arrayValues[0]=_valField
                }


            }
        }else if(Object.keys(this.values).length>0){
            _arrayValues.push(this.values)
        }
        var nameFinal=this.name
        if(this.name.search('___')>0){
            nameFinal=this.name.split('___').shift()
        }
        return {
            name:nameFinal,
            type:this.type,
            values:_arrayValues,
           // required:this.required,
            multiple:this.multiple,
            indexType:this.indexType,
            nestedFields:_arrayNested
        }

    }

}
FieldState.STATE = {
    name: {
        setter: 'setName',
        validator: val => core.isNumber(val) || core.isString(val),
        value: "",
        writeOnce: true
    },
    type: {
        setter: 'setType',
        validator: val => core.isNumber(val) || core.isString(val),
        value: "",
        writeOnce: true
    },
    nested: {
        setter: 'setNested',
        value: undefined,
        writeOnce: false
    },
    values: {
        setter: 'setValues',
        value: {},
        writeOnce: false
    },
    required:{
        setter: 'setRequired',
        validator: val => core.isBoolean(val),
        value: false,
        writeOnce: true
    },
    path:{
        setter: 'setPath',
        validator: val => core.isString(val),
        value: "",
        writeOnce: false
    },
    indexType:{
        setter: 'setIndexType',
        validator: val => core.isString(val),
        value: "",
        writeOnce: false
    },
    multiple:{
        setter: 'setMultiple',
        validator: val => core.isBoolean(val),
        value: false,
        writeOnce: true
    }
}