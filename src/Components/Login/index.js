import React from 'react'
import { userProfile, userName, userMail } from '../../Atom'
import { useNavigate } from 'react-router-dom'
import * as S from './style'
import * as I from '../../Assets'
import GoogleLogin from 'react-google-login'
import api from '../../api.js'
import { useRecoilState } from 'recoil'

const LoginPage = () => {
  const navigate = useNavigate()
  const [name, setName] = useRecoilState(userName)
  const [profile, setProfile] = useRecoilState(userProfile)
  const [mail, setMail] = useRecoilState(userMail)

  const onSuccess = res => {
    console.log(res)
    setName(res.profileObj.name)
    setProfile(res.profileObj.imageUrl)
    setMail(res.profileObj.email)
    navigate('/plan')
  }

  return (
    <>
      <S.MainSection>
        <S.Title>Welcome to new year plan</S.Title>
        <S.SubTitle>새해가 밝았습니다 신년계획을 작성해 보세요</S.SubTitle>
        <GoogleLogin
          clientId={process.env.CLIENT_ID}
          buttonText="Sign in with Google"
          accessType="offline"
          responseType="permission"
          approvalPrompt="force"
          prompt="consent"
          onSuccess={onSuccess}
          className="googleLogin"
        ></GoogleLogin>
      </S.MainSection>
    </>
  )
}

export default LoginPage
