import React, { useState } from "react";
import "./Typewriter.css";

const Typewriter = () => {
  const [formData, setFormData] = useState({
    heading: "",
    hashtags: "",
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
      const response = await fetch(
        "https://your-backend-api-url.com/endpoint",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      // Check if the response is successful
      if (response.ok) {
        const data = await response.json();
        console.log("Form Data Submitted:", data);
        alert("Form successfully submitted!");
        // Optionally reset form fields
        setFormData({
          tag: "",
          flowchart: "",
          function: "",
          story: "",
        });
      } else {
        console.error("Error submitting the form", response.statusText);
        alert("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error occurred while submitting the form.");
    }
  };

  return (
    <div>

      <form onSubmit={handleSubmit}>
        {/* Tag Input */}
        <div>
          <label htmlFor="heading">Heading:</label>
          <input
            type="text"
            id="heading"
            name="heading"
            value={formData.heading}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="hashtags">#tags:</label>
          <input
            type="text"
            id="hashtags"
            name="hashtags"
            value={formData.hashtags}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="canvas">Canvas:</label>
          <input
            type="text"
            id="canvas"
            name="canvas"
            value={formData.canvas}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="flowchart"> type arrow marked control flow :</label>
          <input
            type="text"
            id="flowchart"
            name="flowchart"
            value={formData.flowchart}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="function">application scope:</label>
          <input
            type="text"
            id="function"
            name="function"
            value={formData.function}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="story">thats how it works:</label>
          <textarea
            id="story"
            name="story"
            value={formData.story}
            onChange={handleChange}
            rows="1"
            required
          />
        </div>
        <div>
          <label htmlFor="hardwarestory">Hardware in operation:</label>
          <textarea
            id="hardwarestory"
            name="hardwarestory"
            value={formData.hardwarestory}
            onChange={handleChange}
            
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

    </div>
  );
};

export default Typewriter;
