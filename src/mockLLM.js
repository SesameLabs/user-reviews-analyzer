export const analyzeReviewsBatch = async (reviews) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Return the reviews in JSON format directly from the sample_reviews.csv
  return reviews.map(review => {
    return {
      review_id: review.review_id,
      reviewer_name: review.reviewer_name,
      date: review.date,
      review_text: review.review_text,
      persona: review.persona,
      text_highlight_related_to_persona: review.text_highlight_related_to_persona,
      positive_feedback: review.positive_feedback,
      text_highlight_related_to_positive_feedback: review.text_highlight_related_to_positive_feedback,
      constructive_feedback: review.constructive_feedback,
      text_highlight_related_to_constructive_feedback: review.text_highlight_related_to_constructive_feedback
    };
  });
};