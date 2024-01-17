"use client";
const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    alert("login not successfully");
  };
  return (
    <div
      className="py-20"
      style={{
        background:
          " linear-gradient(90deg, rgba(235,103,83,0.3393732492997199) 3%, rgba(255,255,255,1) 100%)",
      }}
    >
      <h2 className="text-center font-bold mb-10 text-3xl">
        Please! Login Here
      </h2>
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-4 max-w-96 mx-auto"
      >
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered w-full "
        />
        <input
          type="text"
          placeholder="Password"
          className="input input-bordered w-full "
        />
        <button
          type="submit"
          className="btn btn-success text-white bg-[#eb6753] hover:bg-[#eb6753] border-none"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
