import React, {useState, Fragment, useEffect} from 'react';
import CreatorModal from './components/CreatorModal'
import Header from './components/Header'
import CardsShowcase from './components/CardsShowcase/CardsShowcase'
import PostData from './components/Axios/PostData'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Gig from './components/GigStream/Gig'

function App() {

  //const [creatorData, setCreatorData] = useState()
  const [reqStatus, setReqStatus] = useState(false)
  const [modalStatus, setModalStatus] = useState(false)
  let modal = null

  useEffect(() => {
    let videoDiv = document.querySelector("video")
    videoDiv.style.display = "none"
    if (window.location.pathname.startsWith("/gig/")) {
      videoDiv.style.display = "block"
    } 
  })

  const CreatorModalSubmitHandler = data => {
    //setCreatorData(data)
    PostData(data).then(response => setReqStatus(true)).catch(err => console.log(err))
  }

  if (modalStatus) {
    modal =
      <CreatorModal
        submitHandler={CreatorModalSubmitHandler}
        reqStatus={reqStatus}
        modal={setModalStatus}
      />
  }

  return (
    <BrowserRouter>
      <div className="App container">
      {modal}
        <Switch>
          <Route path='/' exact render={props =>
            <Fragment>
              <Header modal={setModalStatus} />
              <CardsShowcase/>
            </Fragment>
          } />
          <Route path="/gig/:id" component={Gig} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

