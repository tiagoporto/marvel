export interface Image {
  path?: string
  extension?: string
}

export interface ComicSummary {
  resourceURI?: string
  name?: string
}
export interface Comics {
  available?: number
  collectionURI?: string
  items?: ComicSummary[]
  returned?: number
}

export interface SeriesSummary {
  resourceURI?: string
  name?: string
}
export interface Series {
  available?: number
  collectionURI?: string
  items?: SeriesSummary[]
  returned?: number
}

export interface StorySummary {
  resourceURI?: string
  name?: string
  type?: 'interiorStory' | 'cover'
}

export interface Story {
  available?: number
  collectionURI?: string
  items?: StorySummary[]
  returned?: number
}

export interface EventSummary {
  resourceURI?: string
  name?: string
}

export interface Event {
  available?: number
  collectionURI?: string
  items?: EventSummary[]
  returned?: number
}

export interface Url {
  type?: string
  url?: string
}

export interface Character {
  id: number
  name?: string
  description?: string
  modified?: string
  thumbnail?: Image
  resourceURI?: string
  comics?: Comics
  series?: Series
  stories?: Story
  events?: Event
  urls?: Url[]
}
