import React from 'react';
import PriceCart from './priceCart';


function App () {
  let data =[{
    plan:"FREE",
    price:"0",
    user:"Single User",
    userEnabler:true,
    storage:"5GB Storage",
    storageEnabler:true,
    publicProject:"Unlimited Public Projects",
    publicProjectEnabler:true,
    access:"Community Access",
    accessEnabler:true,
    privateProject:"Unlimited Private Projects",
    privateProjectEnabler:false,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:false,
    subdomain:"Free Subdomain",
    subdomainEnabler:false,
    statusReport:"Monthly Status Reports",
    statusReportEnabler:false
  },
  {
    plan:"PLUS",
    price:"9",
    user:"5 Users",
    userEnabler:true,
    storage:"50GB Storage",
    storageEnabler:true,
    publicProject:"Unlimited Public Projects",
    publicProjectEnabler:true,
    access:"Community Access",
    accessEnabler:true,
    privateProject:"Unlimited Private Projects",
    privateProjectEnabler:true,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:true,
    subdomain:"Free Subdomain",
    subdomainEnabler:true,
    statusReport:"Monthly Status Reports",
    statusReportEnabler:false
  },
  {
    plan:"PROs",
    price:"49",
    user:"Unlimited Users",
    userEnabler:true,
    storage:"150GB Storage",
    storageEnabler:true,
    publicProject:"Unlimited Public Projects",
    publicProjectEnabler:true,
    access:"Community Access",
    accessEnabler:true,
    privateProject:"Unlimited Private Projects",
    privateProjectEnabler:true,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:true,
    subdomain:"Unlimited Free Subdomains",
    subdomainEnabler:true,
    statusReport:"Monthly Status Reports",
    statusReportEnabler:true
  }]
  return <>
  <section className='pricing py-5'>
  <div className='container'>
    <div className='row'>
    <PriceCart data={data[0]}/>
    <PriceCart data={data[1]}/>
    <PriceCart data={data[2]}/>
    </div>
    </div>
  </section>
  </>
}

export default App;
