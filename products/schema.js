const mongoose = require("mongoose");
const crypto = require("crypto");

const watch = new mongoose.Schema({
   uuid:{type:String, require:false},
   watchBrand:{type:String, require:true},
   displayType:{type:String, require:true},
   watchType:{type:String, require:true},
   price:{type:Number, require:true},
   warranty:{type:String, require:false},
   active:{type:Boolean, required:false, default:true},
   image:{type:String, require:true},
   categoryUuid:{type: String, required:false},
   userUuid: {type: String, required:false}
},
{
    timestamps:true

})

watch.pre('save', function(next){
    this.uuid ='watch'+crypto.pseudoRandomBytes(6).toString('hex').toUpperCase();
    console.log(this.uuid);
    next();
})

module.exports = mongoose.model("watch",watch);