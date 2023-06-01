import { Injectable } from '@angular/core';
import { CompanyData } from './company-data';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }
  companyList:CompanyData[]=[
    {
      image:"../assets/companyimg/logo1.jpg",
      title:"SUN PHARMACEUTICALS LTD",
      desc:`Sun Pharmaceutical Industries Ltd. (Sun Pharma) is the fourth largest specialty generic pharmaceutical company in the world with global revenues of over US$ 4.5 billion. Supported by more than 40 manufacturing facilities, we provide high-quality,
      affordable medicines, trusted by healthcare professionals and patients, to more than 100 countries across the globe.`,
      founder:"FOUNDER: Dilip Shanghvi",
      revenue:"REVENUE: ₹334.73 billion",
      link:"https://sunpharma.com",
      twitter:"https://twitter.com/SunPharma_Live?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      map:"https://www.google.com/search?q=sun%20pharma%20google%20map%20location&sxsrf=ALeKk00kXsc03Xq7iKg0DWMwCa6ZvvPFnQ:1620491685574&source=hp&ei=kr2WYKGDDJLZz7sPiqu2oAw&iflsig=AINFCbYAAAAAYJbLoh7blUVgcSlcsEll2tySZkPGZaqU&oq=sun+pharma+google+map+location&gs_lcp=Cgdnd3Mtd2l6EAM6BAgjECc6CgguEMcBEKMCEEM6BAgAEEM6DQgAEIcCELEDEIMBEBQ6BwgAELEDEEM6CAguELEDEIMBOg0ILhCxAxDHARCjAhBDOggIABCxAxCDAToOCC4QsQMQgwEQxwEQowI6BQgAELEDOgoIABCHAhCxAxAUOgIIADoHCAAQhwIQFDoLCC4QxwEQrwEQkwI6CAguEMcBEK8BOgYIABAWEB46CAgAEBYQChAeOgcIABBGEPoBOggIIRAWEB0QHjoHCCEQChCgAToFCCEQoAE6BAghEBU6BQghEJIDUMwGWOmLAWDvkAFoAHAAeACAAbEEiAHcHpIBCzEwLjE3LjIuNS0xmAEAoAEBqgEHZ3dzLXdpeg&sclient=gws-wiz&ved=2ahUKEwjAsp76wbrwAhVn7XMBHVrdAwEQvS4wAHoECAQQJA&uact=5&tbs=lf:1,lf_ui:4&tbm=lcl&rflfq=1&num=10&rldimm=11486648258992043087&lqi=Ch5zdW4gcGhhcm1hIGdvb2dsZSBtYXAgbG9jYXRpb24iA4gBAUje_aLq5YCAgAhaPAoTc3VuIHBoYXJtYSBsb2NhdGlvbhAAEAEQAhgAGAEiE3N1biBwaGFybWEgbG9jYXRpb24qBggCEAAQAZIBFnBoYXJtYWNldXRpY2FsX2NvbXBhbnmaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUlJjVFZZTlZWUkVBRaoBGxABKhciE3N1biBwaGFybWEgbG9jYXRpb24oAA&rlst=f#rlfi=hd:;si:,12.894974751836141,80.37962253300782;mv:[[13.248166713702032,80.8122092029297],[12.586945034120227,79.39085300175782],null,[12.917774646212925,80.10153110234376],10]",
      phno:"tel:+91 2243244324"
    },
    {
      image:"../assets/companyimg/logo2.jpg ",
      title:"THE CIPLA LIMITED",
      desc:`Cipla Limited is an Indian multinational pharmaceutical company, headquartered in Mumbai, India. Cipla primarily develops medicines to treat respiratory, cardiovascular disease, arthritis, diabetes, weight control and depression and also
      other medical conditions. On 23 April 2019, Cipla appointed Dr. Raju Mistry as Global Chief People Officer.`,
      founder:"FOUNDER: Khwaja Abdul Hamied",
      revenue:"REVENUE: ₹17,476.19 crore",
      link:"https://www.cipla.com/home",
      twitter:"https://twitter.com/Cipla_Global?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      map:"https://www.google.com/search?q=cipla+ltd&tbm=lcl&sxsrf=ALeKk02og4skn6xIK7eAVar-gy7MjsdsNA%3A1620491726641&ei=zr2WYJnBJor0rAHmirQ4&oq=cipla+&gs_l=psy-ab.3.2.35i39k1l3j0i433i131i67k1j0i263i20k1j0i433i131i67k1j0i433i131k1j0i433k1j0i433i131i67k1j0i67k1.271749.290723.0.293888.51.20.8.0.0.0.139.1483.2j11.14.0....0...1c.1.64.psy-ab..29.22.3518.10..0j35i362i39k1j0i273k1j0i433i67k1j0i433i131i273k1.1908.uoYMFtpaMIE",
      phno:"tel:+91 2224826000"
    },
    {
      image:"../assets/companyimg/logo3.jpg",
      title:"TORRENT PHARMACEUTICALS",
      desc:`Torrent Pharmaceuticals operates in more than 40 countries with over 2000 product registrations globally. It is active in the therapeutic areas of CV, CNS, gastro-intestinal, diabetology, anti-infective and pain management segments. It
      has also forayed into the therapeutic segments of nephrology and oncology while also strengthening its focus on gynecology and pediatric segments.`,
      founder:"FOUNDER: U.N.Mehta",
      revenue:"REVENUE: ₹8,060 crore",
      link:"https://torrentpharma.com/",
      twitter:"https://twitter.com/torrentpharmain?lang=en ",
      map:"https://www.google.com/search?q=torrentpharma&tbm=lcl&sxsrf=ALeKk03wlvvqHhQYlABrDXPxOs_Hsu8jXA%3A1620492021768&ei=9b6WYJOsLs-FyAP-_6vACg&oq=torr&gs_l=psy-ab.3.0.35i39k1j0i433i131k1j0i67k1j0i433k1j0i433i131k1j0j0i433k1.65873.68495.0.70337.13.9.0.0.0.0.212.722.2j3j1.7.0....0...1c.1.64.psy-ab..7.6.937.10..0i457k1j35i362i39k1j0i433i131i67k1.308.TsTUJDB4K0o",
      phno:"tel:+91 7926599000 "
    },
    {
      image:"../assets/companyimg/logo4.jpg",
      title:"DR REDDY'S LABORATORIES",
      desc:`Dr. Reddy's Laboratories is an Indian multinational pharmaceutical company located in Hyderabad, Telangana, India. The company was founded by Anji Reddy, who previously worked in the mentor institute Indian Drugs and Pharmaceuticals Limited.
      Dr.Reddy's manufactures and markets a wide range of pharmaceuticals in India and overseas. Company has over 190 medications, 60 APIs.`,
      founder:"FOUNDER: Kallam Anji Reddy",
      revenue:"REVENUE: ₹17,460 crore",
      link:"https://www.drreddys.com/",
      twitter:"https://twitter.com/drreddys?lang=en ",
      map:"https://www.google.com/search?q=dr+reddy%27s+laboratories+ltd&tbm=lcl&sxsrf=ALeKk00K5RmFTkO9olXlOfjIrlY2BYr_qw%3A1620492093238&ei=Pb-WYI-JDsim9QPsra7YBA&oq=dr&gs_l=psy-ab.3.0.35i39k1l3j0i273k1l2j0i433i131k1l5.43654.45817.0.47464.15.9.0.0.0.0.226.995.4j3j1.9.0....0...1c.1.64.psy-ab..10.5.857.10..0j0i433k1j35i362i39k1.238.zY3Qa-nAe-g#rlfi=hd:;si:;mv:[[13.0188551,80.2634119],[12.998988599999999,80.12813460000001]];tbs:lrf:!1m4!1u16!2m2!16m1!1e1!1m4!1u16!2m2!16m1!1e2!2m1!1e16!3sIAE,lf:1,lf_ui:4",
      phno:"tel:+91 4049002900 "
    },
    {
      image:"../assets/companyimg/logo5.jpg",
      title:"LUPIN LIMITED",
      desc:`Lupin Limited is an Indian multinational pharmaceutical company based in Mumbai, Maharashtra, India. It is one of the largest generic pharmaceutical companies by revenue globally. The company's key focus areas include paediatrics, cardiovascular,
      anti-infectives, diabetology, asthma and anti-tuberculosis. Lupin's research program covers the entire pharma product chain.`,
      founder:"FOUNDER: Desh Bandhu Gupta",
      revenue:"REVENUE: ₹158,585 million",
      link:"https://www.lupin.com/",
      twitter:"https://twitter.com/LupinGlobal?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      map:"https://www.google.com/search?q=lupin+pharma&tbm=lcl&sxsrf=ALeKk01qwMIqz7lptzyW4CaYBRryzVq92A%3A1620492141523&ei=bb-WYKm7H8iprtoPqa6IwAU&oq=lupi&gs_l=psy-ab.3.0.35i39k1l3j0i433i67k1j0i67k1l2j0i433i67k1j0i433i131i67k1j0i67k1l2.66908.71494.0.72686.31.14.0.0.0.0.233.1337.4j6j1.12.0....0...1c.1.64.psy-ab..25.6.920.10..0j0i457k1j35i362i39k1.245.QpIfRjbuxqM#rlfi=hd:;si:;mv:[[13.107209699999999,80.2506332],[13.106240900000001,80.24619609999999]];tbs:lrf:!1m4!1u16!2m2!16m1!1e1!1m4!1u16!2m2!16m1!1e2!2m1!1e16!3sIAE,lf:1,lf_ui:4",
      phno:"tel:+91 2266402323"
    },
    {
      image:"../assets/companyimg/logo6.jpg",
      title:"ALKEM LABORATORIES LTD",
      desc:`Alkem Laboratories Limited is an Indian multinational pharmaceutical company headquartered in Mumbai, Maharashtra, India that manufactures and sells pharmaceutical generics, formulations and nutraceuticals in India and globally. Alkem
      have 21 manufacturing facilities, 19 in India and 2 in US. 5 of the facilities are US, FDA, TGA, UK MHRA approved.`,
      founder:"FOUNDER: Samprada Singh",
      revenue:"REVENUE: ₹84,485 million",
      link:"https://www.alkemlabs.com/",
      twitter:"https://twitter.com/Alkem_Lab?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor ",
      map:"https://www.google.com/search?q=alkem+laboratories&tbm=lcl&sxsrf=ALeKk02rBa8NMShoviQaDAp_kMHcOeKqNQ%3A1620492215098&ei=t7-WYMTNBZK7rQH5-bnQAQ&oq=alkem&gs_l=psy-ab.3.0.35i39k1l3j0i433i131k1j0i67k1j0i433i67k1j0i433i131k1j0i433i67k1j0i433i131k1j0.41382.44982.0.45972.17.11.0.0.0.0.187.1128.3j7.11.0....0...1c.1.64.psy-ab..9.8.1066.10..0i457k1j35i362i39k1.227.RHfhcCaM96Q#rlfi=hd:;si:;mv:[[13.18184447731903,80.2111636476994],[13.18148452268097,80.21079395230059]]",
      phno:"tel:044 33254000"
    },
    {
      image:"../assets/companyimg/logo7.jpg",
      title:"CADILA HEALTHCARE LIMITED",
      desc:`Cadila Healthcare Limited (also known as Zydus Cadila) is an Indian multinational pharmaceutical company headquartered in Ahmedabad, Gujarat, India primarily engaged in the manufacture of generic drugs. It ranked 100th in the Fortune India
      500 list in 2020. It evolved over the next four decades into an established pharmaceutical company. It ranked 100th in the Fortune India 500.`,
      founder:"FOUNDER: Ramanbhai Patel",
      revenue:"REVENUE: ₹14,367 crore",
      link:"https://zyduscadila.com/ ",
      twitter:"https://twitter.com/ZydusUniverse",
      map:"https://www.google.com/search?q=zydus+cadila&tbm=lcl&sxsrf=ALeKk035kujWyiJKiJ5IcZfFT6lJt1K5Ow%3A1620492327423&ei=J8CWYMqqGcnorQGJkbuoAQ&oq=zyd&gs_l=psy-ab.3.1.35i39k1l3j0i433i131k1j0i263i433i131i457i20k1j0i402k1j0i433i131k1l4.45652.48701.0.51520.22.9.0.0.0.0.266.861.0j1j3.5.0....0...1c.1.64.psy-ab..18.4.1111.10..35i362i39k1j0i67k1j0i433i67k1j0i433i131i67k1j0i433k1.428.Oqtf4Zpapfg#rlfi=hd:;si:;mv:[[23.6291127,80.7225574],[12.3994327,71.9331397]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u16!2m2!16m1!1e1!1m4!1u16!2m2!16m1!1e2!2m1!1e16!2m1!1e3!3sIAE,lf:1,lf_ui:4",
      phno:"tel:+91 2718225001"
    },
    {
      image:"../assets/companyimg/logo8.jpg",
      title:"BIOCON LIMITED",
      desc:`Biocon Limited is an Indian biopharmaceutical company based in Bangalore, India founded by Kiran Mazumdar-Shaw. The company manufactures generic active pharmaceutical ingredients (APIs) that are sold in over 120 countries across the globe,
      including the developed markets of the United States and Europe. It also manufactures novel biologics, as well as, biosimilar insulin and antibodies.`,
      founder:"FOUNDER: Kiran Mazumdar-Shaw",
      revenue:"REVENUE: ₹6,528.60 crore",
      link:"https://www.biocon.com/",
      twitter:"https://twitter.com/bioconlimited",
      map:"https://www.google.com/search?q=biocon+limited&tbm=lcl&sxsrf=ALeKk00i2lSSP0_BoAF1ZAvZCmCC8buqOQ%3A1620492417253&ei=gcCWYLWID9av9QO9joGADg&oq=biocon+limi&gs_l=psy-ab.3.0.0i433i273k1j0l7j0i457k1j0i433i131k1.14554.16051.0.17074.5.4.0.1.1.0.193.767.0j4.4.0....0...1c.1.64.psy-ab..0.5.769...35i39k1j0i263i433i20k1j0i67k1j0i263i20k1j0i433i131i67k1j0i433k1.0.TyEFwWJtC2Y#rlfi=hd:;si:;mv:[[17.9922826,80.4896414],[9.542964,76.0877062]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u16!2m2!16m1!1e1!1m4!1u16!2m2!16m1!1e2!2m1!1e16!2m1!1e3!3sIAE,lf:1,lf_ui:4",
      phno:"tel:+91 8028082808"
    },
  ];

  getCompanyList():CompanyData[]{
    return this.companyList;
  }
}
