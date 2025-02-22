import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const familyMembers = [
  {
    name: "John Smith",
    relation: "Father",
    age: 55,
    occupation: "Architect",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    contact: {
      email: "john@example.com",
      phone: "+1 234 567 890"
    },
    hobbies: ["Golf", "Photography", "Cooking"]
  },
  {
    name: "Mary Smith",
    relation: "Mother",
    age: 52,
    occupation: "Professor",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    contact: {
      email: "mary@example.com",
      phone: "+1 234 567 891"
    },
    hobbies: ["Painting", "Gardening", "Reading"]
  },
  {
    name: "Emma Smith",
    relation: "Sister",
    age: 25,
    occupation: "Software Engineer",
    location: "San Francisco, USA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    contact: {
      email: "emma@example.com",
      phone: "+1 234 567 892"
    },
    hobbies: ["Travel", "Music", "Yoga"]
  }
];

export default function Family() {
  return (
    <section className="section-padding bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-8 h-8 text-red-500 mr-3" />
            <h2 className="text-4xl font-bold">Family</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the wonderful people who make up my family and support system
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {familyMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image Section */}
              <div className="relative h-64">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">{member.name}</h3>
                  <p className="text-white/80">{member.relation}</p>
                </div>
              </div>

              {/* Details Section */}
              <div className="p-6 space-y-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{member.location}</span>
                </div>

                {/* Occupation & Age */}
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="font-medium text-blue-900">{member.occupation}</p>
                  <p className="text-blue-700">{member.age} years old</p>
                </div>

                {/* Hobbies */}
                <div>
                  <p className="font-medium text-gray-700 mb-2">Hobbies</p>
                  <div className="flex flex-wrap gap-2">
                    {member.hobbies.map((hobby, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {hobby}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t pt-4 mt-4">
                  <div className="flex items-center text-gray-600 mb-2">
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="text-sm">{member.contact.email}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="text-sm">{member.contact.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}