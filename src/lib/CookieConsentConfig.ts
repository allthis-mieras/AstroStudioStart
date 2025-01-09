export const cookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: 'box inline',
      position: 'bottom left',
      equalWeightButtons: true,
      flipButtons: false,
    },
    preferencesModal: {
      layout: 'box',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },

  categories: {
    necessary: {
      readOnly: true,
      enabled: true,
    },

    analytics: {
      services: {
        youtube: {
          label: 'Youtube Embed',
          onAccept: () => (window as any).iframemanager().acceptService('youtube'),
          onReject: () => (window as any).iframemanager().rejectService('youtube'),
        },
        vimeo: {
          label: 'Vimeo Embed',
          onAccept: () => (window as any).iframemanager().acceptService('vimeo'),
          onReject: () => (window as any).iframemanager().rejectService('vimeo'),
        },
      },
    },

    ads: {},
  },

  language: {
    default: 'en',
    translations: {
      en: {
        consentModal: {
          label: "Cookie Consent",
          title: "Hello traveller, it's cookie time!",
          description: "Our website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent.",
          acceptAllBtn: "Accept all",
          closeIconLabel: "Reject all and close",
          acceptNecessaryBtn: "Reject all",
          showPreferencesBtn: "Manage preferences",
          footer: "<a href=\"#link\">Privacy Policy</a><a href=\"#link\">Terms and conditions</a>"
        },
        preferencesModal: {
          title: "Consent preferences center",
          acceptAllBtn: "Accept all",
          acceptNecessaryBtn: "Reject all",
          savePreferencesBtn: "Save preferences",
          closeIconLabel: "Close modal",
          serviceCounterLabel: "Service|Services",
          sections: [
            {
              title: "Somebody said ... cookies?",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
              title: "Strictly necessary cookies <span class=\"pm__badge\">Always enabled</span>",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              linkedCategory: "necessary"
            },
            {
              title: "Analytics cookies",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              linkedCategory: "analytics",
              cookieTable: {
                headers: {
                  name: "Cookie",
                  Service: "Service",
                  description: "Description"
                },
                body: [
                  {
                    name: "im_youtube",
                    description: "Used to remember if the user accepted the youtube service.",
                    Service: "Youtube Embed"
                  },
                  {
                    name: "im_vimeo",
                    description: "Used to remember if the user accepted the vimeo service.",
                    Service: "Vimeo Embed"
                  }
                ]
              }
            },
            {
              title: "Advertisement cookies",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              linkedCategory: "ads"
            },
            {
              title: "More information",
              description: "For any queries in relation to our policy on cookies and your choices, please <a class=\"cc__link\" href=\"#yourdomain.com\">contact me</a>."
            }
          ]
        }
      }
    }
  }
};