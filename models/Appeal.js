const mongoose = require('mongoose');
const {AppealStatuses, PeerReviewerType} = require('../config/general');
const validator = require('validator');
const { toJSON, paginate } = require('./plugins');



const PeerReviewSchema = mongoose.Schema({

    author : {
      type : String,
      enum: Object.keys(PeerReviewerType),
    },
    comment : {
      type : String,    
    },
    updated_files : {
        type : [String],
        default : []
    },
    extracted_info : {
        type : String
    }
  },
  {_id : false},
  { timestamps: true },

)

const AppealSchema = mongoose.Schema( {

    patient_id : {
        required : true,
        type : String
    },
    policy_id : {
        required : true,
        type : String
    },
    request_info : {
        type : String
    },
    request_files : {
        type : [String],
        default : []
    },
    provider_status : {
        type : String,
        emum : [AppealStatuses.Attempted, AppealStatuses.RequestReview],    
    },
    payer_status : {
        type : String,
        emum : [AppealStatuses.RequestMoreInfo, AppealStatuses.Approved, AppealStatuses.Denied],    
    },
    appeal_status : {
        // required : true,
        type : String,
        emum : [AppealStatuses.Attempted,AppealStatuses.RequestMoreInfo, AppealStatuses.RequestReview, AppealStatuses.ReviewPending, AppealStatuses.Approved, AppealStatuses.Denied],    
        // default : [AppealStatuses.Attempted]
    },
    extracted_info : {
        type : String
    },
    peer_review : [{
        type : PeerReviewSchema,
        default : []
    }]
},
{ timestamps: true },)

AppealSchema.plugin(toJSON);
AppealSchema.plugin(paginate);

const Appeal = mongoose.model('Appeal', AppealSchema);
module.exports = Appeal;