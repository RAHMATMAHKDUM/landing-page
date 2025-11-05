export default function TeamPage() {
  const teamMembers = [
    {
      name: "Rahmat Mahkdum",
      position: "Frontend Developer",
      image: "/profil1.jpg"
    },
    {
      name: "Zakaria Ahmada",
      position: "Frontend Developer",
      image: "/profil2.jpg"
    },
    {
      name: "Ulya",
      position: "Backend Developer",
      image: "/profil3.jpg"
    },
    {
      name: "Nadia Durotul",
      position: "Backend Developer",
      image: "/profil4.jpg"
    }
  ];

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="py-16 px-8">
        {/* Wave Background */}
        <div className="absolute inset-0">
          <svg
            className="absolute bottom-0 w-full h-64 text-blue-50"
            preserveAspectRatio="none"
            viewBox="0 0 1440 320"
            fill="currentColor"
          >
            <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          <svg
            className="absolute bottom-0 w-full h-64 text-blue-100 opacity-50"
            preserveAspectRatio="none"
            viewBox="0 0 1440 320"
            fill="currentColor"
          >
            <path d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,112C672,107,768,149,864,154.7C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          <svg
            className="absolute top-0 w-full h-64 text-indigo-50 transform rotate-180"
            preserveAspectRatio="none"
            viewBox="0 0 1440 320"
            fill="currentColor"
          >
            <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto z-10">
          {/* Header Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/gettingresume.png" 
                alt="Team Logo" 
                className="w-8 h-8 object-contain"
              />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Tim Kami
              </h1>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed max-w-2xl">
              Kami adalah tim kolaboratif yang menggabungkan kreativitas dan teknologi untuk menghadirkan Gettingresume.
              Dengan visi bersama, kami bekerja sama untuk menciptakan solusi praktis agar setiap orang
              dapat membuat Resume & portofolio profesional dengan mudah dan cepat.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col group">
                {/* Photo Card */}
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-64 flex items-center justify-center mb-4 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className={`w-full h-full object-cover ${
                        member.name === "Ulya" ? "object-[center_top]" : "object-center"
                      }`}
                    />
                  ) : (
                    <span className="text-xl font-normal text-gray-400">Foto</span>
                  )}
                </div>
                
                {/* Member Info */}
                <div className="text-center">
                  <h3 className="font-semibold text-lg mb-1 text-gray-800">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="relative bg-gradient-to-r from-blue-200 to-indigo-500 text-white text-center py-6 z-10">
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <p className="relative text-sm">
          © 2025 Gettingresume. Semua hak cipta dilindungi.
        </p>
      </div>
    </div>
  );
}