"use client";

const serif = '"Times New Roman", Times, serif';

export default function ImprintPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div
        className="bg-white rounded border border-gray-300 p-8 sm:p-12"
        style={{ fontFamily: serif }}
      >
        <div className="text-center border-b-2 border-gray-900 pb-6 mb-8">
          <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-2">
            Business Identity and Responsibility for Content
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Imprint and Business Information
          </h1>
          <p className="text-sm text-gray-600 mt-3">
            Last Updated: September 20, 2026. Domain: https://yvonnecollection.org
          </p>
        </div>

        <div className="space-y-7 text-gray-800 leading-[1.9] text-[16px] text-justify">
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Section 1. Business Operator</h2>
            <p>Business Name: Yvonne Collection.</p>
            <p className="mt-2">Legal Form: Registered Business Name with the Corporate Affairs Commission of the Federal Republic of Nigeria.</p>
            <p className="mt-2">Registration Number: DE19202.</p>
            <p className="mt-2">Registration Date: April 16, 2010, under the Companies and Allied Matters Act 1990, Section 659.</p>
            <p className="mt-2">Current Business Address: Shop 2, Lofty Plaza, N041 Chukwuocha Street, Zenith Block, Summit Junction, Asaba, Delta State, Nigeria.</p>
            <p className="mt-2">Nature of Business as Registered: General Merchandise and Trading, Interior and Exterior Decorations, Beauty Services and Boutique.</p>
            <p className="mt-2">Founder and Proprietor: Yvonne Maduemezia, born and raised in Ibusa, Delta State, Nigeria, and a graduate of the University of Nigeria, Nsukka.</p>
            <p className="mt-2">
              Address Note: The certificate issued in 2010 records the original address at Shop 14, R1-An Plaza, Plot 56, Direct Labour Agency Road, Asaba. The business relocated in 2016 to the current address stated above. The registration name, number and date remain valid. An update of the filed address with the Commission is planned as a separate administrative filing.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Section 2. Contact Details</h2>
            <p>Electronic mail for all matters, including legal, privacy and orders: <a href="mailto:yvonnecollection23@gmail.com" className="underline">yvonnecollection23@gmail.com</a>.</p>
            <p className="mt-2">WhatsApp: <a href="https://wa.me/2347043793765" className="underline">+234 704 379 3765</a>.</p>
            <p className="mt-2">Instagram: <a href="https://instagram.com/easewithyvonne" target="_blank" rel="noopener noreferrer" className="underline">@easewithyvonne</a>, which also receives store inquiries by direct message.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Section 3. Ease with Yvonne Initiative</h2>
            <p>
              The pages under https://yvonnecollection.org/ease describe the Ease with Yvonne Initiative, a community initiative focused on counseling support, widows outreach, school outreach, orphanage visitation and sanctuary visits.
            </p>
            <p className="mt-2">
              The Initiative is not separately registered as a nonprofit foundation at the date of this Imprint. No tax deductible donations are solicited on this website. Should the Initiative be incorporated as a body of trustees or other nonprofit vehicle in the future, the incorporation number, registered address and trustees will be published in this Imprint.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Section 4. Responsibility for Content</h2>
            <p>
              Responsibility for the content of this website rests with Yvonne Maduemezia, who directs content selection and curation. Product descriptions are prepared with care and confirmed with suppliers before sale. Fabric composition, sizing and color are confirmed in writing with each customer before payment.
            </p>
            <p className="mt-2">
              Misrepresentation of goods is an offence under the Federal Competition and Consumer Protection Act. Customers are encouraged to review written confirmations carefully and to retain chat records and receipts.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Section 5. Intellectual Property and Image Rights</h2>
            <p>
              All content on this website is owned by the Business or used with permission. Product images require owner permission and, where applicable, model release. A former third party band themed artwork has been archived and disabled and is not offered for sale. A vintage vinyl themed item has likewise been withheld from sale pending confirmation of original or duly licensed artwork, and will only be listed once that confirmation exists.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Section 6. Regulatory References</h2>
            <p>
              Consumer transactions described on this website are subject to the Federal Competition and Consumer Protection Act. Data handling is subject to the Nigeria Data Protection Act 2023 and, where applicable, the European Union General Data Protection Regulation. Accessibility practice follows the Web Content Accessibility Guidelines 2.1 Level AA as described in the Accessibility Statement.
            </p>
          </div>

          <div className="pt-6 border-t border-gray-300 text-sm text-gray-600 text-center">
            <p>End of Imprint. This document should be read together with the Privacy Policy, Terms of Use, Shipping and Returns, and Refund Policy.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
