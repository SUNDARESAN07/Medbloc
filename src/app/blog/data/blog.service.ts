import { Injectable } from '@angular/core';
import { BlogData } from './blog-data';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blogs: BlogData[] = [
    {
      image: '../assets/blog/banner-news-1.png',
      title: 'Your medicine box may have fake drugs',
      desc: `Bought an antacid or multivitamin lately which did not seem to have any effect? It might have been
      fake medicine manufactured locally by an inter-state syndicate...`,
      link: 'https://economictimes.indiatimes.com/industry/healthcare/biotech/pharmaceuticals/your-medicine-box-may-have-fake-drugs/articleshow/63351877.cms'
    },
    {
      image: '../assets/blog/banner-news-2 1.png',
      title: 'Is your medicine fake? Here’s how you can find out.',
      desc: `Here are certain preventive measures you might want to take to avoid getting duped into buying fake
      medicines...`,
      link: 'https://health.economictimes.indiatimes.com/news/industry/is-your-medicine-fake-heres-how-you-can-find-out/66050664'
    },
    {
      image: '../assets/blog/banner-news-3.png',
      title: 'How fake drugs end up in our public health system (and how to spot them)',
      desc: `Prescribing and using pharmaceuticals is a matter of trust. Health service providers and patients
      need to know medicines are genuine....`,
      link: 'https://theconversation.com/how-fake-drugs-end-up-in-our-public-health-system-and-how-to-spot-them-73594'
    },
    {
      image: '../assets/blog/banner-news-4.png',
      title: 'Counterfeit Drugs',
      desc: `A WHO report (2017) claims 10.5 percent of medicines sold in low and middle-income countries,
      including India, are substandard and falsified....`,
      link: 'https://health.economictimes.indiatimes.com/news/pharma/counterfeit-drugs-threat-to-indias-reputation-of-indian-self-reliant-model/81342614'
    },


  ];
  constructor() { }

  getBlogs():BlogData[]{
    return this.blogs;
  }
}
