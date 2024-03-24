const httpStatus = require('http-status');
const {AppealStatuses, PeerReviewerType} = require('../config/general');


const Appeal = require('../models/Appeal');


const createAppeal = async (data, files) => {

    data_files = []
    files.forEach(file => {
        data_files.push(file.path)
    });


    /*
    const extractedInfo = await extractDataFromFiles (files)
    **/
    

    appealBody = {
        patient_id : data.patient_id,
        policy_id : data.policy_id,
        request_info : data.request_info,
        request_files : data_files,
        provider_status : "Attempted",
        appeal_status : "ReviewPending",
        extracted_info : "This is a place where data from the files will be extracted"
    }

    const appeal = await Appeal.create(appealBody);
    
    console.log("appeal : " , appeal)

    return appeal;
};


const reviewAppeal = async (data, files) => {

    data_files = []
    files.forEach(file => {
        data_files.push(file.path)
    });

    /*
    const extractedInfo = await extractDataFromFiles (files)
    **/
    
    console.log(data.appeal_id)
    const appealDb = await getAppealById(data.appeal_id);

        peerReview = {
            author : data.peerType,
            comment : data.data,
            updated_files : data_files,
            extracted_info : "This is a place where data from the files will be extracted"

        }

        review = appealDb.peer_review,
        review.push(peerReview)

        appealData = {
            peer_review : review,
        }

               
        if(data.peerType == "Provider") {
            appealData.provider_status = data.status
        }
        if(data.peerType == "Payer") {
            appealData.payer_status = data.status
            appealData.appeal_status =  data.status

        }


        let appeal_updated = await Appeal.updateOne({_id : data.appeal_id},appealData);
        const appeal = await getAppealById(data.appeal_id);
        return appeal
    
    // return appeal;
};



const getAppealById = async (id) => {
    const appeal = await Appeal.findById(id);  
    return appeal;
  };


  

module.exports = {
createAppeal,
reviewAppeal
}