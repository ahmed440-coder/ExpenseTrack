import React, { useContext,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthLayout from '../../components/layouts/AuthLayout'
import Input from '../../components/inputs/Input'
import ProfilePhotoSelector from '../../components/inputs/ProfilePhotoSelector'
import axiosInstance from '../../utils/axiosInstance'
import {Link} from 'react-router'
import { validateEmail } from '../../utils/helper'
import { API_PATHS } from '../../utils/apiPaths'
import {UserContext} from '../../context/UserContext'
import uploadImage from '../../utils/uploadImage.js'
const Signup = () => {
  const [profilePic, setProfilePic] = useState(null)
  const [fullName, setFullName] = useState("")
  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {updateUser} = useContext(UserContext)
  const [error, setError] = useState(null)

  const naviagte = useNavigate()

  //handle sign up submitting
  const handleSignup = async (e) => {
    e.preventDefault()
    let profileImageUrl = ""
    if(!fullName){
      setError("please enter your full name!");
      return;
    }
    if(!validateEmail(email)){
      setError("please enter a valid email!")
      return
    }
    if(!password){
      setError("please enter your password!")
      return;
    }
    setError("")

    //signup api call
    try {
        //upload image if present
        if (profilePic){
          const imgUploadRes = await uploadImage(profilePic);
          profileImageUrl = imgUploadRes.imageUrl || "";
        } 

      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER,{
        fullName,
        email,
        password,
        profileImageUrl
      })

      const {token, user} = response.data;

      if(token){
        localStorage.setItem("token",token);
        updateUser(user);
        naviagte("/dashboard")
      }
    } catch (error) {
      if (error.response && error.response.data.message){
        setError(error.response.data.message);
      }else{
        setError("something went wrong! please try again!")
      }
    }
  }
  return (
    <AuthLayout>
      <div className='w-full max-w-md mx-auto flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-[var(--color-text-primary)]'>Create an account</h3>
        <p className='text-sm text-[var(--color-text-secondary)] mt-1 mb-4'>
          Join us! Please enter your details.
        </p>
        <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
        <form onSubmit={handleSignup}>
          <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
            <Input
              value={fullName}
              onChange={({target}) => setFullName(target.value)}
              label="Full Name"
              placeholder="Name"
              type="text"
            />
            <Input
              value={email}
              onChange={({target}) => setEmail(target.value)}
              label="Email Address"
              placeholder="user@example.com"
              type="text"
            />
            <div className='col-span-2'>
            <Input
              value={password}
              onChange={({target}) => setPassword(target.value)}
              label="Password"
              placeholder="Minimum of 8 Characters!"
              type="password"
            />
            </div>
          </div>

          {error && <p className='text-rose-500 text-xs font-medium ph-2.5'>{error}</p>}
          <button type='submit' className='btn-primary mt-4'>SIGN UP</button>
          <p className='text-sm text-[var(--color-text-secondary)] mt-5 text-center'>
            Already have an account?{" "}
            <Link className="font-medium text-[var(--color-text-primary)] hover:underline" to="/login">Log In Here!</Link>
          </p>

        </form>
      </div>
    </AuthLayout>
  )
}

export default Signup
