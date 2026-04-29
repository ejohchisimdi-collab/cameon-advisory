export interface Pillar {
  icon: string;
  title: string;
  desc: string;
}

export interface Service {
  n: string;
  title: string;
  desc: string;
  tags: string[];
}

export interface Article {
  cat: string;
  title: string;
  date: string;
  teaser: string;
}

export interface ContactForm {
  name: string;
  org: string;
  email: string;
  challenge: string;
}