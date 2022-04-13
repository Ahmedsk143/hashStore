const mongoose = require('mongoose')
//================================================
let adminSchema = mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    OTP:{type:String}
})
//================================================
let userSchema = mongoose.Schema({
    userName:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    phone:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    balance:{
        eth:{type:Number,default:0},
        btc:{type:Number,default:0}
    },
    demoBalance:{
        eth:{type:Number,default:0},
        btc:{type:Number,default:0}
    },
    activePlans:{type:Number,default:0},
    activeDemoPlans:{type:Number,default:0},
    devices:{type:Number,default:0},
    OTP:{type:String},
    temporary:{
        code:{type:Number}
    }
}, { timestamps: true })
let planSchema = mongoose.Schema({
    planType:{type:String,required:true},
    planName:{type:String,required:true},
    cryptoName:{type:String,required:true},
    algorithm:{type:String,required:true},
    planDuration:{type:Number,required:true},
    profitability:{type:Number,required:true},
    price:{type:Number,required:true},
    availability:{type:Boolean,default:true}
}, { timestamps: true })
let planContractSchema = mongoose.Schema({
    demo:{type:Boolean,required:true},
    cryptoName:{type:String,required:true},
    startDate:{type:Date,required:true}, 
    endDate:{type:Date,required:true},
    totalMined:{type:Number,default:0},
    planStatus:{type:Boolean,default:true},
    hashPower:{type:Number,required:true},
    hourlyGains:[{
        date:{type:Date,default:0},
        profit:{type:Number,default:0}
    }],
    userID:{type:String,required:true},
    planID:{type:String,required:true}
})
let asicSchema = mongoose.Schema({
    asicName:{type:String,required:true},
    cryptoName:{type:String,required:true},
    algorithm:{type:String,required:true},
    hashPower:{type:Number,required:true},
    price:{type:Number,required:true},
    hostFees:{type:Number,required:true},
    availability:{type:Boolean,default:true}
}, { timestamps: true })
let asicContractSchema = mongoose.Schema({
    hostFees:{type:Number,required:true},
    asicStatus:{type:Boolean,default:false},  //status:false = On-demand but not working
    expired:{type:Boolean,default:false},
    startDate:{type:Date}, 
    address:{type:String},
    workerID:{type:String},
    userID:{type:String,required:true},
    asicID:{type:String,required:true}
}, { timestamps: true })
let depositSchema = mongoose.Schema({
    amount:{type:Number,required:true},
    transactionStatus:{type:String,required:true},
    userID:{type:String,required:true}
}, { timestamps: true })
let withdrawalSchema = mongoose.Schema({
    address:{type:String,required:true},
    amount:{type:Number,required:true},
    transactionStatus:{type:String,required:true},
    userID:{type:String,required:true}
}, { timestamps: true })

exports._User = mongoose.model('user',userSchema)
exports._Plan = mongoose.model('plan',planSchema)
exports._PlanContract = mongoose.model('planContract',planContractSchema)
exports._Asic = mongoose.model('asic',asicSchema)
exports._AsicContract = mongoose.model('asicContract',asicContractSchema)
exports._Deposit = mongoose.model('deposit',depositSchema)
exports._Withdrawal = mongoose.model('withdrawal',withdrawalSchema)
exports._ADMIN = mongoose.model('admin',adminSchema)
