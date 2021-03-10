module.exports={
    multipleMongooseToObject: function(goosegooses){
        return goosegooses.map(goosegoose=>goosegoose.toObject())
    },

    mongooseToObject :function(goosegoose){
        return goosegoose ? goosegoose.toObject() : goosegoose;

    }
}