const Contact = () => {
  return (
    <>
      <h1 className="font-bold text-3xl mb-4">Contact Us Page</h1>
      <form>
        <input type="text" className="border border-black" placeholder="Name" />
        <input
          type="text"
          className="border border-black"
          placeholder="Message"
        />
        <button>Submit</button>
      </form>
    </>
  );
};
export default Contact;
