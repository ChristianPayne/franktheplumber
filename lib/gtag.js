export class GTag {
  constructor () {
    process.env.NEXT_PUBLIC_GA_ID ?? console.error("No GA Public Key Found!");
    this.GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID
  }

  // https://developers.google.com/analytics/devguides/collection/gtagjs/pages
  pageView (url) {
    window.gtag('config', this.GA_TRACKING_ID, {
      page_path: url,
    })
  }

  // https://developers.google.com/analytics/devguides/collection/gtagjs/events
  event ({ action, params }) {
    window.gtag('event', action, params)
  }
}