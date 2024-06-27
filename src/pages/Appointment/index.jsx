import React, { useRef } from 'react'
import c from './Appointment.module.scss'
import arrow from '../../images/arrow-down.svg'
import { GetDoctors, ScrollTop } from '../../helpers'
import { useNavigate, useParams } from 'react-router-dom'
import { timeList } from '../../utils'
import { API, toSheets } from '../../api'
import { IMask, IMaskInput } from 'react-imask';

const Appointment = () => {
  const { id } = useParams()
  const { doctors } = GetDoctors()
  const ref = useRef();
  const [error, setError] = React.useState(null)
  const [genderView, setGenderView] = React.useState(false)
  const [timeView, setTimeView] = React.useState(false)
  const [date, setDate] = React.useState('')
  const [time, setTime] = React.useState('')
  const navigate = useNavigate()
  
  const [value, setValue] = React.useState({
    "Имя": '',
    "Пол": '',
    "Время": '',
    "Дата": '',
    "Номер телефона": '',
    "Доктор": doctors.find(item => item.id === Number(id))?.full_name,
  })
  // const [value, setValue] = React.useState({
  //   full_name: '',
  //   sex: '',
  //   time: '',
  //   phone_number: '',
  //   doctor: Number(id),
  // })


  const handleAppointment = () => {
    // API.postAppointment(value).then(r => r.data && navigate('/')).catch(e => e.response.data && setError(e.response.data))
    toSheets(value).then(res => res.data ? navigate('/') : '')
  }

  React.useEffect(() => {
    setValue({...value, "Время": time, "Дата": date})
  }, [date, time])

   React.useEffect(() => {
    setTimeView(false)
  }, [genderView])

  React.useEffect(() => {
    ScrollTop()
  }, [])

  const item = doctors?.find(value => value.id === Number(id))

  // const PhoneMask = "+{996} (000) 00-00-00";
  const PhoneMask = "0 (000) 00-00-00";
  const phoneMask = [
    {
      mask: PhoneMask,
    }
  ];


  return (
    <div className={c.appointment}>
      <div className={c.more}>
        <div className={c.info}>
          <div className={c.left}>
            <img 
              src={item?.image} 
              alt='img'
            />
          </div>
          <div className={c.right}>
            <div className={c.title}>
              <h1>{item?.full_name}</h1>
              <h2>{item?.job}</h2>
            </div>
            <div className={c.form}>
              <div className={c.block_1}>
                {
                  error && <p className={c.error_msg}>Заполните все поля!</p>
                }
                <input 
                  type="text" 
                  placeholder='Имя' 
                  onChange={(e) => setValue({...value, "Имя": e.target.value})}
                />
                <div className={c.gender} onClick={() => setGenderView(!genderView)}>
                  <p>{value['Пол'].length > 0 ? value['Пол'] : 'Пол'}</p>
                  <img src={arrow} alt=">" />
                </div>
                {
                  genderView ?
                  <div className={c.gender_select}>
                    <p onClick={() => {
                      setValue({...value, "Пол": 'male'})
                      setGenderView(false)
                    }}>
                      М
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="90%" height="2" viewBox="0 0 464 2" fill="none">
                      <path d="M0 1L464 1.00004" stroke="white" stroke-opacity="0.5" />
                    </svg>
                    <p onClick={() => {
                      setValue({...value, "Пол": 'female'})
                      setGenderView(false)
                    }}>
                      Ж
                    </p>
                  </div> : null
                }
                
              </div>
              <div className={c.block_2}>
                <input 
                  type="text" 
                  ref={ref}
                  placeholder='Дата'
                  onChange={(e) => setDate(e.target.value)}
                  onFocus={() => (ref.current.type = "date")}
                  onBlur={() => (ref.current.type = "date")}
                />
                <div 
                  className={c.gender} 
                  onClick={() => setTimeView(!timeView)}
                >
                  <p>{time.length > 0 ? time : 'Время'}</p>
                  <img src={arrow} alt=">" />
                </div>
                {
                  timeView ?
                  <ul className={c.time}>
                    {
                      timeList.map((item, id) => (
                        <li 
                          key={id} 
                          onClick={() => {
                            setTime(item)
                            setTimeView(false)
                          }}
                        >
                          {item}
                        </li>
                      ))
                    }
                  </ul> : null
                }
              </div>
              <div className={c.block_3}>
                <IMaskInput  
                  mask={phoneMask} 
                  placeholder='Номер телефона' 
                  onChange={(e) => setValue({...value, "Номер телефона": e.target.value})}
                />
                <button onClick={handleAppointment}>Подтвердить</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointment
