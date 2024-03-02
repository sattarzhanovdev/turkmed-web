import React from 'react'

const Map = () => {
  return (
    <div style={{position:'relative', overflow:'hidden', marginTop: '25px'}}>
      <a
        href="https://yandex.ru/maps/org/turkmed/3722607467/?utm_medium=mapframe&utm_source=maps"
        style={{color:"#eee",fontSize:"12px", position:"absolute", top:'0px'}}>
        ТуркМед
      </a>
      <a
        href="https://yandex.ru/maps/10310/osh/category/medical_center_clinic/184106108/?utm_medium=mapframe&utm_source=maps"
        style={{color:"#eee",fontSize:"12px", position:"absolute", top:'14px'}}>
        Медцентр, клиника в Оше
      </a>
      <iframe
        src="https://yandex.ru/map-widget/v1/?ll=72.808383%2C40.534984&mode=search&oid=3722607467&ol=biz&sctx=ZAAAAAgBEAAaKAoSCZ5eKcsQz0JAEdOgaB7A4EtAEhIJC9XNxd829j8RcQLTad0G3z8iBgABAgMEBSgKOABA1QFIAWISbGV0b192X2dvcm9kZT10cnVlagJydZ0BzcxMPaABAKgBAL0BByl26cIBBev2ie8N6gEA8gEA%2BAEAggIO0YLRg9GA0LrQvNC10LSKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=72.808383%2C40.534984&sspn=0.013635%2C0.006441&text=%D1%82%D1%83%D1%80%D0%BA%D0%BC%D0%B5%D0%B4&z=16.67"
        width="100%" height="450" frameborder="1" allowfullscreen="true" style={{position:'relative'}}>
      </iframe>
    </div>
  )
}

export default Map
