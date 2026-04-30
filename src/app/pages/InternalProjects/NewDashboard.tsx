import { useState } from "react";
import { Search, FileText, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function NewDashboard() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    if (!firstName && !lastName) return;

    setLoading(true);
    setResults([]);
    setSearched(true);

    try {
      const params = new URLSearchParams({
        version: "2.1",
        enumeration_type: "NPI-1",
        limit: "10",
      });

      if (firstName) {
        params.append("first_name", firstName.trim());
      }

      if (lastName) {
        params.append("last_name", lastName.trim());
      }

      //const res = await fetch(`/npi/api/?${params.toString()}`);

      // ✅ PRODUCTION (cPanel)
      const res = await fetch(`/npi.php?${params.toString()}`);

      const data = await res.json();
      setResults(Array.isArray(data.results) ? data.results : []);
    } catch (err) {
      console.error("Error:", err);
      setResults([]);
    }

    setLoading(false);
  };

  const cards = [
    {
      title: "Regulations and Guidance",
      desc: "Access comprehensive regulations and guidance documents",
      url: "https://www.cms.gov/marketplace/resources/regulations-guidance",
      icon: <FileText className="size-6 text-white" />,
    },
    {
      title: "Provider Enrollment",
      desc: "Register and manage provider enrollment",
      route: "/services/in-house-projects/providerenrollment",
      icon: <FileText className="size-6 text-white" />,
    },
    {
      title: "FAQs",
      desc: "Find answers to common questions",
      url: "https://www.cms.gov/marketplace/resources/fact-sheets-faqs",
      icon: <HelpCircle className="size-6 text-white" />,
    },
    {
      title: "NPI Registry",
      desc: "Search providers by name",
      url: "https://npiregistry.cms.hhs.gov/search",
      icon: <Search className="size-6 text-white" />,
    },

  ];

  return (
    <div className="min-h-screen bg-[#0F172A]">

      {/* HERO */}
      <div className="relative w-full h-[350px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/80 via-[#1E293B]/70 to-[#A855F7]/60" />

        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div>
            <h1 className="text-white text-5xl mb-4">Internal Access</h1>
            <p className="text-white/80 text-xl">
              Healthcare Resources & Provider Tools
            </p>
          </div>
        </div>
      </div>

      {/* CARDS */}
      <div className="max-w-6xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid md:grid-cols-4 gap-6 items-stretch">
          {cards.map((item, i) => {
            const CardContent = (
              <div className="group h-full flex flex-col justify-between bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl py-3 px-8
                hover:border-[#22D3EE]/50 transition-all duration-300 
                hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
                <div className="flex flex-col items-center text-center gap-4 flex-grow">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center
                                  bg-gradient-to-r from-[#22D3EE] to-[#A855F7]
                                  group-hover:scale-110 transition">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-white text-lg mb-2 group-hover:text-[#22D3EE]">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transition text-[#22D3EE] text-sm">
                    Open →
                  </div>
                </div>
              </div>
            );

            if (item.route) {
              return (
                <Link key={i} to={item.route}>
                  {CardContent}
                </Link>
              );
            }

            return (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {CardContent}
              </a>
            );
          })}
        </div>
      </div>

      {/* NPI SEARCH */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-[#1e293b] rounded-2xl p-8 border border-white/10 shadow-xl">

          <h2 className="text-2xl text-white mb-6">NPI Quick Search</h2>

          <div className="flex gap-4 flex-wrap">
            <input
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="bg-[#020617] text-white px-4 py-3 rounded-lg w-60"
            />

            <input
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="bg-[#020617] text-white px-4 py-3 rounded-lg w-60"
            />

            <button
              onClick={handleSearch}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 hover:opacity-90"
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>

          {/* RESULTS */}
          <div className="mt-6">
            {loading && <p className="text-cyan-400">Loading...</p>}

            {!loading && searched && results.length === 0 && (
              <p className="text-red-400">No providers found.</p>
            )}

            {results.map((r, i) => {
              const location =
                r.addresses?.find((a: any) => a.address_purpose === "LOCATION") ||
                r.addresses?.[0];

              const primaryTax =
                r.taxonomies?.find((t: any) => t.primary) ||
                r.taxonomies?.[0];

              return (
                <div
                  key={i}
                  className="mt-4 p-4 bg-[#020617] rounded-lg border border-white/10"
                >
                  <p><b>NPI:</b> {r.number}</p>
                  <p><b>Name:</b> {r.basic?.first_name} {r.basic?.last_name}</p>
                  <p><b>Phone:</b> {location?.telephone_number || "N/A"}</p>
                  <p>
                    <b>Address:</b>{" "}
                    {location
                      ? `${location.address_1}, ${location.city}, ${location.state}`
                      : "N/A"}
                  </p>
                  <p><b>Specialty:</b> {primaryTax?.desc || "N/A"}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}


