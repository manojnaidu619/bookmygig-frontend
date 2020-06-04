import React, {useState, Fragment, useEffect} from 'react';
import CreatorModal from './components/CreatorModal'
import CardModal from './components/CardsShowcase/CardModal'
import Header from './components/Header'
import CardsShowcase from './components/CardsShowcase/CardsShowcase'
import PostData from './components/Axios/PostData'
import Gig from './components/GigStream/Gig'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useMonetizationState } from 'react-web-monetization'

function App() {

  const [reqStatus, setReqStatus] = useState(false)
  const [modalStatus, setModalStatus] = useState(false)
  let modal = null

  const monetization = useMonetizationState()

  const Monetization = () => {
    if (monetization.state === 'stopped') {
      console.log("Monetization Stopped")
    }
    else if (monetization.state === 'pending') {
    console.log("Monetization pending")
    }
    else if (monetization.state === 'started') {
    console.log("Monetization started")
    }
    else if (!monetization.state) {
    console.log("Sign up to Coil")
    }
  }


  useEffect(() => {
    window.addEventListener('load', () => {
      document.querySelector("video").style.display = "none"
      if (window.location.pathname.startsWith("/gig/")) {
        document.querySelector("video").style.display = "block"
      } 
    })
    Monetization()
  })

  const CreatorModalSubmitHandler = data => {
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
      <div className="App container-fluid">
        {modal}
        <Switch>
          <Route path='/' exact render={props =>
            <Fragment>
              <Header modal={setModalStatus} />
              <CardsShowcase />
              <CardModal/>
            </Fragment>
          } />
          <Route path="/gig/:id" component={Gig} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

