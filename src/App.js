

function App() {
  return (
    <div className="wrapper clear">
      <header className='d-flex justify-between align-center p-40'>
        <div className='d-flex align-center'>
          <img width={18} height={18} src="/img/logo.png" alt=""/>
          <div>
            <h3 className='text-uppercase'>Sneakers</h3>
            <p className='opacity-5'>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className='d-flex'>
          <li className='mr-30'>
            <img width={18} height={18} src="/img/logo.png" alt=""/>
            <span>1200 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/logo.png" alt=""/>
          </li>
        </ul>
      </header>
      <div className='content p-40'>
        <h1>Все кроссовки</h1>

        <div className="sneakers d-flex">
          <div className="card p-40">
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt=""/>
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between'>
              <div className='d-flex flex-column align-center'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img  src="/img/plus.svg" alt="Plus"/>
              </button>
            </div>
          </div>
          <div className="card p-40">
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt=""/>
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between'>
              <div className='d-flex flex-column align-center'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img  src="/img/plus.svg" alt="Plus"/>
              </button>
            </div>
          </div><div className="card p-40">
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt=""/>
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between'>
              <div className='d-flex flex-column align-center'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img  src="/img/plus.svg" alt="Plus"/>
              </button>
            </div>
          </div>
          <div className="card p-40">
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt=""/>
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between'>
              <div className='d-flex flex-column align-center'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img  src="/img/plus.svg" alt="Plus"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
