import React from 'react'
import styles from './userPhotoPost.module.css'
import InputForm from './../../forms/inputForm/InputForm'
import useForm from '../../../useHooks/useForm'
import useFetch from '../../../useHooks/useFetch'
import { PHOTO_POST } from '../../../apiSrc/api'
const UserPhotoPost = () => {
          const nome = useForm()
          const peso = useForm('number')
          const idade = useForm('number')
          const [img, setImg] = React.useState({})

          const { loading, data, error, request } = useFetch()

          async function handleSubmit(event) {
                    event.preventDefault()
                    const formData = new FormData()
                    formData.append('img', img.raw)
                    formData.append('nome', nome.value)
                    formData.append('peso', peso.value)
                    formData.append('idade', idade.value)

                    const token = window.localStorage.getItem('token')
                    const { url, options } = PHOTO_POST(token, formData)
                    const { response } = await request(url, options)
                    console.log(response)
          }

          function handleImgChange({ target }) {
                    setImg({
                              raw: target.files[0],
                    })
          }
          return (
                    <section className={`${styles.photoPost} animeLeft`} >

                              <form onSubmit={handleSubmit}>

                                        <InputForm label='Nome' type='text' name='nome' {...nome} />
                                        <InputForm label='Peso' type='text' name='peso' {...peso} />
                                        <InputForm label='Idade' type='text' name='idade' {...idade} />
                                        <input type='file' name='img' id='img' onChange={handleImgChange} />
                                        <button>Enviar</button>
                              </form>
                    </section>
          )
}

export default UserPhotoPost
