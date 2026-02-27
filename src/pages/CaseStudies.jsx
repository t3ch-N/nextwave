import React from 'react';

function CaseStudies() {
  return (
    <div className="pt-20">
      <section className="relative text-white py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">Real-world impact and proven results</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Individual Consulting Services for Communication Specialist</h2>
            <p className="text-lg text-gray-600 mb-4">Contract No. KE-SDWS-521710-CS-INDV</p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-100 rounded-lg p-6">
                <img src="/images/case-studies/placeholder-1.jpg" alt="Project Overview" className="w-full h-64 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-bold mb-4">Project Overview</h3>
                <p className="text-gray-700 leading-relaxed">
                  Comprehensive communication services delivered for sustainable development and water sanitation projects across Kenya.
                </p>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-6">
                <img src="/images/case-studies/placeholder-2.jpg" alt="Scope of Work" className="w-full h-64 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-bold mb-4">Scope of Work</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Strategic communication planning and implementation</li>
                  <li>Stakeholder engagement and management</li>
                  <li>Media relations and press coordination</li>
                  <li>Content creation and documentation</li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Key Deliverables</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border rounded-lg p-6">
                  <img src="/images/case-studies/placeholder-3.jpg" alt="Communication Strategy" className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h4 className="text-xl font-semibold mb-3">Communication Strategy</h4>
                  <p className="text-gray-600">Developed comprehensive communication frameworks aligned with project objectives</p>
                </div>
                
                <div className="border rounded-lg p-6">
                  <img src="/images/case-studies/placeholder-4.jpg" alt="Media Coverage" className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h4 className="text-xl font-semibold mb-3">Media Coverage</h4>
                  <p className="text-gray-600">Secured extensive media coverage across national and regional outlets</p>
                </div>
                
                <div className="border rounded-lg p-6">
                  <img src="/images/case-studies/placeholder-5.jpg" alt="Stakeholder Reports" className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h4 className="text-xl font-semibold mb-3">Stakeholder Reports</h4>
                  <p className="text-gray-600">Regular reporting and documentation for all project stakeholders</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold mb-6">Impact & Results</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <img src="/images/case-studies/placeholder-6.jpg" alt="Impact Metrics" className="w-full h-64 object-cover rounded-lg mb-4" />
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">✓</span>
                      <span>Enhanced project visibility and public awareness</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">✓</span>
                      <span>Improved stakeholder engagement and satisfaction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">✓</span>
                      <span>Successful media campaigns reaching diverse audiences</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <img src="/images/case-studies/placeholder-7.jpg" alt="Project Success" className="w-full h-64 object-cover rounded-lg mb-4" />
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">✓</span>
                      <span>Timely delivery of all communication materials</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">✓</span>
                      <span>Positive feedback from project beneficiaries</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">✓</span>
                      <span>Strengthened partnerships with key stakeholders</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <img src="/images/case-studies/placeholder-8.jpg" alt="Project Gallery 1" className="w-full h-80 object-cover rounded-lg shadow-lg" />
              <img src="/images/case-studies/placeholder-9.jpg" alt="Project Gallery 2" className="w-full h-80 object-cover rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CaseStudies;
