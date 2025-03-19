/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { motion } from 'framer-motion';

export default function IPDMCANotices() {
  return (
    <div className="prose max-w-none prose-blue">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">IP / DMCA NOTICES</h1>
      <p className="text-gray-500 font-semibold mb-8">Effective Date: March 19, 2025</p>
      
      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">PhysiqueProAI Intellectual Property Notice of Infringement Procedure</h2>
      
      <p className="mb-6 text-gray-700 leading-relaxed">
        PhysiqueProAI takes seriously the intellectual property rights of others. If you believe that 
        your intellectual property rights have been infringed upon on our website or mobile application, 
        please send to our Support Team the following information:
      </p>
      
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700 leading-relaxed">
        <li>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
        <li>Identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works are covered by a single notification, a representative list of such works.</li>
        <li>Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit PhysiqueProAI to locate the material.</li>
        <li>Information reasonably sufficient to permit PhysiqueProAI to contact you, such as an address, telephone number, and, if available, an electronic mail address at which you may be contacted.</li>
        <li>A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
        <li>A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
      </ul>
      
      <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-md mb-6">
        <p className="font-bold text-gray-800">
          Contact the PhysiqueProAI Support Team: <a href="mailto:dmca@physiqueproai.com" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">dmca@physiqueproai.com</a>
        </p>
      </div>
      
      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">Repeat Infringers</h2>
      
      <p className="mb-6 text-gray-700 leading-relaxed">
        It is PhysiqueProAI's policy to terminate, in appropriate circumstances, the accounts of users who are repeat infringers. 
        We may also limit access to our Services and/or terminate the accounts of any users who infringe any intellectual property 
        rights of others, whether or not there is any repeat infringement.
      </p>
      
      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">Counter-Notice</h2>
      
      <p className="mb-6 text-gray-700 leading-relaxed">
        If you believe that your content that was removed (or to which access was disabled) is not infringing, or that you have 
        the authorization from the copyright owner, the copyright owner's agent, or pursuant to the law, to post and use the 
        material in your content, you may send a counter-notice containing the following information to our designated 
        copyright agent:
      </p>
      
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700 leading-relaxed">
        <li>Your physical or electronic signature;</li>
        <li>Identification of the content that has been removed or to which access has been disabled and the location at which the content appeared before it was removed or disabled;</li>
        <li>A statement that you have a good faith belief that the content was removed or disabled as a result of mistake or a misidentification of the content; and</li>
        <li>Your name, address, telephone number, and email address, a statement that you consent to the jurisdiction of the federal court in Delaware, and a statement that you will accept service of process from the person who provided notification of the alleged infringement.</li>
      </ul>
      
      <p className="mb-6 text-gray-700 leading-relaxed">
        If a counter-notice is received by our copyright agent, we may send a copy of the counter-notice to the original 
        complaining party informing that person that we may replace the removed content or cease disabling it in 10 business 
        days. Unless the copyright owner files an action seeking a court order against the content provider, member or user, 
        the removed content may be replaced, or access to it restored, in 10 to 14 business days or more after receipt of 
        the counter-notice, at our sole discretion.
      </p>
    </div>
  );
}