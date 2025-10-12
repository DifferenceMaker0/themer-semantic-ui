import SiteLayout from './site-layout'
import NestedLayout from './nested-layout'

const User = ({ user }) => {
  return (
    <>
      <H1>Welcome</H1>
      <p>Hello {user.name}, welcome to your first Inertia app!</p>
    </>
  )
}

User.layout = page => (
  <SiteLayout title="Welcome">
    <NestedLayout children={page} />
  </SiteLayout>
)

export default User