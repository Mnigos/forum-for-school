import AuthAbout from '~/components/AuthAbout'
import RegisterForm from '~/components/RegisterForm'

export default function Login() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around min-h-[80vh]">
      <AuthAbout />

      <RegisterForm />
    </div>
  )
}
