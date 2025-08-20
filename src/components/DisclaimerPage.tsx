import React from 'react';
import { Helmet } from 'react-helmet-async';

const DisclaimerPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Disclaimer | Cross Stitch Pattern Maker</title>
        <meta name="description" content="Important disclaimers regarding the use of our cross stitch pattern maker tool and website." />
        <meta name="robots" content="noindex" />
      </Helmet>

      {/* Disclaimer Header */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Disclaimer</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Last updated: June 24, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2>Website Disclaimer</h2>
            <p>
              The information provided by Cross Stitch Pattern Maker ("we," "us," or "our") on our website is for general informational purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
            </p>
            <p>
              Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
            </p>

            <h2>External Links Disclaimer</h2>
            <p>
              The site may contain (or you may be sent through the site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
            </p>
            <p>
              We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site or any website or feature linked in any banner or other advertising. We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services.
            </p>

            <h2>Professional Disclaimer</h2>
            <p>
              The site cannot and does not contain professional advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals.
            </p>
            <p>
              We do not provide any kind of professional advice. The use or reliance of any information contained on this site is solely at your own risk.
            </p>

            <h2>Testimonials Disclaimer</h2>
            <p>
              The site may contain testimonials by users of our products and/or services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our products and/or services. We do not claim, and you should not assume, that all users will have the same experiences.
            </p>
            <p>
              Your individual results may vary. The testimonials on the site are submitted in various forms such as text, audio and/or video, and are reviewed by us before being posted. They appear on the site verbatim as given by the users, except for the correction of grammar or typing errors. Some testimonials may have been shortened for the sake of brevity where the full testimonial contained extraneous information not relevant to the general public.
            </p>
            <p>
              The views and opinions contained in the testimonials belong solely to the individual user and do not reflect our views and opinions.
            </p>

            <h2>Errors and Omissions Disclaimer</h2>
            <p>
              While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, Cross Stitch Pattern Maker is not responsible for any errors or omissions, or for the results obtained from the use of this information. All information in this site is provided "as is", with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied.
            </p>
            <p>
              In no event will Cross Stitch Pattern Maker, its related partnerships or corporations, or the partners, agents or employees thereof be liable to you or anyone else for any decision made or action taken in reliance on the information in this site or for any consequential, special or similar damages, even if advised of the possibility of such damages.
            </p>

            <h2>Fair Use Disclaimer</h2>
            <p>
              This site may contain copyrighted material the use of which has not always been specifically authorized by the copyright owner. We are making such material available in our efforts to provide information and education about cross stitching and pattern creation. We believe this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the US Copyright Law.
            </p>
            <p>
              If you wish to use copyrighted material from this site for purposes of your own that go beyond "fair use", you must obtain permission from the copyright owner.
            </p>

            <h2>Views Expressed Disclaimer</h2>
            <p>
              The views and opinions expressed in this site are those of the authors and do not necessarily reflect the official policy or position of any other agency, organization, employer or company. Assumptions made in the analysis are not reflective of the position of any entity other than the author(s).
            </p>

            <h2>No Responsibility Disclaimer</h2>
            <p>
              The information on this site is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of professional advice.
            </p>
            <p>
              The use or reliance of any information contained on this site is solely at your own risk. We shall not be liable to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Disclaimer, please contact us at:
            </p>
            <ul>
              <li>Email: legal@crossstitchpatternmaker.com</li>
              <li>Address: 123 Stitch Street, Craftville, CR 12345, United States</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default DisclaimerPage;
