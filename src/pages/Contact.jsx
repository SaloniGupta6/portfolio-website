function Contact() {
    return (
      <div className="min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-pink-50 to-rose-100">
  
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-rose-200 w-full max-w-lg">
          <h2 className="text-3xl font-bold text-rose-600 mb-6 text-center">
            Contact Me
          </h2>
  
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 rounded-xl border border-rose-200 h-32 focus:outline-none focus:ring-2 focus:ring-rose-400"
            ></textarea>
  
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    )
  }
  
  export default Contact
  