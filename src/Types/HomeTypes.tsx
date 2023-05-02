export interface Movie {
  id: any;
  name: string;
  image?: {
    medium: string;
    original: string;
  };
  status: string;
  summary: string;
  rating: any;
  genres: string[];
  premiered: string;
  userId: string;
  maxRating: any;
  schedule: {
    time: string;
    days: string[];
  };
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
    officialSite: string;
  };
  _embedded: {
    cast: CastMember[];
  };
}

export interface Character {
  id: number;
  url: string;
  name: string;
  image: {
    medium: string;
    original: string;
  };
  _links: {
    self: {
      href: string;
    };
  };
}

export interface CastMember {
  character: Character;
  self: boolean;
  voice: boolean;
}
