import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {
  TravelGuideContainer,
  Heading,
  GuideContainer,
  LoaderContainer,
  Guide,
  Image,
  Name,
  Description,
} from './styledComponents'

const apiStatusConstrains = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  initial: 'INITIAL',
}

class TravelGuide extends Component {
  state = {travelGuideList: [], apiStatus: apiStatusConstrains.initial}

  componentDidMount() {
    this.getTravelGuideList()
  }

  onFetchSuccess = data => {
    console.log(data)
    const modifiedData = data.map(eachObj => ({
      id: eachObj.id,
      name: eachObj.name,
      imageUrl: eachObj.image_url,
      description: eachObj.description,
    }))
    this.setState({
      apiStatus: apiStatusConstrains.success,
      travelGuideList: modifiedData,
    })
  }

  onFetchFailure = () => {
    console.log('failure')
    this.setState({apiStatus: apiStatusConstrains.failure})
  }

  getTravelGuideList = async () => {
    this.setState({apiStatus: apiStatusConstrains.initial})
    const url = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(url)

    if (response.ok === true) {
      const data = await response.json()
      this.onFetchSuccess(data.packages)
    } else {
      const data = await response.json()
      console.log(data)
      this.onFetchFailure()
    }
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </LoaderContainer>
  )

  renderSuccessView = () => {
    console.log('success')
    const {travelGuideList} = this.state
    return (
      <GuideContainer>
        {travelGuideList.map(eachObj => {
          const {id, imageUrl, name, description} = eachObj
          return (
            <Guide key={id}>
              <Image src={imageUrl} alt={name} />
              <Name>{name}</Name>
              <Description>{description}</Description>
            </Guide>
          )
        })}
      </GuideContainer>
    )
  }

  renderSomething = apiStatus => {
    switch (apiStatus) {
      case apiStatusConstrains.initial:
        return this.renderLoadingView()
      case apiStatusConstrains.success:
        return this.renderSuccessView()
      case apiStatusConstrains.failure:
        return this.renderFailureView()

      default:
        return null
    }
  }

  render() {
    const {apiStatus} = this.state
    return (
      <TravelGuideContainer>
        <Heading>Travel Guide</Heading>
        {this.renderSomething(apiStatus)}
      </TravelGuideContainer>
    )
  }
}

export default TravelGuide
