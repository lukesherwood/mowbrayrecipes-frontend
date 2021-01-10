import Form from "react-bootstrap/Form";

const SelectFormField = ({ input, options }) => {
  return (
    <Form.Control
      as="select"
      className="mb-2 mr-sm-2"
      size="sm"
      name={input}
      onChange={(event) => this.handleChange(event)}
      value={input}
    >
      <option value="">Select...</option>
      {options.map((option, index) => (
        <option key={index}>{option}</option>
      ))}
    </Form.Control>
  );
};
export { SelectFormField };
