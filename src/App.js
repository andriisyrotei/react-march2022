import Character from "./components/Character";


function App() {
  return (
      <div>

        <div>

          <Character name={'Homer'} desc={'Father'}
                     img={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}/>
        </div>

        <div>

          <Character name={'Marge'} desc={'Mother'}
                     img={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}/>
        </div>

        <div>
          <Character name={'Bart'} desc={'Oldest son'}
                     img={'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}/>
        </div>

        <div>
          <Character name={'Lisa'} desc={'Daughter'}
                     img={'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'}/>
        </div>

        <div>

          <Character name={'Maggie'} desc={'Youngest daughter'}
                     img={'https://static.simpsonswiki.com/images/thumb/9/9d/Maggie_Simpson.png/250px-Maggie_Simpson.png'}/>
        </div>

      </div>
  );
}

export default App;