import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell'
import styled from 'styled-components'

//Styles
const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <Layout>
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>CRONJE EMPYRE</h1>
          <p>
            Techno Aritsts <br />
            Stockholm Sweden
          </p>
          <Link className="Button">Discover More</Link>
          <div className="SocialIcons">
            <a href="www.facebook.com/cronjeempyre">
              <img
                src={require('../images/Facebook.svg')}
                alt="Facebook"
                width="50"
              />
            </a>
            <img
              src={require('../images/Instagram.svg')}
              alt="Instagram"
              width="50"
            />
            <img
              src={require('../images/Spotify.svg')}
              alt="Spotify"
              width="50"
            />
            <img
              src={require('../images/Beatport.svg')}
              alt="Beatport"
              width="50"
            />
            <img
              src={require('../images/Soundcloud.svg')}
              alt="Soundcloud"
              width="50"
            />
            <img
              src={require('../images/Mixcloud.svg')}
              alt="Mixcloud"
              width="50"
            />
          </div>
          <Wave />
        </div>
      </div>
      <div className="Cards">
        <h2>Some of our recent mixes</h2>
        <div className="CardGroup">
          <Card
            title="Empyre State of Tech"
            text="Episode 10"
            image={require('../images/pim-myten-m41k1lTzjVM-unsplash.jpg')}
          />
          <Card
            title="Empyre State of Tech"
            text="Episode 9"
            image={require('../images/krys-amon-CfBlMP12zT8-unsplash.jpg')}
          />
          <Card
            title="Empyre State of Tech"
            text="Episode 8"
            image={require('../images/pim-myten-m41k1lTzjVM-unsplash.jpg')}
          />
          <Card
            title="Empyre State of Tech"
            text="Episode 7"
            image={require('../images/krys-amon-CfBlMP12zT8-unsplash.jpg')}
          />
        </div>
      </div>
      <Section
        image={require('../images/pim-myten-m41k1lTzjVM-unsplash.jpg')}
        logo={require('../images/CronjeEmpyreWhite.svg')}
        title="Bio"
        text="Andreas “Cronje” Michael Strand (SE) & Matt “Empyre” (NZ) met for the first time at a techno party in Stockholm, Sweden.

        It was here they were to develop a new kind of friendship together that would shape the foundations for the newly started but over 15 years experienced DJ & production duo partnership.
        Matt Empyre; 
        Based in Stockholm, Sweden but born in New Zealand. Matt has spent a decade involved in the small yet, passionate house and techno scenes throughout his home country.
        
        DJing and Promoting has been his main contributions to the scene, hosting Carl Cox for his first Wellington gig in 2014.
        
        It was a chance meeting and conversation with Carl Cox a year prior that kickstarted Matt Empyre’s production career.
        
        Andreas Cronje Michael Strand;
        Born in the outskirts of Stockholm, Sweden. Andreas has always had a big interest 
        in music growing up prior to being a guitarist playing in a metal cover band to becoming a sound engineer and a techno enthusiastic.
        
        Andreas has spent the last 6 years gathering experience and creating bonds on different dancefloors around the world, behind the decks and on the sets. Now he has finally come to the bar of realeasing his own productions together with his partner.
        Together they form Cronje Empyre.
        
        Andreas  matt had their first gig together at Slakthuset, Stockholm sweden 2018-06-29.
        
        Link to the set can be found here (Soft Daytime gig):
        https://www.mixcloud.com/CronjeEmpyre/slakthuset-live-recording-part-1/
        Empyre state of Tech featuring Cronje Empyre(Hard Techno):
        https://www.mixcloud.com/mattempyre/empyre-state-of-tech-003-feat-black-fish/"
      />
    </div>

    <SectionCaption>12 Sections - 6 Hours</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell title={cell.title} image={cell.image} />
      ))}
    </SectionCellGroup>
  </Layout>
)

export default IndexPage
