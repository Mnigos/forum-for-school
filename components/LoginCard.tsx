import {
  Card,
  CardHeader,
  CardContent,
  Button,
  Input,
  Box,
} from '@material-ui/core'

const items = [
  <Input placeholder="username" key="1" />,
  <Input placeholder="password" key="2" />,
  <Button variant="contained" key="3">
    Log In
  </Button>,
]

export default function LoginCard() {
  return (
    <Card variant="outlined">
      <CardHeader title="Login to application" />
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {items.map((item, index) => (
            <Box sx={{ m: 2 }} key={index}>
              {item}
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  )
}
