"use client";

const serif = '"Times New Roman", Times, serif';

export default function RefundPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div
        className="bg-white rounded border border-gray-300 p-8 sm:p-12"
        style={{ fontFamily: serif }}
      >
        <div className="text-center border-b-2 border-gray-900 pb-6 mb-8">
          <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-2">
            Yvonne Collection Manual Payment Policy
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Refund Policy
          </h1>
          <p className="text-sm text-gray-600 mt-3">
            Last Updated: September 20, 2026. All payments are manual and confirmed in writing before payment.
          </p>
        </div>

        <div className="space-y-7 text-gray-800 leading-[1.9] text-[16px] text-justify">
          <div className="bg-gray-50 border border-gray-300 p-5 text-left">
            <p className="font-bold text-gray-900 mb-1">Scope</p>
            <p>
              This website does not accept payment online. All payments are manual, including bank transfer, USSD and cash on delivery where offered, and are confirmed in chat before payment. This Policy governs those manual payments. It should be read together with Shipping and Returns, which states order confirmation, delivery and exchange procedures.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Article 1. When a Refund Applies</h2>
            <p>A full refund applies in the following cases:</p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-left">
              <li>An item paid for is never dispatched and the Customer cancels before dispatch;</li>
              <li>An item received is materially not as described or is defective, as verified by photographs, where replacement is not preferred or not available;</li>
              <li>The Business cannot fulfill a confirmed order because of stock unavailability, supplier failure or other inability to perform.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Article 2. When a Refund Does Not Apply</h2>
            <p>A refund does not apply in the following cases, except as required by law:</p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-left">
              <li>Change of mind after dispatch, for which exchange is available under Shipping and Returns;</li>
              <li>Size dissatisfaction where size guidance was provided and size was confirmed in writing;</li>
              <li>Graphic tees or other items that have been washed, worn, altered or marked, except where defective on arrival;</li>
              <li>Courier delays that do not amount to loss, for which redelivery and tracking support are provided.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Article 3. Request Procedure and Timeline</h2>
            <p>
              3.1 Refund requests should be made within 48 hours of delivery through WhatsApp at +234 704 379 3765 or electronic mail to yvonnecollection23@gmail.com, with full name, order conversation date, product identifier, proof of payment and clear photographs where the issue is visible.
            </p>
            <p className="mt-2">
              3.2 Approved refunds are processed to the original payment method or to a verified bank account provided by the Customer within 7 to 14 Business Days. Business Day means Monday to Friday excluding Nigerian public holidays.
            </p>
            <p className="mt-2">
              3.3 Courier and delivery fees are not refundable unless the error giving rise to the refund was caused by the Business or the Courier acting on its behalf.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Article 4. Inspection and Verification</h2>
            <p>
              The Business may request additional photographs, video, return of the item, or inspection by the Courier before approval. Customers should retain items and packaging in their received condition pending resolution. Failure to preserve evidence may delay assessment but does not remove statutory rights.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Article 5. Donations and the Initiative</h2>
            <p>
              The Ease with Yvonne Initiative does not accept online donations through this website. Any request for donations received outside this website should be verified through <a href="mailto:yvonnecollection23@gmail.com" className="underline">yvonnecollection23@gmail.com</a> and WhatsApp +234 704 379 3765 before any action is taken. A separate donations policy will be published if donation channels are introduced in the future.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Article 6. Consumer Rights and Dispute Resolution</h2>
            <p>
              6.1 Nothing in this Policy limits rights under the Federal Competition and Consumer Protection Act or other applicable law. Customers should contact the Business first to allow prompt resolution.
            </p>
            <p className="mt-2">
              6.2 Unresolved disputes may be referred to the Federal Competition and Consumer Protection Commission in accordance with its procedures, without prejudice to the right to seek redress before a competent court.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Article 7. Contact</h2>
            <p>
              Questions concerning refunds should be directed to <a href="mailto:yvonnecollection23@gmail.com" className="underline">yvonnecollection23@gmail.com</a>, or through WhatsApp at +234 704 379 3765. Postal correspondence may be directed to Yvonne Collection, Shop 2, Lofty Plaza, N041 Chukwuocha Street, Zenith Block, Summit Junction, Asaba, Delta State, Nigeria.
            </p>
          </div>

          <div className="pt-6 border-t border-gray-300 text-sm text-gray-600 text-center">
            <p>End of Refund Policy. This document should be read together with Shipping and Returns, Terms of Use, Privacy Policy and Imprint.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
