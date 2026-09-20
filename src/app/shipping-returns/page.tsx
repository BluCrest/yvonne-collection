"use client";

const serif = '"Times New Roman", Times, serif';

export default function ShippingReturnsPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div
        className="bg-white rounded border border-gray-300 p-8 sm:p-12"
        style={{ fontFamily: serif }}
      >
        <div className="text-center border-b-2 border-gray-900 pb-6 mb-8">
          <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-2">
            Yvonne Collection Manual Order Policy
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Shipping and Returns
          </h1>
          <p className="text-sm text-gray-600 mt-3">
            Last Updated: September 20, 2026. Applies to all manual WhatsApp and direct message orders until automated checkout is introduced.
          </p>
        </div>

        <div className="space-y-7 text-gray-800 leading-[1.9] text-[16px] text-justify">
          <div className="bg-gray-50 border border-gray-300 p-5 text-left">
            <p className="font-bold text-gray-900 mb-1">How Ordering Works</p>
            <p>
              This website does not operate a shopping cart and does not accept payment online. To order, contact us through WhatsApp at <a href="https://wa.me/2347043793765" className="underline">+234 704 379 3765</a>, Instagram direct message to @easewithyvonne, or electronic mail to yvonnecollection23@gmail.com. We confirm the exact item, size, color, availability, price including delivery, dispatch estimate and return terms in writing before you pay. Prices remain Contact for Price until so confirmed. Please retain screenshots and receipts of all confirmations.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Article 1. Definitions</h2>
            <p>
              1.1 Business means Yvonne Collection, Registration Number DE19202, of Shop 2, Lofty Plaza, N041 Chukwuocha Street, Zenith Block, Summit Junction, Asaba, Delta State, Nigeria. Customer means the person placing a manual order. Courier means the independent third party dispatch or logistics provider selected for delivery. Business Day means Monday to Friday excluding Nigerian public holidays.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Article 2. Order Confirmation</h2>
            <p>
              2.1 No binding agreement arises until the Business confirms in writing the item name and product identifier, size, color, total price including delivery, dispatch estimate and return window, and the Customer accepts and pays through an agreed manual method such as bank transfer, USSD or cash on delivery where offered.
            </p>
            <p className="mt-2">
              2.2 Customers should verify each element of the written confirmation before transferring funds. Where there is any inconsistency, the Customer should request correction before payment.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Article 3. Shipping and Delivery</h2>
            <p>
              3.1 The Business ships within Nigeria through reputable third party couriers, including national carriers and local dispatch providers. International delivery is available on request and is quoted individually.
            </p>
            <p className="mt-2">
              3.2 Delivery fees and timelines are quoted in chat based on destination, weight and service level. The Customer approves the fee and timeline before payment. Standard dispatch occurs within 2 to 5 Business Days after payment confirmation unless otherwise agreed in writing.
            </p>
            <p className="mt-2">
              3.3 Risk of loss passes to the Courier upon dispatch. The Business provides tracking information where the Courier makes it available and liaises with the Courier in cases of delay, damage or loss.
            </p>
            <p className="mt-2">
              3.4 Customers should provide a complete delivery name, telephone number and address, and should ensure availability to receive parcels. Redelivery or storage charges imposed by the Courier are the responsibility of the Customer unless caused by the fault of the Business.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Article 4. Inspection on Delivery</h2>
            <p>
              4.1 Customers should inspect items promptly upon delivery and retain all packaging until inspection is complete. Graphic prints are sensitive to washing and handling. Customers should follow care instructions and avoid washing or wearing items intended for exchange until a decision is made.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Article 5. Returns and Exchanges</h2>
            <p>
              5.1 Under the Federal Competition and Consumer Protection Act, goods must be as described, fit for purpose and of merchantable quality. Nothing in this Article limits those statutory rights.
            </p>
            <p className="mt-2">
              5.2 Where an item is wrong, damaged or materially not as described, the Customer should notify the Business within 48 hours of delivery with clear photographs of the item and packaging, together with proof of order and payment. Upon verification, the Business will offer repair, replacement or refund as appropriate.
            </p>
            <p className="mt-2">
              5.3 Where an item is correct but the Customer requests a change, unworn and unwashed items with original tags may be exchanged within 7 days of delivery, subject to stock availability. Return shipping for such exchanges is at the cost of the Customer.
            </p>
            <p className="mt-2">
              5.4 Graphic tees and sale items are exchange only unless defective or materially not as described. Items showing signs of wear, washing, alteration or fragrance will not be accepted for return. Size exchanges are not available where the Customer confirmed size in writing after receiving size guidance, except as required by law.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Article 6. Damage or Loss in Transit</h2>
            <p>
              6.1 In cases of suspected damage or loss in transit, the Customer should photograph the outer packaging and the item, retain the Courier receipt and tracking number, and notify the Business without delay. The Business will engage the Courier and, where loss or damage is verified, will provide replacement or refund at its discretion in accordance with the Refund Policy.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Article 7. Contact for Returns</h2>
            <p>
              Return requests should be directed to WhatsApp +234 704 379 3765 or electronic mail to yvonnecollection23@gmail.com, stating full name, date of order conversation, product identifier, nature of the issue and supporting photographs. The Business responds within 24 hours on Business Days.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Article 8. Amendments</h2>
            <p>
              This policy may be revised to reflect operational or legal changes. The Last Updated date records each revision. Orders confirmed before revision are governed by the version in effect at confirmation, together with mandatory consumer protection law.
            </p>
          </div>

          <div className="pt-6 border-t border-gray-300 text-sm text-gray-600 text-center">
            <p>End of Shipping and Returns. This document should be read together with the Refund Policy, Terms of Use, Privacy Policy and Imprint.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
