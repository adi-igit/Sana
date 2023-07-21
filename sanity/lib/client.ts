import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skbJGB8ztg1CNB5uB0QwlNfVl3EepSBbYtwwZiYmJz7LbP5MFVAr02YQdDUKOFtkOl7ry14Asn7dmzvTf1xiDCBugRCiYpnh3HssFFJWGR0HmqnH1lmY4Hmmenpu45ZCVyG3PPq0tNzzICSDm44USWw0ATahYV0bMZ42uENBE19tw6SDsEB4",
})
