import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GTag } from "./gtag";

export function useAnalytics () {
  let gtag: GTag = null;
  if(gtag === null) {
    gtag = new GTag ();
  }

  useEffect(()=>{
    window.gtag('config', gtag.GA_TRACKING_ID, {
      debug: true,
    })
  }, [])

  // Google Analytics
  const router = useRouter()
  useEffect(() => {
    // Send a page view on route change.
    const handleRouteChange = (url) => {
      gtag.pageView(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  function onButtonClick (name) {
    gtag.event ({ 
      action: 'click',
      params: {
        type: 'button',
        name
      }
    });
  }

  return {
    gtag,
    onButtonClick
  };
}