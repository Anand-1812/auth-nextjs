export default function UserProfilePage({params}: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile page</h1>
      <br/>
      <p className="text-4xl">Profile page {params.id}</p>
    </div>
  );
}

