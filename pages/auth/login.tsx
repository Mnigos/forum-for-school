import LoginForm from '~/components/LoginForm'
import DefaultLayout from '~/layouts/default'

export default function Login() {
  return (
    <DefaultLayout>
      <div className="flex items-center justify-center min-h-[80vh]">
        <LoginForm />
      </div>
    </DefaultLayout>
  )
}
