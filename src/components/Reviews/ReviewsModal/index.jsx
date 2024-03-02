import React from 'react'
import c from './ReviewsModal.module.scss'
import staticImg from '../../../images/static-2.svg'
import {API} from '../../../api'
import x from '../../../images/X.svg'


const ReviewsModal = ({setModalState}) => {
  const [choosenFile, setChoosenFile] = React.useState(null)
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [fullName, setFullName] = React.useState(null)
  const [desc, setDesc] = React.useState(null)
  const [error, setError] = React.useState(false)

  const handleChange = (e) => {
    setChoosenFile(e.target.files[0])
    
  }
  if (choosenFile) {
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImage(reader.result);
    };
    reader.readAsDataURL(choosenFile);
  }
  const post = async () => {
    const formData = new FormData()
    formData.append('image', choosenFile)
    formData.append('full_name', fullName)
    formData.append('description', desc)
    
    API.postReview(formData)
    .then(r => r.data && setModalState(false))
    .catch(e => e.response.data ? setError(true) : setError(false))
  }
  

  return (
    <div className={c.modal}>
      <div className={c.background} onClick={() => setModalState(false)}></div>
      <div className={c.modal_block}>
        {
          error && <h3>Заполните все поля!</h3>
        }
        <img className={c.x} src={x} alt="x" onClick={() => setModalState(false)}/>
        <h1>Добавить отзыв</h1>
        <div className={c.user_photo}>
          <img src={ selectedImage ? selectedImage : staticImg} alt="user" />
          <input type="file" id='add' accept="image/*" onChange={handleChange}/>
          <label htmlFor="add">Нажмите чтобы выбрать фото</label>
        </div>
        <input 
          type="text" 
          placeholder='Ваше имя' 
          onChange={(e) => setFullName(e.target.value)}
        />
        <textarea 
          type="text" 
          placeholder='Ваше сообщение' 
          onChange={(e) => setDesc(e.target.value)}
        >
        </textarea>
        <button onClick={post}>Отправить</button>
      </div>
    </div>
  )
}

export default ReviewsModal
