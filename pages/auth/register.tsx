import AuthAbout from '~/components/AuthAbout'
import RegisterForm from '~/components/RegisterForm'
import DefaultLayout from '~/layouts/default'

export default function Login() {
  return (
    <DefaultLayout>
      <div className="flex flex-col md:flex-row items-center justify-around min-h-[80vh]">
        <AuthAbout />

        <RegisterForm />
      </div>
    </DefaultLayout>
  )
}
