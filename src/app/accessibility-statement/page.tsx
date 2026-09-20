"use client";

const serif = '"Times New Roman", Times, serif';

export default function AccessibilityStatement() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div
        className="bg-white rounded border border-gray-300 p-8 sm:p-12"
        style={{ fontFamily: serif }}
      >
        <div className="text-center border-b-2 border-gray-900 pb-6 mb-8">
          <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-2">
            Yvonne Collection and Ease with Yvonne Initiative
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Accessibility Statement
          </h1>
          <p className="text-sm text-gray-600 mt-3">
            Last Updated: September 20, 2026. Standard: Web Content Accessibility Guidelines 2.1 Level AA.
          </p>
        </div>

        <div className="space-y-7 text-gray-800 leading-[1.9] text-[16px] text-justify">
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Section 1. Commitment</h2>
            <p>
              Yvonne Collection and the Ease with Yvonne Initiative are committed to ensuring that this website is accessible to all users, including persons with disabilities. Our objective is to conform to the Web Content Accessibility Guidelines 2.1 Level AA, the internationally recognized standard for web accessibility, across the store pages, the Initiative pages and the legal documents.
            </p>
            <p className="mt-2">
              Accessibility is treated as a continuing responsibility rather than a single project. Design, content and development decisions are reviewed for accessibility impact before release.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Section 2. Measures in Place</h2>
            <p>The following measures are applied to support accessibility:</p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-left">
              <li>Semantic page structure with clear headings, landmarks and descriptive link text;</li>
              <li>Keyboard operability for navigation, menus and calls to action, with visible focus indication;</li>
              <li>Text alternatives for meaningful images, including product photographs and founder portraits;</li>
              <li>Sufficient color contrast for body text, with a minimum ratio of 4.5 to 1 for normal text;</li>
              <li>Skip navigation link, labeled main content regions, and expanded state announcements for menus;</li>
              <li>Respect for reduced motion preferences, with animation minimized where such preference is set;</li>
              <li>Readable type sizes, generous line spacing and layouts that remain usable at increased zoom.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Section 3. Legal Documents in Readable Form</h2>
            <p>
              The Privacy Policy, Terms of Use, Imprint, Shipping and Returns, Refund Policy and this Accessibility Statement are presented in Times New Roman with structured articles and sections, justified body text and clear headings, so that they read as formal documents suitable for review, printing and record keeping.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Section 4. Known Limitations</h2>
            <p>
              Despite careful review, some pages or features may not yet be fully accessible in every combination of browser, assistive technology and device. Decorative imagery is marked as such. Third party services used for communication and delivery, including WhatsApp, Instagram and courier tracking pages, are subject to their own accessibility practices which are outside our direct control.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Section 5. Assessment Method</h2>
            <p>
              Before each release, the website is reviewed with automated and manual methods, including Lighthouse and axe core audits, keyboard only walkthroughs, and inspection of alternative text, contrast, focus order and heading structure. Issues identified through self assessment or user reports are recorded and addressed according to severity.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Section 6. Feedback and Contact</h2>
            <p>
              If you encounter an accessibility barrier, please contact us so that the issue can be addressed promptly. Reports should include the page address, the device and browser used, any assistive technology in use, and a description of the difficulty encountered.
            </p>
            <p className="mt-2">
              Electronic mail: <a href="mailto:yvonnecollection23@gmail.com" className="underline">yvonnecollection23@gmail.com</a>. WhatsApp: +234 704 379 3765. Postal address: Yvonne Collection, Shop 2, Lofty Plaza, N041 Chukwuocha Street, Zenith Block, Summit Junction, Asaba, Delta State, Nigeria.
            </p>
            <p className="mt-2">
              Accessibility reports are triaged within 7 days. Where immediate correction is not possible, a reasonable alternative or workaround will be provided on request.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Section 7. Compatibility</h2>
            <p>
              This website is designed to be compatible with current versions of major browsers and with commonly used screen readers. Content remains readable and navigable when style sheets or images are disabled, though presentation is enhanced when they are enabled.
            </p>
          </div>

          <div className="pt-6 border-t border-gray-300 text-sm text-gray-600 text-center">
            <p>End of Accessibility Statement. This document should be read together with the Privacy Policy, Terms of Use and Imprint.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
