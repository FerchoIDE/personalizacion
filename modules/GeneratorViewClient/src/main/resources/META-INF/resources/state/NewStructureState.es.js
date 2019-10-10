import core from 'metal';
import State from 'metal-state';
import FieldState from './FieldState.es'

export default class NewStructureState extends State {
    constructor(config, obj, context) {
        super(config, obj, context)
    }

    setIdStructure(val) {
        return val;
    }

    setValue(pathField, value, language) {
        if (language === undefined)
            language = this.localeDefault;
        return this.setNestedValue(pathField, value, language, this.fields)
    }

    setNestedValue(pathField, value, language, _fields) {
        const names = pathField.split('/');
        const deep = names.length
        const name = names.shift()
        if(name.search('___')>0){
            var nameOrigin = name.split('___').shift()
            var existElement=false
            var _fieldClon=undefined
            for (let _field of _fields) {
                if (name == _field.name) {
                    existElement=true
                }
                if (nameOrigin == _field.name) {
                    _fieldClon=_field
                }
            }
            if(!existElement){
                if(_fieldClon!==undefined){
                    var _newField =new FieldState()
                    _newField.name=name
                    _newField.path = _fieldClon.name
                    _newField.type = _fieldClon.type
                    _newField.required = _fieldClon.required
                    _newField.multiple = _fieldClon.repeatable
                    _newField.indexType = _fieldClon.indexType
                    if(_fieldClon.nested!=undefined){
                        _newField.nested = this.nestedFields(_fieldClon.nested, _newField.name)
                    }else{
                        _newField.multiple = _fieldClon.multiple
                    }


                    /*var arrNested =[]
                    for (let _fieldN of _fieldClon.nested){
                        arrNested.push(Object.assign(new FieldState(),_fieldN))
                    }
                    _newField.nested=arrNested*/

                    _fields.push(_newField)
                }else{
                    return false
                }
            }
        }

        for (let _field of _fields) {
            if (name == _field.name) {
                if (_field.nested !== undefined && deep > 1) {
                    return this.setNestedValue(names.join('/'), value, language, _field.nested)
                } else {
                    let _values = Object.assign({}, _field.values);
                    if (value !== null && typeof value === 'object' && value['id']!==undefined) {
                        if (_values[language] === undefined)
                            _values[language] = {}
                        _values[language][value['id']] = value
                    } else if(value !== null) {
                        _values[language] = value
                    }

                    _field.values = _values
                    return true
                }
                break;
            }
        }
        return false
    }

    removeItem(pathField) {
        const names = pathField.split('/');
        const name = names.shift()
        var _i=0
        for (let _field of this.fields) {
            if (name == _field.name) {
                delete this.fields[_i]
                return true
                break;
            }
            _i++
        }
        return false
    }
    removeValue(pathField, value, language) {
        if (language === undefined)
            language = this.localeDefault;
        return this.removeNestedValue(pathField, value, language, this.fields)
    }

    removeNestedValue(pathField, value, language, _fields) {
        const names = pathField.split('/');
        const deep = names.length
        const name = names.shift()

        for (let field of _fields) {
            if (name == field.name) {
                if (field.nested !== undefined && deep > 1) {
                    return this.removeNestedValue(names.join('/'), value, language, field.nested)
                } else {
                    var _values = field.values;
                    if (typeof value === 'object') {
                        if (_values[language] !== undefined && _values[language][value['id']] !== undefined)
                            _values[language][value['id']] = undefined
                    } else {
                        _values[language] = undefined
                    }

                    field.values = _values
                    return true
                }
                break;
            }
        }
        return false
    }


    setFields(data) {
        if (data === undefined)
            return data
        var val = []
        data.nestedFields.forEach(field => {
            var fieldNew = new FieldState();
            fieldNew.name = field.name
            fieldNew.path = field.name
            fieldNew.type = field.type
            fieldNew.required = field.required
            fieldNew.multiple = field.repeatable
            fieldNew.indexType = field.indexType
            if (field.nestedFields !== undefined)
                fieldNew.nested = this.nestedFields(field.nestedFields, field.name)
            val.push(fieldNew);
        })
        return val;
    }

    nestedFields(nestedFields, parent) {
        var val = []
        nestedFields.forEach(field => {
            var fieldNew = new FieldState();
            fieldNew.name = field.name
            let path = parent + "/" + field.name
            fieldNew.path = path
            fieldNew.type = field.type
            fieldNew.required = field.required

            fieldNew.indexType = field.indexType
            fieldNew.multiple = field.repeatable
            if (field.nestedFields !== undefined)
                fieldNew.nested = this.nestedFields(field.nestedFields, field.name)
            val.push(fieldNew);
        })
        return val;
    }

    setIdFolderParent(val) {
        return val;
    }

    setBrand(val) {
        return val;
    }

    setHotel(val) {
        return val;
    }

    setLocaleDefault(val) {
        return val;
    }
}

NewStructureState.STATE = {
    idStructure: {
        setter: 'setIdStructure',
        validator: val => core.isNumber(val) || core.isString(val),
        value: 0,
        writeOnce: false
    },
    localeDefault: {
        setter: 'setLocaleDefault',
        validator: val => core.isString(val),
        writeOnce: true
    },
    idFolderParent: {
        setter: 'setIdFolderParent',
        validator: val => core.isNumber(val),
        value: 0,
        writeOnce: true
    },
    brand: {
        setter: 'setBrand',
        validator: val => core.isString(val),
        value: "",
        writeOnce: true
    },
    hotel: {
        setter: 'setHotel',
        validator: val => core.isString(val),
        value: "",
        writeOnce: true
    },
    fields: {
        setter: 'setFields',
        value: undefined,
        writeOnce: false
    }
}