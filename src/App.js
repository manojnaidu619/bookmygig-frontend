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
    const status = document.querySelector('#monetize-text')
    const pointer = document.querySelector('meta[name="monetization"]').content

    if (monetization.state === 'stopped') {
      status.textContent = "Monetization Stopped" 
    }
    else if (monetization.state === 'pending') {
      status.textContent = "Monetization Pending..."
    }
    else if (monetization.state === 'started') {
      if (window.location.pathname.startsWith('/gig/')) {
        status.textContent = `Monetization started, you are now contributing to creator ♥️ (pointer : ${pointer}) `
      } else {
        status.textContent = `Monetization started, Thanks for supporting us ✌️ (pointer : ${pointer})`
      }  
    }
    else if (!monetization.state) {
      status.textContent = "Please Subscribe to Coil to explore more features!"
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
        <div className="monetize-status-div" style={styles.monetizeStatus}>
          <h6 id="monetize-text" style={{margin: '8px'}} />
        </div>
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

const styles = {
  monetizeStatus: {
    color: '#ff2e63',
    textAlign: 'center', 
    backgroundColor: '#fff0f5',
    padding: '2px', 
    borderRadius: '5px'
  }
}

export default App;

