const recordSchema=new mongoose.Schema({
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

person.save((err, data) => {
    if (err) {
        console.error('Error saving person:', err);
    } else {
        console.log('Person saved successfully:', data);
    }
  });

const person = new Person({
    name: 'John Doe',
    age: 30,
    favoriteFoods: ['Pizza', 'Burgers']
});
