import "./Contact.css"

const Contact = () => {
  const handleFormSubmit = (formData) =>{
    // console.log(formData.entries);
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };




  return (
    <section className="section-contacts">
      <h2 className="container-titlee">Contact Us</h2>

      <div className ="contact-wrapper containere">
      <form action={handleFormSubmit}>
        <input
          type="text" 
          required 
          autoComplete="off" 
          placeholder="Enter your Name"
          name="username" 
        />

        <input
          type="email" 
          className="form-controle" 
          placeholder="Enter your email"
          name="email"
          required
          autoComplete="off" 
        />

        <textarea
          className="form-controle" 
          rows="10"
          placeholder="Enter your message"
          name="message"
          required
          autoComplete="off" 
        ></textarea>

        <button type="submit">Send Message</button> 
      </form>
      </div>
    </section>
  );
};

export default Contact;
