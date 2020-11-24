import * as mongoose from 'mongoose';

export const Vehicle = mongoose.model('vehicle', {
    'vehicle_id': {type:String, required:true},
    'pwd_hash': {type:String, required:true}
})

export const Datapoint = mongoose.model('datapoint', {
    'vehicle_id': {type: String, required: true},
    'datapoint_id': {type: String, required: true},
    'timestamp': {type: Date, required: true},
    'data_type': {type: String, required: true},
    'content': {type: String, requried: true},
})