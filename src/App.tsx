function App() {
  return (
    <>
      <div className="h-screen bg-gray-600 flex justify-center items-center">
        <form action="" className="w-2/5 text-lg bg-white p-10 rounded-md">
          <div className="py-3">
            <label htmlFor="name">名前</label>
            <input
              id="name"
              type="text"
              className="block w-full border-2 focus:border-blue-400 rounded-md p-1"
            />
          </div>
          <div className="py-3">
            <label htmlFor="email">メールアドレス</label>
            <input
              id="email"
              type="text"
              className="block w-full border-2 focus:border-blue-400 rounded-md p-1"
            />
          </div>
          <div className="py-3">
            <label htmlFor="name">パスワード</label>
            <input
              id="password"
              type="text"
              className="block w-full border-2 focus:border-blue-400 rounded-md p-1"
            />
          </div>

          <button className="mt-5 p-2 bg-blue-400 w-full text-slate-100 rounded-md">
            送信
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
