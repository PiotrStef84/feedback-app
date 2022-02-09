import PropTypes from 'prop-types'

function FeedbackStats({feedback}) {
  // Calculate ratings avg
  let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
  }, 0) / feedback.length


  // This is to make sure we don't have more than one number after decimal point - e.g. no 7.55454
  average = average.toFixed(1).replace(/[.,]0$/, '')
  
  
  return <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
  </div>;
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired
}

export default FeedbackStats;
