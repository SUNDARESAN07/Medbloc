import { Injectable } from '@angular/core';
import { AboutData } from './about-data';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
   abouts:AboutData[]=[
    {
      icon:"bi bi-box-fill",
      title:"Serialization",
      desc:`MedBloc is a global track-and-trace, product authentication and consumer engagement company that will protect over number of packages through its technology-enabled solutions. Our proven serialization capabilities have enabled large pharmaceutical companies
      to meet different traceability requirements. We ensures the least amount of disruption to your production lines and provides end to end hardware solutions for packaging automation.`
    },
    {
      icon:"bi bi-link",
      title:"Track & Trace",
      desc:` MedBloc Track and Trace System ensures the visibility of drugs along the supply chain right from the time drug is manufactured till the drug is in the hands of a patient. This system helps in restricting counterfeited drugs from entering the supply
      chain thus, preventing expired products sales. It creates a chronological chain of events using the standards mentioned above to enable complete supply chain visibility and historical reporting.`
    },
    {
      icon:"bi bi-qr-code-scan",
      title:"Product Authentication",
      desc:` MedBloc’s Product Authentication solution tackles the problem, coupled with incentives for verifying codes and access to health information for patients. The system helps in identifying the locations of possible counterfeit sellers, by providing geo-coordinates
      as well as consumer phone number. The brand owners can use this data to raid the premises of these sellers, confiscate counterfeited products and initiate legal action against such sellers.`
    },
    {
      icon:"bi bi-people",
      title:"Patient Service Support",
      desc:`  MedBloc solution is a scalable and flexible patient support services platform that has been proven to be effective in increasing adherence and patient compliance on long term chronic regimens while generating insights into patient behavior. We can help
      you gain competitive insights and help you understand why and when your patients are dropping your product and which competitor they are switching to.`
    },
    {
      icon:"bi bi-stack ",
      title:"Databases",
      desc:` MedBloc uses blockchain mechanism. A blockchain is a digital ledger that stores information in data structures called blocks. MedBloc is decentralized that allow different parties to share information with each other without requiring a central administrator
      and maintains confidentiality. They not only keep information that is relevant in real-time but also can trace back information of transactions that have come before.`
    },
    {
      icon:"bi bi-chat-square-text-fill",
      title:"Other Features",
      desc:` MedBloc is also aided with "Crypto " - An integrated AI chatbot which makes navigation works in our website easier. MedBloc is provided with informative blogs to keep yourself updated about medical scams and counterfeit medicines. For further informations
      or queries contact us through noreply-medbloc.project2022@gmail.com`
    },
   ];
  constructor() { }
   

  getAbout():AboutData[]{
    return this.abouts;
  }
}
