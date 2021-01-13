const mongoose = require('mongoose');
var carSchema = new mongoose.Schema({
    numberplate : {
        type : String,
        required:"This field is required"
    },
    colorvehicle : {
        type : String,
        required:"This field is required"
    },
    LotNum : {
        type : String,
        required:"This field is required"
    }
    
});
mongoose.model("CarDB", carSchema);