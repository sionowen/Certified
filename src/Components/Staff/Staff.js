import Mike_Singh from "../../Assets/Mike_Singh_000.jpg";
import Sion_Owen from "../../Assets/Sion_Owen_0001.jpg";
import Jennifer_Nelson from "../../Assets/Jennifer_Nelson_0001.jpg"
import "./staff.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Staff() {
  
  return (
    <div>
        <div className="row justify-content-center">
        <div className="color-text center col-xs-12 col-sm-8 col-md-7 col-xl-6">
        <h2>Michael Singh, CEO</h2>
        {/* <img className="what-we-do" src={Hospital}></img> */}
        <LazyLoadImage className="staff" src={Mike_Singh} />
      </div>
      <div className="center col-xs-12 col-sm-8 col-md-7 col-xl-6">
        <p className="sion">Michael Singh embodies what it means to take a 
        patient centric approach to a medical practice. He 
        started his medical career in nursing where caregiving 
        was a primary focus. Mike excelled in his practice and 
        in his studies and was drawn to the competitive anesthesia 
        specialty. He was especially drawn to the notion that he 
        might be able to take away someone’s pain. In 2007, Mike 
        graduated from the Minneapolis School of Anesthesia with a 
        Masters in Nurse Anesthesia.</p>
    <p>After a decade of working to serve his communities, 
    Michael purchased Certified Anesthesia Care Inc. in 2017. 
    From day one, Mike has had a vision for Certified: a 
    people-centered company that is known for excellent 
    provision of care, unparalleled service to facilities, 
    and responsible growth. Today, Certified is a premier 
    anesthesia company that provides services in both metro 
    and rural territories to a very broad, diverse patient 
    population.</p>

<p>As the CEO of Certified, Michael maintains operations at over 
40 facilities with over 100 anesthesia providers.  His primary 
focuses are efficiency, transparency, and professional 
cohesiveness. Michael’s goal is to follow his passion of 
helping others and give back to the greater anesthesia 
community through his diligent efforts at Certified.

While the work of a CEO is never done, Michael Sing spends his 
hours away from Certified with his wife Jolene and their 3 
children, Gavin, Gracen, and Gabriella.</p>
      </div>
      <div className="center col-xs-12 col-sm-8 col-md-7 col-xl-6 ">
      <h2>Sion Owen, CTO</h2>
        {/* <img className="what-we-do" src={Hospital}></img> */}
        <LazyLoadImage className="staff" src={Sion_Owen} />
      </div>
      <div className="center col-xs-12 col-sm-8 col-md-7 col-xl-6 ">
        <br />
        <p className="sion">Sion Owen is the Chief Technology Officer of 
            Certified Anesthesia Care. With his background 
            in web application development specializing in 
            medical process tools, and his love of process, Sion 
            has been instrumental in developing new tools and 
            workflows to make Certified as efficient and forward 
            looking as possible. Sion is currently tasked with 
            managing Certified’s website, custom scheduling 
            application UPIC, and managing the internal network 
            tools that Certified uses to stay efficient and 
            manage communication.
            </p>
    <p>Sion lives in the west exurbs of Minneapolis 
            with his wife Rachel and their two children, 
            Robert and Molly. When not working, Sion loves 
            cooking for his friends and family and spending 
            time outdoors.</p>
            </div>
            <br />
            <div className="center col-xs-12 col-sm-8 col-md-7 col-xl-6 ">
            <h2>Jennifer Nelson, Business Manager</h2>
        {/* <img className="what-we-do" src={Hospital}></img> */}
        <LazyLoadImage className="staff" src={Jennifer_Nelson} />
      </div>
      <div className="center col-xs-12 col-sm-8 col-md-7 col-xl-6 ">
        <p className="sion">Jennifer Nelson is Certified Anesthesia Care’s 
            dedicated Business Manager. Her love for 
            people and organization led Jennifer to 
            pursue and graduate with a degree in 
            Journalism/Communication Studies from 
            the University of Minnesota.</p>

    <p>After working on a corporate training 
    team, Jen took some time off to grow her 
    family.  Extremely community oriented, 
    Jennifer volunteered with non-profit 
    organizations in city planning, senior 
    outreach, and working with public 
    schools developing curriculum and 
    working on event planning.</p>

<p>As her family became more self-sufficient, 
    Jennifer wanted to continue to grow and 
    challenge herself. She utilized her 
    cognitive and organizational skills she 
    developed as a community leader in her 
    role as a loan processor. Jen was directly 
    recruited by Certified Anesthesia Care to 
    work as the Business Manager and tasked with 
    overhauling our Credentialling and CRNA 
    communications office.  As the Business 
    Manager, Jen works diligently to make sure 
    Certified CRNAs are scheduled, in compliance 
    and happy.</p>
<p>
Jennifer lives in metro area with her 
husband Steve and her 3 children, Ricky, 
Lorelai, and Josefina.  If she isn’t at her 
desk, you can find her in a hockey rink or 
at a soccer field.</p>
      </div>
      
      </div>
    </div>
  )
}

export default Staff;
