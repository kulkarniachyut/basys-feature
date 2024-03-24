const AppealStatuses = Object.freeze({
    Attempted: 'Attempted',
    ReviewPending : 'ReviewPending',
    RequestMoreInfo: 'RequestMoreInfo',
    RequestReview : 'RequestReview',
    Approved : 'Approved',
    Denied : 'Denied'
  });

  const PeerReviewerType = Object.freeze({
    Provider: 'Provider',
    Payer: 'Payer',
    RN : 'RN',
    Doctor : 'Doctor'
  });
  

  module.exports = {
    AppealStatuses,
    PeerReviewerType
  }