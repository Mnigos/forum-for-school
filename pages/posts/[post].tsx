import { useRouter } from 'next/router'

export default function Post() {
  const router = useRouter()

  const path = router.query.post

  return (
    <div>
      <h2>Hello World</h2>
      <div>rorijguie4hgidrjguidrhgthruighdrughuirghrh</div>
    </div>
  )
}
