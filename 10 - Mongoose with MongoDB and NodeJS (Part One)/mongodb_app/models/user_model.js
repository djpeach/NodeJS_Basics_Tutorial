const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    firstName:          { type: String, required: true },
    lastName:           { type: String, required: true },
    userName:           { type: String, required: true, unique: true },
    email:              { type: String, required: true, unique: true  },
    password:           { type: String, required: true}
});

UserSchema.virtual('fullName').get( function() {return `${this.firstName} ${this.lastName}`});

UserSchema.statics.findUserByEmail = (email) => {
    return User.findOne({email: email}).exec();
}

UserSchema.methods.comparePassword = (passwordToCompare) => {
    if(this.password == passwordToCompare) {
        return true;
    } else {
        return false;
    }
}

let User = module.exports = mongoose.model('User', UserSchema);