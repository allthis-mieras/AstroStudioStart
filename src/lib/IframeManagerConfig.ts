export const iframeManagerConfig = {
  onChange: ({ changedServices, eventSource }: { changedServices: string[], eventSource: { type: string } }) => {
    if (eventSource.type === 'click') {
      const servicesToAccept = [
        ...(window as any).CookieConsent.getUserPreferences().acceptedServices['analytics'],
        ...changedServices,
      ];

      (window as any).CookieConsent.acceptService(servicesToAccept, 'analytics');
    }
  },

  currLang: 'en',

  services: {
    youtube: {
      embedUrl: 'https://www.youtube-nocookie.com/embed/{data-id}?modestbranding=1&autohide=1',
      thumbnailUrl: 'https://i3.ytimg.com/vi/{data-id}/hqdefault.jpg',

      iframe: {
        allow:
          'accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen;',
      },

      languages: {
        en: {
          notice:
            'This content is hosted by a third party. By showing the external content you accept the <a rel="noreferrer noopener" href="https://www.youtube.com/t/terms" target="_blank">terms and conditions</a> of youtube.com.',
          loadAllBtn: 'Accept and Load',
        },
      },
    },

    vimeo: {
      embedUrl: 'https://player.vimeo.com/video/{data-id}',
      iframe: {
        allow: 'fullscreen; picture-in-picture;',
      },

      thumbnailUrl: async (dataId: string, setThumbnail: (url: string) => void) => {
        const url = `https://vimeo.com/api/v2/video/${dataId}.json`;
        const response = await (await fetch(url)).json();
        const thumbnailUrl = response[0]?.thumbnail_large;
        thumbnailUrl && setThumbnail(thumbnailUrl);
      },

      languages: {
        en: {
          notice:
            'This content is hosted by a third party. By showing the external content you accept the <a rel="noreferrer noopener" href="https://vimeo.com/terms" target="_blank">terms and conditions</a> of vimeo.com.',
          loadBtn: 'Load once',
          loadAllBtn: "Don't ask again",
        },
      },
    },
  },
};