# User Reviews Analyzer (Coding Assignment)

### Overview:
Build a React app that analyzes customer reviews from a CSV file using an AI-powered analysis (simulated via mock function provided).

Your goal is to present insights clearly, allowing marketers to quickly understand:
- Types of feedback: Positive, Constructive, and New Personas.
- Relevant review snippets.
- Counts and severity sorting.

### Provided functionality:
- CSV upload (already implemented)
- Mock LLM API call (`analyzeReviewsBatch`) provided in `mockLLM.js`

### How to run:
```bash
npm install
npm start
```

### Your Task:
Implement a user-friendly and clear UI that:
- Displays insights grouped by type of insight (Positive, Constructive, New Persona)
- Clearly shows review snippets related to each insight
- Allows sorting by sentiment type and severity & count. Severity is based on emotional intensity of the review. You might need to use LLM to determine the severity of the review.

### Focus Areas:
1. **Functionality Completion**
   - Ensure all core features are working correctly
   - Implement all required data processing and display capabilities

2. **Thoughtful Data Presentation**
   - Create intuitive ways to these insights.
   - Think from the perspective of a product manager who is responsible for the product, who looks at these insights every monday to make decisions for the week
   - How would you present these insights to the product team? What meta data would you include? And where
 
3. **UX/UI Polish**
    - Make it look nice and professional

