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
    setPath(val) {
        return val;
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
    }
}