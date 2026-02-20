const hackathons = [
    "Hack Matrix - IIT Patna",
    "Code Red - IEEE NIT Karnataka",
    "Hack Summit - Plaksha University (III)",
    "Hackemon - Chandigarh University",
    "Zinnovatio - Chandigarh University",
    "Zinnovatio 2.0 - Chandigarh University",
    "GNA 3.0 - GNA University (V)",
    "Hacked 3.0 - BML Munjal University (IV)"
  ]
  
  function Hackathons() {
    return (
      <div className="min-h-screen py-24 bg-gradient-to-br from-white to-rose-50 px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-rose-600">
          Hackathons & Extra Curricular
        </h2>
  
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {hackathons.map((item, index) => (
            <div key={index} className="bg-rose-50 p-6 rounded-2xl shadow-md border border-rose-200">
              {item}
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default Hackathons
  