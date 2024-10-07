const { body, validationResult } = require('express-validator');

exports.dsaLeetcode = [
    // Validation middleware
    check("user_id").notEmpty().withMessage("Invalid input."),
    check("case_id").notEmpty().withMessage("Invalid input."),
    check("doc_id").notEmpty().withMessage("Invalid input."),
  
    // Controller logic
    async (req, res) => {
      // Check for validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(200).send({
          code: "200",
          message: "Invalid input."
        });
      }
      
      try {
       
      } catch (error) {
        
      }
    }
  ];
  