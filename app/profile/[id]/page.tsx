const UserProfile = async ({ params }: {params: Promise<{id: string}> }) => {

  const {id} = await params;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <br />
      <p className="text-3xl">Profile page <span className="text-indigo-400 bg-background">{id}</span></p>
    </div>
  )
}

export default UserProfile
