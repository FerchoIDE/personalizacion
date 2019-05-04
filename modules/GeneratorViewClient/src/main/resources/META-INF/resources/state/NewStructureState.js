import core from 'metal';
import State from 'metal-state';
import FieldState from './FieldState'

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
        return this.setNestedValue(pathField, value, language,this.fields)
    }

    setNestedValue(pathField, value, language,_fields) {
        const names = pathField.split('/');
        const deep = names.length
        const name = names.shift()

        for (let field of _fields) {
            if (name == field.name) {
                if (field.nested !== undefined && deep > 1) {
                    return this.setNestedValue(names.join('/'), value, language,field.nested)
                } else {
                    var _values = field.values;
                    _values[language] = value
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