# TeslaVolt

A responsive React and Vite website for independent vehicle, technology, energy, and customer enquiries.

## Run locally

```sh
npm install
npm run dev
```

Run `npm run build` to create the production site in `dist/`.

## Assets and integrations still needed

- **TeslaVolt logo:** The repository initially contained only `LICENSE`; no uploaded logo image was present. The site uses a text-only TeslaVolt wordmark rather than inventing or substituting a logo. Add the original image when it is available, then use that same asset in the header, footer, and favicon.
- **Chaport:** The supplied existing widget installation is included once in `index.html` with its original App ID. The site calls the documented `window.chaport.open()` method when the widget is loaded. Chaport's [published JavaScript API](https://docs.chaport.com/api/js/v1/) documents opening the widget but not pre-filling a message, so investment enquiries are prepared for copying and pasting. Visitors must review and send messages themselves.
- **Authorized media:** Vehicle images are labeled representative and do not claim to depict the named models. Replace them with authorized, model-specific TeslaVolt media before presenting them as exact vehicle photography. The Full Self-Driving (Supervised) area intentionally remains a video placeholder until a genuine, authorized road demonstration is supplied.
- **Contact and legal details:** Contact information and the privacy notice are placeholders. Replace them with verified business contact details and have qualified counsel review applicable privacy and investment-enquiry disclosures before launch. The image URLs are served by Unsplash; disclose applicable third-party requests. If Chaport is connected, include its relevant data processing in the published privacy notice.

TeslaVolt is presented as independent and does not claim affiliation with or endorsement by Tesla, Inc.
