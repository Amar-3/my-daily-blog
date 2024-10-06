import React ,{useState} from "react";
import "./Typewriter.css";

const Typewriter = () => {
    
  const [formData, setFormData] = useState({
    tag: "",
    flowchart: "",
    function: "",
    story: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // Make the API call using fetch
        const response = await fetch('https://your-backend-api-url.com/endpoint', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        // Check if the response is successful
        if (response.ok) {
          const data = await response.json();
          console.log('Form Data Submitted:', data);
          alert('Form successfully submitted!');
          // Optionally reset form fields
          setFormData({
            tag: "",
            flowchart: "",
            function: "",
            story: "",
          });
        } else {
          console.error('Error submitting the form', response.statusText);
          alert('Failed to submit the form. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error occurred while submitting the form.');
      }
  };

  return (
    <div>
      take all input from user than store that into an object send that object
      to backend
      <br /> backend will store that using appropriate routing to backend.
       thats the part fronted going to do.
        on frontend i can only storw data into my local storage 

      <form onSubmit={handleSubmit}>
        {/* Tag Input */}
        <div>
          <label htmlFor="tag">Tag:</label>
          <input
            type="text"
            id="tag"
            name="tag"
            value={formData.tag}
            onChange={handleChange}
            required
          />
        </div>

        {/* Flowchart Input */}
        <div>
          <label htmlFor="flowchart">Flowchart:</label>
          <input
            type="text"
            id="flowchart"
            name="flowchart"
            value={formData.flowchart}
            onChange={handleChange}
            required
          />
        </div>

        {/* Function Input */}
        <div>
          <label htmlFor="function">Function:</label>
          <input
            type="text"
            id="function"
            name="function"
            value={formData.function}
            onChange={handleChange}
            required
          />
        </div>

        {/* Story Textarea */}
        <div>
          <label htmlFor="story">Story:</label>
          <textarea
            id="story"
            name="story"
            value={formData.story}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Typewriter;
