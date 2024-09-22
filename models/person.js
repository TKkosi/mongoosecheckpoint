const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    favouriteFoods:{
        type:[String],
        required:true
    }
})
const Person = mongoose.model('Person', personSchema);